import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const WEBISSE_API_KEY = process.env.WEBISSE_API_KEY;
const WEBISSE_API_URL = "https://sistem.webisse.tech/api/website-forms/submit";

const tools = [
    {
        type: "function" as const,
        function: {
            name: "submit_lead_form",
            description: "Submit collected lead information (name, email, phone, company, project details) to the internal system.",
            parameters: {
                type: "object",
                properties: {
                    submitterName: {
                        type: "string",
                        description: "The full name of the user (Ad Soyad).",
                    },
                    submitterEmail: {
                        type: "string",
                        description: "The email address of the user.",
                    },
                    submitterPhone: {
                        type: "string",
                        description: "The phone number of the user.",
                    },
                    subject: {
                        type: "string",
                        description: "The company name or project title (Şirket Adı).",
                    },
                    message: {
                        type: "string",
                        description: "A summary of the user's project needs and what was discussed.",
                    },
                },
                required: ["submitterName", "submitterEmail", "submitterPhone", "subject", "message"],
            },
        },
    },
];

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages } = body;

        const systemPrompt = `Sen Webisse Yazılım Şirketi'nin tatlı dilli, meraklı ve yardımsever dijital asistanısın.
Amacın: Kullanıcıyla samimi bir sohbet kurarak hayallerindeki projeyi (Web sitesi, mobil uygulama, SEO vb.) anlamak ve iletişim bilgilerini alıp ekibimize iletmektir.

Kişiliğin:
- Çok kibar, nazik ve enerjik konuş. "Merhabalar!", "Harika!", "Çok memnun oldum!" gibi ifadeler kullan.
- Asla "Satış asistanı" gibi resmi bir dil kullanma.
- Tek seferde çok fazla soru sorma. Kullanıcıyı boğmadan, sohbet havasında ilerle.
- Meraklı ol: "Nasıl bir tasarım hayal ediyorsunuz?", "Hangi renkleri seversiniz?" gibi detayları sor.

Görev Akışı:
1. Kullanıcıyı tanı (Adını öğren).
2. Projesini veya ihtiyacını anla.
3. İletişim bilgilerini (Telefon, E-posta, Şirket Adı) nazikçe iste. "Size özel bir teklif hazırlayabilmemiz için numaranızı alabilir miyim?" gibi.
4. Tüm bilgileri aldıktan sonra 'submit_lead_form' fonksiyonunu çağırarak bilgileri kaydet.
5. Kayıt başarılı olduğunda kullanıcıya teşekkür et ve ekibin en kısa sürede döneceğini söyle.

Eğer kullanıcı sadece sohbet etmek istiyorsa, buna da uyum sağla ancak konuyu nazikçe projelere getir.`;

        // First call to LLM
        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                ...messages,
            ],
            model: "llama-3.3-70b-versatile",
            tools: tools,
            tool_choice: "auto",
        });

        const responseMessage = completion.choices[0]?.message;

        // Check if the model wants to call a tool
        if (responseMessage?.tool_calls) {
            const toolCall = responseMessage.tool_calls[0];

            if (toolCall.function.name === "submit_lead_form") {
                const toolArgs = JSON.parse(toolCall.function.arguments);

                // Prepare API Payload
                const apiPayload = {
                    formType: "genel_talep", // Fixed type as per request
                    submitterName: toolArgs.submitterName,
                    submitterEmail: toolArgs.submitterEmail,
                    submitterPhone: toolArgs.submitterPhone || "Belirtilmedi",
                    subject: toolArgs.subject || "Genel Talep",
                    message: toolArgs.message,
                };

                // Execute Internal API Call
                const apiResponse = await fetch(WEBISSE_API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-API-Key": WEBISSE_API_KEY || "",
                    },
                    body: JSON.stringify(apiPayload),
                });

                let toolOutput = "Form başarıyla gönderildi.";
                if (!apiResponse.ok) {
                    console.error("Internal API Error:", await apiResponse.text());
                    toolOutput = "Form gönderilirken bir hata oluştu ancak bilgiler not edildi.";
                }

                // Append tool interactions to history and get final response
                const secondResponse = await groq.chat.completions.create({
                    messages: [
                        { role: "system", content: systemPrompt },
                        ...messages,
                        responseMessage,
                        {
                            role: "tool",
                            tool_call_id: toolCall.id,
                            content: toolOutput,
                        },
                    ],
                    model: "llama-3.3-70b-versatile",
                });

                return NextResponse.json({
                    role: "assistant",
                    content: secondResponse.choices[0]?.message?.content
                });
            }
        }

        // Normal response (no tool call)
        return NextResponse.json({ role: "assistant", content: responseMessage?.content || "Anlaşıldı." });

    } catch (error) {
        console.error("Groq API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
