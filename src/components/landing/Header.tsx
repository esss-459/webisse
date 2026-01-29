"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const { t, locale, changeLanguage } = useLanguage();

    return (
        <header id="header" className="mxd-header">
            {/* header logo */}
            <div className="mxd-header__logo loading__fade">
                <a href="index-main.html" className="mxd-logo">
                    {/* logo icon */}
                    <svg
                        className="mxd-logo__image"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56 56"
                        xmlSpace="preserve"
                    >
                        <path
                            className="mxd-logo__bg"
                            d="M56,28c0,11.1-2.9,28-28,28S0,39.1,0,28S2.9,0,28,0S56,16.9,56,28z"
                            style={{ fill: "var(--base-opp)" }}
                        />
                        <g>
                            <defs>
                                <path
                                    id="mxd-logo__clippath"
                                    d="M28,0C2.9,0,0,16.9,0,28s2.9,28,28,28s28-16.9,28-28S53.1,0,28,0z"
                                />
                            </defs>
                            <clipPath id="mxd-logo__id">
                                <use
                                    xlinkHref="#mxd-logo__clippath"
                                    style={{ overflow: "visible" }}
                                />
                            </clipPath>
                            <path
                                className="mxd-logo__cat"
                                d="M33.6,34.5h0.9
                c0.5,0,0.9,0.4,0.9,0.9v3.7c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-3.7C32.7,34.9,33.1,34.5,33.6,34.5z M20.5,37.3
                v1.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V37.3L20.5,37.3z
                M39.2,21.5v0.9c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h0.9C38.8,20.5,39.2,21,39.2,21.5z
                M34.5,26.1h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v0.9C33.6,25.7,34,26.1,34.5,26.1z
                M28,26.1h-4.7c-0.5,0-0.9,0.4-0.9,0.9V28c0,0.5,0.4,0.9,0.9,0.9h9.3c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9H28L28,26.1
                z M19.6,24.3v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C20,23.3,19.6,23.8,19.6,24.3z
                M16.8,21.5v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C17.2,20.5,16.8,21,16.8,21.5z
                M14,26.1v4.7c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V26.1
                L14,26.1z M11.2,34.5v1.9c0,0.5-0.4,0.9-0.9,0.9H7.5c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9,0.4,0.9,0.9
                V42c0,0.5-0.4,0.9-0.9,0.9H7.5c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9,0.4,0.9,0.9V56
                c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5,0.4-0.9,0.9-0.9h3.7c0.5,0,0.9-0.4,0.9-0.9v-0.9
                c0-0.5-0.4-0.9-0.9-0.9h-3.7c-0.5,0-0.9-0.4-0.9-0.9v-6.5c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9
                h-0.9c-0.5,0-0.9,0.4-0.9,0.9L11.2,34.5L11.2,34.5z M42,26.1v-1.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v6.5
                c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9V26.1L42,26.1z M49.5,39.2v-0.9c0-0.5-0.4-0.9-0.9-0.9h-2.8
                c-0.5,0-0.9-0.4-0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v3.7c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9,0.4,0.9,0.9
                v6.5c0,0.5-0.4,0.9-0.9,0.9h-3.7c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h3.7c0.5,0,0.9,0.4,0.9,0.9V56
                c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-9.3c0-0.5,0.4-0.9,0.9-0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9
                c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h0.9C49,40.1,49.5,39.7,49.5,39.2L49.5,39.2z"
                                style={{ clipPath: "url(#mxd-logo__id)", fill: "var(--base)" }}
                            />
                        </g>
                    </svg>
                    {/* logo text */}
                    <span
                        className="mxd-logo__text"
                        dangerouslySetInnerHTML={{ __html: t.header.logoText }}
                    ></span>
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
                    className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right-up"
                    href="mailto:hello@webisse.com.tr"
                >
                    <span className="btn-caption">{t.header.contactBtn}</span>
                    <i className="ph-bold ph-arrow-up-right"></i>
                </a>
            </div>
        </header>
    );
}
