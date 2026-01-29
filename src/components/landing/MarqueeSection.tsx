"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MarqueeSection() {
    const { t } = useLanguage();

    return (
        <>
            {/* Section - Parallax Divider Start */}
            <div className="mxd-section padding-grid-pre-mtext">
                <div className="mxd-container">
                    <div className="mxd-divider">
                        <div className="mxd-divider__image divider-image-4 parallax-img">
                            <img src="/img/illustrations/global-tech.jpg" alt="Global Technology" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Section - Parallax Divider End */}
        </>
    );
}
