"use client";

import React, { useState } from "react";

export default function OurServices() {
    const [leftHovered, setLeftHovered] = useState(false);
    const [rightHovered, setRightHovered] = useState(false);

    const leftServices = [
        "CRM & ERP Sistemleri",
        "Otomasyon Sistemleri",
        "İK Çözümleri",
        "Marka Kimliği",
        "İçerik & Kreatif",
        "UI/UX"
    ];

    const rightServices = [
        "Mobil Uygulamalar",
        "Yapay Zeka Çözümleri",
        "Web Tasarım",
        "Web Geliştirme",
        "E-ticaret"
    ];

    return (
        <div id="services" className="mxd-section" style={{ padding: "80px 0" }}>
            <div className="container">
                {/* Section Title with Rotating Logo */}
                <div className="row mb-5">
                    <div className="col-12">
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0",
                            flexWrap: "wrap"
                        }}>
                            {/* "Sunduğumuz" - Grey */}
                            <h2 style={{
                                fontSize: "5rem",
                                fontWeight: 700,
                                color: "#666666",
                                margin: 0,
                                lineHeight: 1,
                                letterSpacing: "-0.02em"
                            }}>
                                Sunduğumuz
                            </h2>

                            {/* Rotating Logo Badge */}
                            <div style={{
                                position: "relative",
                                width: "100px",
                                height: "100px",
                                margin: "0 20px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                {/* Rotating outer circle with text */}
                                <div style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    animation: "rotateLogo 20s linear infinite"
                                }}>
                                    <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
                                        <defs>
                                            <path
                                                id="circlePath"
                                                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                            />
                                        </defs>
                                        <circle cx="50" cy="50" r="48" fill="#2D2D2D" />
                                        <text fill="#FFFFFF" fontSize="10" fontWeight="700" letterSpacing="2">
                                            <textPath href="#circlePath" startOffset="0%">
                                                WEB · SOLUTIONS · WEBISSE ·
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>

                                {/* Static center W logo */}
                                <div style={{
                                    position: "relative",
                                    zIndex: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "50px",
                                    height: "50px"
                                }}>
                                    <img
                                        src="/img/w-logo.png"
                                        alt="W Logo"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                            filter: "brightness(0) invert(1)"
                                        }}
                                    />
                                </div>
                            </div>

                            {/* "Hizmetler" - Lilac */}
                            <h2 style={{
                                fontSize: "5rem",
                                fontWeight: 700,
                                color: "#9F8BE7",
                                margin: 0,
                                lineHeight: 1,
                                letterSpacing: "-0.02em"
                            }}>
                                Hizmetler
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Services Boxes */}
                <div className="row g-4 justify-content-center">
                    {/* Left Box - Scroll Up */}
                    <div className="col-12 col-md-10 col-lg-5">
                        <div
                            className="services-box"
                            onMouseEnter={() => setLeftHovered(true)}
                            onMouseLeave={() => setLeftHovered(false)}
                            style={{
                                backgroundColor: "#FAFAFA",
                                borderRadius: "20px",
                                padding: "40px 30px",
                                height: "350px",
                                overflow: "hidden",
                                position: "relative",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
                            }}
                        >
                            <div
                                className="scroll-container-up"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "35px",
                                    animation: leftHovered ? "scrollUp 40s linear infinite" : "scrollUp 20s linear infinite",
                                    willChange: "transform"
                                }}
                            >
                                {/* Duplicate content for seamless loop */}
                                {[...leftServices, ...leftServices, ...leftServices].map((service, index) => (
                                    <div
                                        key={index}
                                        className="service-badge"
                                        style={{
                                            backgroundColor: "#FFFFFF",
                                            border: "1px solid #E6E6EA",
                                            borderRadius: "50px",
                                            padding: "25px 45px",
                                            fontSize: "1.6rem",
                                            fontWeight: 500,
                                            color: "#333333",
                                            textAlign: "center",
                                            cursor: "pointer",
                                            whiteSpace: "nowrap",
                                            pointerEvents: "auto",
                                            position: "relative",
                                            zIndex: 1,
                                            transition: "box-shadow 0.3s ease, transform 0.3s ease",
                                            willChange: "box-shadow, transform"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = "0 10px 30px rgba(159, 139, 231, 0.4)";
                                            e.currentTarget.style.transform = "scale(1.05)";
                                            e.currentTarget.style.zIndex = "10";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = "none";
                                            e.currentTarget.style.transform = "scale(1)";
                                            e.currentTarget.style.zIndex = "1";
                                        }}
                                    >
                                        {service}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Box - Scroll Down */}
                    <div className="col-12 col-md-10 col-lg-5">
                        <div
                            className="services-box"
                            onMouseEnter={() => setRightHovered(true)}
                            onMouseLeave={() => setRightHovered(false)}
                            style={{
                                backgroundColor: "#FAFAFA",
                                borderRadius: "20px",
                                padding: "40px 30px",
                                height: "350px",
                                overflow: "hidden",
                                position: "relative",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
                            }}
                        >
                            <div
                                className="scroll-container-down"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "35px",
                                    animation: rightHovered ? "scrollDown 40s linear infinite" : "scrollDown 20s linear infinite",
                                    willChange: "transform"
                                }}
                            >
                                {/* Duplicate content for seamless loop */}
                                {[...rightServices, ...rightServices, ...rightServices, ...rightServices].map((service, index) => (
                                    <div
                                        key={index}
                                        className="service-badge"
                                        style={{
                                            backgroundColor: "#FFFFFF",
                                            border: "1px solid #E6E6EA",
                                            borderRadius: "50px",
                                            padding: "25px 45px",
                                            fontSize: "1.6rem",
                                            fontWeight: 500,
                                            color: "#333333",
                                            textAlign: "center",
                                            cursor: "pointer",
                                            whiteSpace: "nowrap",
                                            pointerEvents: "auto",
                                            position: "relative",
                                            zIndex: 1,
                                            transition: "box-shadow 0.3s ease, transform 0.3s ease",
                                            willChange: "box-shadow, transform"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = "0 10px 30px rgba(159, 139, 231, 0.4)";
                                            e.currentTarget.style.transform = "scale(1.05)";
                                            e.currentTarget.style.zIndex = "10";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = "none";
                                            e.currentTarget.style.transform = "scale(1)";
                                            e.currentTarget.style.zIndex = "1";
                                        }}
                                    >
                                        {service}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* "Daha Fazlası..." Text */}
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-10 mx-auto">
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "20px"
                        }}>
                            <a
                                href="#"
                                style={{
                                    fontSize: "1.8rem",
                                    fontWeight: 500,
                                    color: "#666666",
                                    textDecoration: "none",
                                    transition: "color 0.3s ease",
                                    cursor: "pointer"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#9F8BE7";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "#666666";
                                }}
                            >
                                ve daha fazlası...
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes scrollUp {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-33.33%);
                    }
                }

                @keyframes scrollDown {
                    0% {
                        transform: translateY(-25%);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }

                @keyframes rotateLogo {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                .service-badge:hover {
                    box-shadow: 0 10px 30px rgba(159, 139, 231, 0.4) !important;
                    transform: scale(1.05) !important;
                    z-index: 10 !important;
                }
            `}</style>
        </div>
    );
}
