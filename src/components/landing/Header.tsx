"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const { t, locale, changeLanguage } = useLanguage();

    return (
        <header id="header" className="mxd-header">
            {/* header logo */}
            <div className="mxd-header__logo loading__fade">
                <a href="index-main.html" className="mxd-logo" style={{ alignItems: "center", marginTop: "10px", textDecoration: "none", maxWidth: "90vw" }}>
                    {/* logo icon */}
                    <img
                        src="/img/w-logo.png"
                        alt="Webisse Logo"
                        className="mxd-logo__image"
                        style={{
                            width: "90px", // Reduced from 110px
                            height: "auto",
                            objectFit: "contain",
                            marginRight: "15px",
                            mixBlendMode: "multiply",
                            filter: "contrast(1.2)"
                        }}
                    />

                    <style jsx>{`
                        @keyframes shine-sweep {
                            0% { background-position: 200% center; }
                            100% { background-position: -200% center; }
                        }
                        .premium-shimmer {
                            font-size: 4rem;
                            font-family: 'Poppins', sans-serif;
                            font-weight: 900;
                            text-transform: none; /* Removed uppercase */
                            letter-spacing: -2px;
                            line-height: 0.9;
                            white-space: nowrap;
                            
                            /* Star-like Glint Effect */
                            color: #888888;
                            background: linear-gradient(
                                135deg, 
                                #888888 40%, 
                                #ffffff 50%, 
                                #888888 60%
                            );
                            background-size: 200% auto;
                            background-clip: text;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            
                            /* Slower, premium speed */
                            animation: shine-sweep 6s ease-in-out infinite;
                        }
                    `}</style>

                    {/* logo text */}
                    <span className="mxd-logo__text premium-shimmer">
                        Webisse Teknoloji
                    </span>
                </a>
            </div>
            {/* header controls */}
            <div className="mxd-header__controls loading__fade">
                <button
                    className="btn btn-default btn-outline"
                    onClick={() => changeLanguage(locale === "tr" ? "en" : "tr")}
                    style={{
                        height: "4rem",
                        width: "4rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                        marginRight: "10px",
                        borderRadius: "50%",
                        border: "1px solid var(--stroke)",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        color: "var(--base)",
                        fontSize: "1.4rem",
                        fontWeight: 500,
                    }}
                    type="button"
                    aria-label="Change Language"
                >
                    {locale === "tr" ? "EN" : "TR"}
                </button>

                <button
                    id="color-switcher"
                    className="mxd-color-switcher"
                    type="button"
                    role="switch"
                    aria-label="light/dark mode"
                    aria-checked="true"
                ></button>
                <a
                    className="btn btn-anim btn-default btn-mobile-icon slide-right-up"
                    href="mailto:hello@webisse.com.tr"
                    style={{
                        backgroundColor: "#9F8BE7",
                        borderColor: "#9F8BE7",
                        color: "#fff",
                        height: "46px", // Slightly smaller
                        padding: "0 25px",
                        display: "inline-flex",
                        alignItems: "center",
                        borderRadius: "30px",
                        textDecoration: "none"
                    }}
                >
                    <span className="btn-caption" style={{ fontWeight: 600 }}>{t.header.contactBtn}</span>
                    <i className="ph-bold ph-arrow-up-right" style={{ marginLeft: "8px" }}></i>
                </a>
            </div>
        </header >
    );
}
