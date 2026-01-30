"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useChat } from "@/context/ChatContext";

export default function Hero() {
    const { t } = useLanguage();
    const { openChat } = useChat();

    const handleQuoteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        openChat();
    };

    return (
        <div className="mxd-section">
            <div className="mxd-hero-06">
                <div className="mxd-hero-06__wrap loading-wrap" style={{ paddingTop: "20px" }}>
                    <div className="mxd-hero-06__top">
                        <div className="mxd-hero-06__content">
                            <div className="mxd-hero-06__video">
                                <video
                                    className="video"
                                    preload="auto"
                                    autoPlay
                                    loop
                                    muted
                                    poster="/video/1920x1080_video-03.webp"
                                >
                                    <source type="video/mp4" src="/files/animation.mp4" />
                                    <source
                                        type="video/webm"
                                        src="/video/1920x1080_video-03.webm"
                                    />
                                </video>
                                <div className="hero-06-video__cover"></div>
                            </div>
                            <div className="mxd-hero-06__data">
                                <div className="mxd-hero-06__list">
                                    <div className="mxd-paragraph__lists">
                                        <div className="container-fluid p-0">
                                            <div className="row g-0">
                                                <div className="col-6 col-lg-4 col-xl-2 loading__item">
                                                    {/* Madde listesi kaldırıldı */}
                                                </div>
                                                <div className="col-6 col-lg-4 col-xl-2 loading__item">
                                                    {/* Madde listesi kaldırıldı */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mxd-hero-06__headline">
                                    <div className="hero-06-headline__descr">
                                        <p className="loading__item" style={{
                                            fontSize: "2.2rem",
                                            lineHeight: "1",
                                            marginBottom: "35px",
                                            marginTop: "-45px",
                                            fontWeight: 600,
                                            color: "#FFFFFF",
                                            whiteSpace: "nowrap",
                                            letterSpacing: "-0.01em"
                                        }}>
                                            {t.hero.headlineDescription}
                                        </p>
                                        <div className="hero-06-headline__btn loading__item">
                                            <a
                                                href="#0"
                                                onClick={handleQuoteClick}
                                                className="btn-rotating btn-rotating-blur-outline ver-04 permanent-desktop"
                                            >
                                                {/* SVG rotating text */}
                                                <svg
                                                    version="1.1"
                                                    id="scrollDown"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 160 160"
                                                    // style={{ enableBackground: "new 0 0 160 160" }}
                                                    xmlSpace="preserve"
                                                    className="btn-rotating__text animate-rotation"
                                                    data-value="360"
                                                >
                                                    <defs>
                                                        <path
                                                            id="textPath"
                                                            d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                                                        />
                                                    </defs>
                                                    <g>
                                                        <use xlinkHref="#textPath" fill="none"></use>
                                                        <text>
                                                            {/* button text here!!! */}
                                                            <textPath xlinkHref="#textPath">
                                                                {t.hero.getQuote}
                                                            </textPath>
                                                        </text>
                                                    </g>
                                                </svg>
                                                {/* image */}
                                                <img
                                                    className="btn-rotating__image"
                                                    src="/img/icons/300x300_obj-btn-03.webp"
                                                    alt="Object"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="hero-06-headline__content">
                                        <h1 className="hero-06-headline__title">
                                            {t.hero.headlineTitle}
                                        </h1>
                                        {/* Restoring marquee structure hidden to prevent JS error */}
                                        <div className="mxd-hero-06__marquee loading__item" style={{ display: 'none' }}>
                                            <div className="marquee marquee-right--gsap">
                                                <div className="marquee__toright">
                                                    <div className="marquee__item"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mxd-hero-06__bottom loading__fade">
                            <div className="mxd-hero-06__mark">
                                <div className="mxd-hero__mark">
                                    <span className="mark-icon"></span>
                                    <span className="mark-text">{t.hero.available}</span>
                                </div>
                            </div>
                            <div className="mxd-hero-06__more">
                                <a
                                    className="btn btn-line-medium btn-anim btn-anim-medium slide-down"
                                    href="#projects"
                                >
                                    <span className="btn-caption">{t.hero.scroll}</span>
                                    <i className="ph-bold ph-arrow-elbow-right-down"></i>
                                </a>
                            </div>
                        </div>
                        <div className="mxd-hero-06__btn-mobile">
                            <a
                                href="#0"
                                onClick={handleQuoteClick}
                                className="btn-rotating btn-rotating-blur-outline ver-04 permanent-desktop"
                            >
                                {/* SVG rotating text */}
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 160 160"
                                    xmlSpace="preserve"
                                    className="btn-rotating__text animate-rotation"
                                    data-value="360"
                                >
                                    <defs>
                                        <path
                                            id="textPath"
                                            d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                                        />
                                    </defs>
                                    <g>
                                        <use xlinkHref="#textPath" fill="none"></use>
                                        <text>
                                            {/* button text here!!! */}
                                            <textPath xlinkHref="#textPath">
                                                {t.hero.getQuote}
                                            </textPath>
                                        </text>
                                    </g>
                                </svg>
                                {/* image */}
                                <img
                                    className="btn-rotating__image"
                                    src="/img/icons/300x300_obj-btn-03.webp"
                                    alt="Object"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
