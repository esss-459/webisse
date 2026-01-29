"use client";

import React from "react";
import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section className="mxd-section" style={{ padding: "100px 0", backgroundColor: "var(--base)" }}>
            {/* Animated Marquee Subtitle - Full Width */}
            <div className="mxd-container fullwidth-container" style={{ marginBottom: "30px" }}>
                <div className="mxd-block">
                    <div className="marquee marquee-right--gsap muted-extra">
                        <div className="marquee__toright">
                            {/* single item */}
                            <div className="marquee__item one-line item-regular text">
                                <p className="marquee__text">Hakkımızda</p>
                                <div className="marquee__image">
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 80 80"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* single item */}
                            <div className="marquee__item one-line item-regular text">
                                <p className="marquee__text">Hakkımızda</p>
                                <div className="marquee__image">
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 80 80"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* single item */}
                            <div className="marquee__item one-line item-regular text">
                                <p className="marquee__text">Hakkımızda</p>
                                <div className="marquee__image">
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 80 80"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                {/* Section Header */}
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <h2
                                className="mxd-title-large"
                                style={{
                                    fontSize: "4.5rem",
                                    fontWeight: 700,
                                    marginBottom: "20px",
                                    color: "#333333"
                                }}
                            >
                                Biz Kimiz?
                            </h2>
                            <div
                                ref={(el) => {
                                    if (!el) return;

                                    const handleScroll = () => {
                                        // Get the parent container (the title wrapper)
                                        const parent = el.parentElement;
                                        if (!parent) return;

                                        const rect = parent.getBoundingClientRect();
                                        const windowHeight = window.innerHeight;

                                        // Calculate when element enters viewport from bottom
                                        const elementTop = rect.top;

                                        // Animation starts when element enters viewport
                                        // Completes when element is fully visible (top of element reaches top third of viewport)
                                        const startPoint = windowHeight;
                                        const endPoint = windowHeight * 0.4; // Complete when in upper 40% of viewport

                                        if (elementTop <= startPoint && elementTop >= 0) {
                                            // Calculate progress: 0 when entering, 1 when fully visible
                                            const scrollRange = startPoint - endPoint;
                                            const currentProgress = startPoint - elementTop;
                                            const progress = Math.min(Math.max(currentProgress / scrollRange, 0), 1);

                                            el.style.width = `${progress * 100}%`;
                                        } else if (elementTop < 0) {
                                            // Keep at 100% when scrolled past
                                            el.style.width = '100%';
                                        } else {
                                            // Reset when below viewport
                                            el.style.width = '0%';
                                        }
                                    };

                                    window.addEventListener('scroll', handleScroll);
                                    handleScroll(); // Initial call

                                    return () => window.removeEventListener('scroll', handleScroll);
                                }}
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    height: '4px',
                                    width: '0%',
                                    backgroundColor: '#9F8BE7',
                                    transition: 'width 0.05s linear'
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }} />

                        <p
                            className="mxd-text-large"
                            style={{
                                fontSize: "1.8rem",
                                lineHeight: "2.0",
                                color: "#333333",
                                margin: "0 auto 60px auto",
                                maxWidth: "90%",
                                textAlign: "justify",
                                fontWeight: 400,
                                letterSpacing: "0.6px"
                            }}
                        >
                            Webisse Solutions, yenilikçi web çözümleri sunan bir yazılım şirketidir. Misyonumuz müşterilerimizin iş hedeflerini anlamak ve en uygun çözümleri sunmaktır. Uzman web tasarımcılarımız markaların dijital varlıklarını temsil eden modern ve kullanıcı dostu arayüzler tasarlar.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="row" style={{ rowGap: "30px", marginTop: "20px" }}>
                    {/* Feature 1 */}
                    <div className="col-12 col-md-4">
                        <div
                            className="feature-card"
                            style={{
                                padding: "40px 30px",
                                backgroundColor: "#FAFAFA",
                                borderRadius: "18px",
                                height: "100%",
                                border: "1px solid #E6E6EA",
                                transition: "all 0.25s ease",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.04)";
                                e.currentTarget.style.boxShadow = "0 12px 30px rgba(159, 139, 231, 0.22)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div style={{ marginBottom: "20px", color: "#9F8BE7", fontSize: "2.5rem" }}>
                                <i className="ph-bold ph-paint-brush-broad"></i>
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "15px", color: "#333333" }}>
                                Kullanıcı Odaklı Tasarım
                            </h3>
                            <p style={{ color: "#666666", lineHeight: "1.6" }}>
                                Kullanıcı odaklı tasarım anlayışımızla, her proje özelinde kullanıcı deneyimini en üst düzeye çıkarıyoruz.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="col-12 col-md-4">
                        <div
                            className="feature-card"
                            style={{
                                padding: "40px 30px",
                                backgroundColor: "#FAFAFA",
                                borderRadius: "18px",
                                height: "100%",
                                border: "1px solid #E6E6EA",
                                transition: "all 0.25s ease",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.04)";
                                e.currentTarget.style.boxShadow = "0 12px 30px rgba(159, 139, 231, 0.22)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div style={{ marginBottom: "20px", color: "#9F8BE7", fontSize: "2.5rem" }}>
                                <i className="ph-bold ph-chart-line-up"></i>
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "15px", color: "#333333" }}>
                                SEO Stratejileri
                            </h3>
                            <p style={{ color: "#666666", lineHeight: "1.6" }}>
                                SEO uzmanlığımızla, web sitenizin veya uygulamanızın organik olarak daha fazla ziyaretçi çekmesini sağlıyoruz.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="col-12 col-md-4">
                        <div
                            className="feature-card"
                            style={{
                                padding: "40px 30px",
                                backgroundColor: "#FAFAFA",
                                borderRadius: "18px",
                                height: "100%",
                                border: "1px solid #E6E6EA",
                                transition: "all 0.25s ease",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.04)";
                                e.currentTarget.style.boxShadow = "0 12px 30px rgba(159, 139, 231, 0.22)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div style={{ marginBottom: "20px", color: "#9F8BE7", fontSize: "2.5rem" }}>
                                <i className="ph-bold ph-device-mobile"></i>
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "15px", color: "#333333" }}>
                                Mobil Uyumlu Tasarım
                            </h3>
                            <p style={{ color: "#666666", lineHeight: "1.6" }}>
                                Mobil cihazlarda mükemmel performans gösteren, responsive tasarımlar sunuyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
