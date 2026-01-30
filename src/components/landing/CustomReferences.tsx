"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function CustomReferences() {
    return (
        <section id="custom-references" className="mxd-section" style={{
            padding: "100px 0",
            backgroundColor: "#2A2A2A", // Even lighter dark grey
            position: "relative"
        }}>
            {/* Glossy background effect */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "radial-gradient(circle at 50% 50%, #363636 0%, #2A2A2A 100%)",
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: "relative", zIndex: 2 }}>

                {/* Section Title */}
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <style jsx>{`
                            @keyframes metallicShimmer {
                                0% { background-position: -200% center; }
                                60% { background-position: 200% center; }
                                100% { background-position: 200% center; }
                            }
                            
                            .metallic-text {
                                font-size: clamp(3.5rem, 6vw, 6rem);
                                font-weight: 900;
                                text-transform: uppercase;
                                letter-spacing: -0.02em;
                                line-height: 1;
                                margin: 0;
                                
                                /* Light Grey Matte Base with Lighter Shimmer */
                                color: #CCCCCC; 
                                background: linear-gradient(
                                    120deg, 
                                    #999999 40%, 
                                    #FFFFFF 50%, 
                                    #999999 60%
                                );
                                background-size: 200% auto;
                                -webkit-background-clip: text;
                                background-clip: text;
                                -webkit-text-fill-color: transparent;
                                
                                animation: metallicShimmer 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                            }
                        `}</style>
                        <h2 className="metallic-text">
                            REFERANSLARIMIZ
                        </h2>
                    </div>
                </div>

                {/* Content Area */}
                <div className="row g-5 align-items-center">
                    {/* Left Column: Video */}
                    <div className="col-12 col-lg-6">
                        <div style={{
                            borderRadius: "24px",
                            overflow: "hidden",
                            boxShadow: "0 25px 50px rgba(0,0,0,0.5)", // Darker shadow for dark bg
                            border: "1px solid rgba(255,255,255,0.05)",
                            position: "relative",
                            width: "90%", // Slightly reduced width
                            marginLeft: "0", // Align strictly to left
                            marginRight: "auto",
                            paddingTop: "50.625%", // Maintain 16:9 Aspect Ratio (90% * 0.5625)
                            background: "#000"
                        }}>
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    opacity: 0.9 // Slight dim to fit dark theme
                                }}
                            >
                                <source src="/video/hero/güzel_ama_başını_değiştirmek_i.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Right Column: Empty Placeholder */}
                    <div className="col-12 col-lg-6">
                        <div style={{ minHeight: "300px" }}>
                            {/* Intentionally left blank for future content */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
