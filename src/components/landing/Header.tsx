"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const { t, locale, changeLanguage } = useLanguage();

    return (
        <header id="header" className="mxd-header">
            {/* header logo */}
            <div className="mxd-header__logo loading__fade">
                <a href="index-main.html" className="mxd-logo" style={{ alignItems: "center", marginTop: "0px", textDecoration: "none", maxWidth: "90vw" }}>
                    {/* logo icon */}
                    <img
                        src="/img/w-logo.png"
                        alt="Webisse Logo"
                        className="mxd-logo__image"
                        style={{
                            width: "80px", // Reduced from 90px
                            height: "auto",
                            objectFit: "contain",
                            marginRight: "15px",
                            mixBlendMode: "multiply",
                            filter: "contrast(1.2)"
                        }}
                    />

                    <style jsx>{`
                        @keyframes shine-sequential {
                            0% { background-position: 200% center; }
                            15% { background-position: -200% center; }
                            100% { background-position: -200% center; }
                        }
                        @keyframes shine-sequential-2 {
                            0% { background-position: 200% center; }
                            15% { background-position: 200% center; }
                            30% { background-position: -200% center; }
                            100% { background-position: -200% center; }
                        }
                        .premium-shimmer {
                            font-size: 3.6rem;
                            font-family: 'Poppins', sans-serif;
                            font-weight: 900;
                            text-transform: none;
                            letter-spacing: -2px;
                            line-height: 0.95;
                            white-space: nowrap;
                            display: block;
                            
                            /* Star-like Glint Effect Base - Updated to Greyscale */
                            color: #444444;
                            background: linear-gradient(
                                135deg, 
                                #444444 40%, 
                                #ffffff 50%, 
                                #444444 60%
                            );
                            background-size: 200% auto;
                            background-clip: text;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }

                        .shimmer-1 {
                            animation: shine-sequential 10s linear infinite;
                        }

                        .shimmer-2 {
                            animation: shine-sequential-2 10s linear infinite;
                        }
                    `}</style>

                    {/* logo text */}
                    <div className="mxd-logo__text" style={{ display: "flex", flexDirection: "column", marginTop: "-5px" }}>
                        <span className="premium-shimmer shimmer-1">
                            Webisse
                        </span>
                        <span className="premium-shimmer shimmer-2">
                            Teknoloji
                        </span>
                    </div>
                </a>
            </div>
            {/* header controls */}
            <div className="mxd-header__controls loading__fade" style={{ display: "flex", alignItems: "center" }}>
                <button
                    className="btn btn-default btn-outline"
                    onClick={() => changeLanguage(locale === "tr" ? "en" : "tr")}
                    style={{
                        height: "4rem",
                        width: "4rem",
                        display: "none", // Hidden for now, can be re-enabled later
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                        marginRight: "10px",
                        borderRadius: "50%",
                        border: "1px solid var(--stroke)",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        color: "var(--base)",
                        fontSize: "1.2rem",
                        fontWeight: 600,
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
                    style={{ marginRight: "10px" }}
                ></button>
                <a
                    className="btn btn-anim btn-default btn-mobile-icon slide-right-up"
                    href="mailto:hello@webisse.com.tr"
                    style={{
                        backgroundColor: "#1A1A1A",
                        borderColor: "#1A1A1A",
                        color: "#fff",
                        height: "46px", // Slightly smaller
                        padding: "0 25px",
                        display: "inline-flex",
                        alignItems: "center",
                        borderRadius: "30px",
                        textDecoration: "none",
                        marginRight: "15px"
                    }}
                >
                    <span className="btn-caption" style={{ fontWeight: 600 }}>{t.header.contactBtn}</span>
                    <i className="ph-bold ph-arrow-up-right" style={{ marginLeft: "8px" }}></i>
                </a>

            </div>
        </header >
    );
}
