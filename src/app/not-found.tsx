"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <div style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "#161616",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            color: "#FFFFFF",
            fontFamily: "'Poppins', sans-serif"
        }}>
            {/* Background Grid/Tech Pattern */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `
                    linear-gradient(rgba(159, 139, 231, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(159, 139, 231, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
                zIndex: 1
            }}></div>

            {/* Glowing Orbs */}
            <div style={{
                position: "absolute",
                top: "20%",
                left: "30%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(159, 139, 231, 0.15) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(60px)",
                animation: "floatOrb 10s ease-in-out infinite alternate",
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
                <style jsx>{`
                    @keyframes floatOrb {
                        0% { transform: translate(0, 0); }
                        100% { transform: translate(50px, 100px); }
                    }

                    @keyframes glitch {
                        0% { transform: translate(0); text-shadow: 2px 2px #9F8BE7; }
                        20% { transform: translate(-2px, 2px); text-shadow: -2px -2px #9F8BE7; }
                        40% { transform: translate(-2px, -2px); text-shadow: 2px -2px #9F8BE7; }
                        60% { transform: translate(2px, 2px); text-shadow: -2px 2px #9F8BE7; }
                        80% { transform: translate(2px, -2px); text-shadow: 2px 2px #9F8BE7; }
                        100% { transform: translate(0); text-shadow: 2px 2px #9F8BE7; }
                    }

                    @keyframes rotateLogo {
                        from { transform: rotateY(0deg); }
                        to { transform: rotateY(360deg); }
                    }

                    .glitch-text {
                        font-size: clamp(8rem, 15vw, 12rem);
                        font-weight: 900;
                        line-height: 1;
                        margin: 0;
                        color: #FFFFFF;
                        animation: glitch 3s infinite linear alternate-reverse;
                        letter-spacing: -0.05em;
                    }

                    .glow-btn {
                        display: inline-flex;
                        align-items: center;
                        padding: 18px 40px;
                        background: #9F8BE7;
                        color: #161616;
                        text-decoration: none;
                        border-radius: 40px;
                        font-weight: 700;
                        font-size: 1.1rem;
                        transition: all 0.3s ease;
                        box-shadow: 0 0 20px rgba(159, 139, 231, 0.4);
                        margin-top: 40px;
                        border: 2px solid #9F8BE7;
                    }

                    .glow-btn:hover {
                        background: transparent;
                        color: #9F8BE7;
                        box-shadow: 0 0 40px rgba(159, 139, 231, 0.6);
                        transform: translateY(-5px);
                    }

                    .logo-container {
                        perspective: 1000px;
                        margin-bottom: 20px;
                    }

                    .logo-3d {
                        width: 80px;
                        height: 80px;
                        animation: rotateLogo 8s linear infinite;
                        filter: drop-shadow(0 0 15px rgba(159, 139, 231, 0.5));
                    }
                `}</style>

                {/* Logo Section */}
                <div className="logo-container">
                    <img
                        src="/img/w-logo.png"
                        alt="Webisse Logo"
                        className="logo-3d"
                        style={{ filter: "invert(1) brightness(2)" }}
                    />
                </div>

                <h1 className="glitch-text">{t.notFound.title}</h1>
                <h2 style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    fontWeight: 700,
                    marginBottom: "20px",
                    color: "#9F8BE7"
                }}>
                    {t.notFound.subtitle}
                </h2>
                <p style={{
                    fontSize: "1.2rem",
                    maxWidth: "600px",
                    margin: "0 auto",
                    opacity: 0.8,
                    lineHeight: "1.6"
                }}>
                    {t.notFound.description}
                </p>

                <Link href="/" className="glow-btn">
                    {t.notFound.backHome}
                    <i className="ph-bold ph-arrow-left" style={{ marginLeft: "10px", transform: "rotate(180deg)" }}></i>
                </Link>
            </div>

            {/* Aesthetic Border/Frame */}
            <div style={{
                position: "absolute",
                top: "20px",
                bottom: "20px",
                left: "20px",
                right: "20px",
                border: "1px solid rgba(159, 139, 231, 0.1)",
                pointerEvents: "none",
                zIndex: 2
            }}></div>
        </div>
    );
}
