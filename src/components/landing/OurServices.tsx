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
        <div id="services" className="mxd-section" style={{
            padding: "120px 0",
            position: "relative",
            backgroundColor: "#FDFDFF",
            overflow: "hidden"
        }}>
            {/* Background Decorative Elements */}
            <div style={{
                position: "absolute",
                top: "10%",
                left: "-5%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, rgba(255,255,255,0) 70%)",
                filter: "blur(60px)",
                zIndex: 0,
                pointerEvents: "none"
            }}></div>
            <div style={{
                position: "absolute",
                bottom: "10%",
                right: "-5%",
                width: "500px",
                height: "500px",
                background: "radial-gradient(circle, rgba(102, 102, 102, 0.05) 0%, rgba(255,255,255,0) 70%)",
                filter: "blur(80px)",
                zIndex: 0,
                pointerEvents: "none"
            }}></div>

            {/* Grid Pattern Overlay */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `radial-gradient(#E6E6EA 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
                opacity: 0.4,
                zIndex: 0,
                pointerEvents: "none"
            }}></div>

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                {/* Section Title with Rotating Logo */}
                <div className="row mb-5 pb-4">
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
                                fontSize: "clamp(3rem, 8vw, 5rem)",
                                fontWeight: 800,
                                color: "#333333",
                                margin: 0,
                                lineHeight: 1,
                                letterSpacing: "-0.03em",
                                transition: "all 0.3s ease"
                            }}>
                                Sunduğumuz
                            </h2>

                            {/* Rotating Logo Badge */}
                            <div style={{
                                position: "relative",
                                width: "clamp(60px, 10vw, 100px)",
                                height: "clamp(60px, 10vw, 100px)",
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
                                    animation: "rotateLogo 40s linear infinite"
                                }}>
                                    <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
                                        <defs>
                                            <path
                                                id="circlePath"
                                                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                            />
                                        </defs>
                                        <circle cx="50" cy="50" r="48" fill="#1A1A1A" />
                                        <text fill="rgba(255,255,255,0.9)" fontSize="10" fontWeight="700" letterSpacing="2.5">
                                            <textPath href="#circlePath" startOffset="0%">
                                                WEBISSE · WB SOLUTIONS ·
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
                                    width: "50%",
                                    height: "50%"
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
                                fontSize: "clamp(3rem, 8vw, 5rem)",
                                fontWeight: 800,
                                color: "#9F8BE7",
                                margin: 0,
                                lineHeight: 1,
                                letterSpacing: "-0.03em"
                            }}>
                                Hizmetler
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Services Boxes */}
                <div className="row g-5 justify-content-center">
                    {/* Left Box - Scroll Up */}
                    <div className="col-12 col-md-10 col-lg-5">
                        <div
                            className="services-box glass-box"
                            onMouseEnter={() => setLeftHovered(true)}
                            onMouseLeave={() => setLeftHovered(false)}
                            style={{
                                background: "rgba(255, 255, 255, 0.4)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255, 255, 255, 0.5)",
                                borderRadius: "32px",
                                padding: "50px 30px",
                                height: "380px",
                                overflow: "hidden",
                                position: "relative",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
                                transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)"
                            }}
                        >
                            <div
                                className="scroll-container-up"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "35px",
                                    animation: "scrollUp 25s linear infinite",
                                    animationPlayState: leftHovered ? "paused" : "running",
                                    willChange: "transform"
                                }}
                            >
                                {/* Duplicate content for seamless loop */}
                                {[...leftServices, ...leftServices, ...leftServices].map((service, index) => (
                                    <div
                                        key={index}
                                        className="service-badge-modern"
                                        style={{
                                            background: "linear-gradient(135deg, #FFFFFF 0%, #FAFAFF 100%)",
                                            border: "1px solid rgba(230, 230, 234, 0.8)",
                                            borderRadius: "50px",
                                            padding: "22px 40px",
                                            fontSize: "1.5rem",
                                            fontWeight: 600,
                                            color: "#333333",
                                            textAlign: "center",
                                            cursor: "pointer",
                                            whiteSpace: "nowrap",
                                            pointerEvents: "auto",
                                            position: "relative",
                                            zIndex: 1,
                                            boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
                                            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                            willChange: "transform, box-shadow"
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
                            className="services-box glass-box"
                            onMouseEnter={() => setRightHovered(true)}
                            onMouseLeave={() => setRightHovered(false)}
                            style={{
                                background: "rgba(255, 255, 255, 0.4)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255, 255, 255, 0.5)",
                                borderRadius: "32px",
                                padding: "50px 30px",
                                height: "380px",
                                overflow: "hidden",
                                position: "relative",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
                                transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)"
                            }}
                        >
                            <div
                                className="scroll-container-down"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "35px",
                                    animation: "scrollDown 25s linear infinite",
                                    animationPlayState: rightHovered ? "paused" : "running",
                                    willChange: "transform"
                                }}
                            >
                                {/* Duplicate content for seamless loop */}
                                {[...rightServices, ...rightServices, ...rightServices, ...rightServices].map((service, index) => (
                                    <div
                                        key={index}
                                        className="service-badge-modern"
                                        style={{
                                            background: "linear-gradient(135deg, #FFFFFF 0%, #FAFAFF 100%)",
                                            border: "1px solid rgba(230,230,234,0.8)",
                                            borderRadius: "50px",
                                            padding: "22px 40px",
                                            fontSize: "1.5rem",
                                            fontWeight: 600,
                                            color: "#333333",
                                            textAlign: "center",
                                            cursor: "pointer",
                                            whiteSpace: "nowrap",
                                            pointerEvents: "auto",
                                            position: "relative",
                                            zIndex: 1,
                                            boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
                                            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                            willChange: "transform, box-shadow"
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
                <div className="row mt-4 pt-2">
                    <div className="col-12 col-md-10 col-lg-10 mx-auto">
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}>
                            <a
                                href="#"
                                className="more-link"
                                style={{
                                    fontSize: "1.6rem",
                                    fontWeight: 700,
                                    color: "#333333",
                                    textDecoration: "none",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                    position: "relative",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "10px"
                                }}
                            >
                                ve daha fazlası...
                                <span className="arrow-icon" style={{
                                    transition: "transform 0.3s ease"
                                }}>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes scrollUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-33.33%); }
                }

                @keyframes scrollDown {
                    0% { transform: translateY(-25%); }
                    100% { transform: translateY(0); }
                }

                @keyframes rotateLogo {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .service-badge-modern:hover {
                    box-shadow: 0 15px 40px rgba(159, 139, 231, 0.5) !important;
                    transform: scale(1.04) translateY(-5px) !important;
                    border-color: #9F8BE7 !important;
                    z-index: 10 !important;
                    color: #1A1A1A !important;
                }

                .glass-box:hover {
                    background: rgba(255, 255, 255, 0.6) !important;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.05) !important;
                    border-color: rgba(255, 255, 255, 0.8) !important;
                }

                .more-link:hover {
                    color: #1A1A1A !important;
                }

                .more-link:hover .arrow-icon {
                    transform: translateX(8px);
                }

                .more-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #1A1A1A;
                    transition: width 0.3s ease;
                }

                .more-link:hover::after {
                    width: 100%;
                }
            `}</style>
        </div>
    );
}
