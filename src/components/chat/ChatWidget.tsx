"use client";

import React, { useState, useEffect, useRef } from "react";
import { useChat } from "@/context/ChatContext";

export default function ChatWidget() {
    const { isOpen, toggleChat, closeChat, messages, addMessage, isLoading, setIsLoading, resetChat } = useChat();
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user" as const, content: input };
        addMessage(userMessage);
        setInput("");
        setIsLoading(true);

        try {
            const conversation = [...messages, userMessage];

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: conversation }),
            });

            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();
            addMessage({ role: "assistant", content: data.content });

        } catch (error) {
            console.error("Chat error:", error);
            addMessage({ role: "assistant", content: "Bir hata oluştu. Lütfen tekrar deneyin." });
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) {
        return (
            <button
                onClick={toggleChat}
                className="fixed-chat-btn"
                aria-label="Open Chat"
                style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    width: "60px", // Smaller
                    height: "60px", // Smaller
                    borderRadius: "50%",
                    backgroundColor: "#3E3E3E", // Lighter Dark Grey
                    color: "#fff",
                    border: "none",
                    boxShadow: "0 4px 25px rgba(0,0,0,0.4)",
                    cursor: "pointer",
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                </svg>
            </button>
        );
    }

    return (
        <div
            className="chat-widget-container"
            style={{
                position: "fixed",
                bottom: "30px",
                right: "30px",
                width: "360px", // Smaller width
                height: "520px", // Smaller height
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                zIndex: 9999,
                border: "1px solid #e0e0e0",
                overflow: "hidden",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            {/* Custom Scrollbar Styles and Animation */}
            <style jsx>{`
        .chat-messages::-webkit-scrollbar {
          width: 8px;
        }
        .chat-messages::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .chat-messages::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }
        .chat-messages::-webkit-scrollbar-thumb:hover {
          background: #aaa;
        }
      `}</style>

            {/* Header */}
            <div
                style={{
                    padding: "15px 20px",
                    backgroundColor: "#3E3E3E", // Lighter Dark Grey
                    borderBottom: "1px solid #555",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#00ff88", boxShadow: "0 0 8px #00ff88" }}></div>
                    <span style={{ color: "#fff", fontWeight: 600, fontSize: "1.1rem" }}>Webisse Asistan</span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <button
                        onClick={toggleChat}
                        title="Küçült"
                        style={{
                            background: "none",
                            border: "none",
                            color: "#e0e0e0",
                            cursor: "pointer",
                            fontSize: "28px",
                            lineHeight: "0.8",
                            padding: "0",
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        &minus;
                    </button>
                    <button
                        onClick={() => {
                            resetChat();
                            closeChat();
                        }}
                        title="Kapat"
                        style={{
                            background: "none",
                            border: "none",
                            color: "#e0e0e0",
                            cursor: "pointer",
                            fontSize: "24px",
                            lineHeight: "1",
                            padding: "0",
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        &times;
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div
                className="chat-messages"
                style={{
                    flex: 1,
                    padding: "20px",
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    backgroundColor: "#f9f9f9",
                    minHeight: 0,
                    overscrollBehavior: "contain", // Prevents background scroll
                }}
                onWheel={(e) => e.stopPropagation()} // Extra safety for some browsers
            >
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                            maxWidth: "85%",
                            backgroundColor: msg.role === "user" ? "#3E3E3E" : "#ffffff", // Lighter Dark Grey
                            color: msg.role === "user" ? "#fff" : "#333",
                            padding: "15px 20px",
                            borderRadius: msg.role === "user" ? "20px 20px 0 20px" : "20px 20px 20px 0",
                            fontSize: "1.05rem",
                            lineHeight: "1.5",
                            boxShadow: msg.role === "user" ? "0 4px 10px rgba(0,0,0,0.3)" : "0 4px 10px rgba(0,0,0,0.05)",
                        }}
                    >
                        {msg.content}
                    </div>
                ))}
                {isLoading && (
                    <div style={{ alignSelf: "flex-start", color: "#666", fontSize: "0.95rem", marginLeft: "10px", fontStyle: "italic" }}>
                        Yazıyor...
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
                onSubmit={handleSubmit}
                style={{
                    padding: "20px",
                    borderTop: "1px solid #eee",
                    display: "flex",
                    gap: "12px",
                    backgroundColor: "#fff",
                }}
            >
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Mesajınızı yazın..."
                    style={{
                        flex: 1,
                        padding: "15px 20px",
                        borderRadius: "30px",
                        border: "1px solid #ddd",
                        backgroundColor: "#f5f5f5",
                        color: "#333",
                        outline: "none",
                        fontSize: "1.05rem",
                        boxShadow: "inset 0 2px 5px rgba(0,0,0,0.03)",
                    }}
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "50%",
                        backgroundColor: "#3E3E3E", // Lighter Dark Grey
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: isLoading ? 0.7 : 1,
                        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                </button>
            </form>
        </div>
    );
}
