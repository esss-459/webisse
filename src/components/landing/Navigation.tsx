"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navigation() {
    const { t } = useLanguage();

    return (
        <nav className="mxd-nav__wrap" data-lenis-prevent="">
            {/* Hamburger Start */}
            <div className="mxd-nav__contain loading__fade" style={{
                position: "fixed",
                top: "40px",
                right: "40px",
                zIndex: 1000,
                pointerEvents: "auto"
            }}>
                <a href="#0" className="mxd-nav__hamburger" style={{ display: "block" }}>
                    {/* flip element */}
                    <div className="hamburger__base"></div>
                    <div className="hamburger__line"></div>
                    <div className="hamburger__line"></div>
                </a>
            </div>
            {/* Hamburger End */}

            {/* Main Navigation Start */}
            <div className="mxd-menu__wrapper">
                {/* background active layer */}
                <div className="mxd-menu__base"></div>
                {/* menu container */}
                <div className="mxd-menu__contain">
                    <div className="mxd-menu__inner">
                        {/* left side */}
                        <div className="mxd-menu__left">
                            <p
                                className="mxd-menu__caption menu-fade-in"
                                dangerouslySetInnerHTML={{ __html: t.navigation.slogan }}
                            ></p>
                            <div className="main-menu">
                                <nav className="main-menu__content">
                                    <ul id="main-menu" className="main-menu__accordion">
                                        <li className="main-menu__item">
                                            <div className="main-menu__toggle">
                                                <span className="main-menu__link btn btn-anim">
                                                    <span className="btn-caption">{t.navigation.home}</span>
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    version="1.1"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                                                </svg>
                                            </div>
                                            <ul className="submenu">
                                                <li className="submenu__item active">
                                                    <a href="#0">{t.navigation.home}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#about">{t.navigation.about}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#services">{t.navigation.services}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#references">{t.navigation.references}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#insights">{t.navigation.insights}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#contact">{t.navigation.contact}</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="main-menu__item">
                                            <div className="main-menu__toggle">
                                                <span className="main-menu__link btn btn-anim">
                                                    <span className="btn-caption">
                                                        {t.navigation.references}
                                                    </span>
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    version="1.1"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                                                </svg>
                                            </div>
                                            <ul className="submenu">
                                                <li className="submenu__item">
                                                    <a href="#references">{t.navigation.references}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#references">{t.navigation.caseStudies}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#references">{t.navigation.projectDetails}</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="main-menu__item">
                                            <div className="main-menu__toggle">
                                                <span className="main-menu__link btn btn-anim">
                                                    <span className="btn-caption">Kurumsal</span>
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    version="1.1"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                                                </svg>
                                            </div>
                                            <ul className="submenu">
                                                <li className="submenu__item">
                                                    <a href="#about">{t.navigation.about}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#services">{t.navigation.services}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#references">{t.navigation.references}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#insights">{t.navigation.insights}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#contact">{t.navigation.contact}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#0">{t.navigation.corporateHome}</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="main-menu__item">
                                            <div className="main-menu__toggle">
                                                <span className="main-menu__link btn btn-anim">
                                                    <span className="btn-caption">
                                                        {t.navigation.insights}
                                                    </span>
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    version="1.1"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                                                </svg>
                                            </div>
                                            <ul className="submenu">
                                                <li className="submenu__item">
                                                    <a href="#insights">{t.navigation.insights}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#insights">{t.navigation.blog}</a>
                                                </li>
                                                <li className="submenu__item">
                                                    <a href="#insights">{t.navigation.article}</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="main-menu__item">
                                            <a
                                                className="main-menu__link btn btn-anim"
                                                href="mailto:hello@webisse.com.tr"
                                            >
                                                <span className="btn-caption">{t.navigation.contact}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="mxd-menu__right">
                            <div className="menu-promo">
                                <div className="menu-promo__content">
                                    <p
                                        className="menu-promo__caption menu-fade-in"
                                        dangerouslySetInnerHTML={{
                                            __html: t.navigation.promoCaption,
                                        }}
                                    ></p>
                                    <div className="menu-promo__video">
                                        <video
                                            className="menu-video"
                                            id="inner-video"
                                            preload="auto"
                                            autoPlay
                                            loop
                                            muted
                                            poster="img/video/540x310_video-01.webp"
                                        >
                                            <source type="video/mp4" src="files/animation.mp4" />
                                            <source
                                                type="video/webm"
                                                src="img/video/540x310_video-01.webm"
                                            />
                                            <source
                                                type="video/ogv"
                                                src="img/video/540x310_video-01.ogv"
                                            />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* data bottom line */}
                        <div className="mxd-menu__data menu-fade-in">
                            <p className="t-xsmall">
                                Webisse
                                <i className="ph-fill ph-heart t-additional"></i>
                                {t.navigation.with}
                                <a
                                    className="no-effect"
                                    href="https://webisse.com.tr"
                                    target="_blank"
                                >
                                    {t.navigation.promoLink}
                                </a>
                            </p>
                            <p className="t-xsmall">
                                <i className="ph ph-copyright"></i>
                                2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Navigation End */}
        </nav>
    );
}
