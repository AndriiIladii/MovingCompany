'use client'
import { useTranslations } from "next-intl";

const Hero = () => {

    const t = useTranslations('hero')

    return (
        <section className="bg-[#1f3a5f]">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__title">
                        <h1 data-i18n="title" className="text-4xl font-bold text-white text-center">
                            {t('title')}
                        </h1>
                    </div>

                    <div className="hero__contacts">
                        <div className="hero__contacts--phone">
                            <a href="tel:+48736335283">+48&nbsp;736&nbsp;335&nbsp;283</a>
                        </div>
                        <div className="hero__contacts--wrapper">
                            <div className="hero__contacts--links">
                                <a className="hero__contacts--link" href="tel:+48736335283">
                                    <span data-i18n="callUs" className="bg-orange-500 rounded-lg px-6 py-3">{t('callUs')}</span>
                                </a>
                            </div>
                            <div className="hero__contacts--order">
                                <a href="#leadForm" className="btn__order">
                                    <span data-i18n="onlineOrder" className="bg-orange-500 rounded-lg px-6 py-3">{t('onlineOrder')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;