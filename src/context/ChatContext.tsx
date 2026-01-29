"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface ChatContextType {
    isOpen: boolean;
    openChat: () => void;
    closeChat: () => void;
    toggleChat: () => void;
    messages: Message[];
    addMessage: (message: Message) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    resetChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Merhaba! Webisse'ye hoş geldin. Nasıl bir proje hayal ediyorsun? Senin için mükemmel bir teklif hazırlayabilirim." },
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const openChat = () => setIsOpen(true);
    const closeChat = () => setIsOpen(false);
    const toggleChat = () => setIsOpen((prev) => !prev);
    const addMessage = (message: Message) => setMessages((prev) => [...prev, message]);
    const resetChat = () => {
        setMessages([
            { role: "assistant", content: "Merhaba! Webisse'ye hoş geldin. Nasıl bir proje hayal ediyorsun? Senin için mükemmel bir teklif hazırlayabilirim." },
        ]);
        setIsLoading(false);
    };

    return (
        <ChatContext.Provider value={{ isOpen, openChat, closeChat, toggleChat, messages, addMessage, isLoading, setIsLoading, resetChat }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
}
