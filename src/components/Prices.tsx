'use client'
import { useTranslations } from "next-intl";

const Prices = () => {

    const t = useTranslations('prices')

    return (
        <div className="container">
            <div className="pricing__header">
                <h2 data-aos="zoom-in" data-i18n="pricesTitle">{t('pricesTitle')}</h2>
                <p data-aos="zoom-in" data-i18n="pricesSubtitle">
                    {t('pricesSubtitle')}
                </p>
            </div>

            <div className="pricing__list">
                <span
                    data-aos="zoom-in"
                    data-i18n="minOrder"
                    className="pricing__min-order main"
                >{t('minOrder')}
                </span>
                <div data-aos="zoom-in" className="pricing__item">
                    <div className="pricing__details">
                        <p className="pricing__service-name" data-i18n="arrival">
                            {t('arrival')}
                        </p>
                        <p className="pricing__service-subtext" data-i18n="driverOnly">
                            {t('driverOnly')}
                        </p>
                    </div>
                    <div className="pricing__price">
                        <p className="pricing__price--hour">
                            130 zł/<span data-i18n="hour">{t('hour')}</span>
                        </p>
                        <p className="pricing__price--min">
                            260 zł/2 <span data-i18n="hours">{t('hours')}</span>
                        </p>
                    </div>
                </div>

                <div data-aos="zoom-in" className="pricing__item">
                    <div className="pricing__details">
                        <p className="pricing__service-name" data-i18n="moverService">
                            {t('moverService')}
                        </p>
                    </div>
                    <div className="pricing__price">
                        <p className="pricing__price--hour">
                            40 zł/<span data-i18n="hour">{t('hour')}</span>
                        </p>
                        <p className="pricing__price--min">
                            80 zł/2 <span data-i18n="hours">{t('hours')}</span>
                        </p>
                    </div>
                </div>

                <div data-aos="zoom-in" className="pricing__item">
                    <div className="pricing__details">
                        <p className="pricing__service-name" data-i18n="packing">
                            {t('packing')}
                        </p>
                    </div>
                    <div className="pricing__price">
                        <p className="pricing__price--hour">
                            50 zł/<span data-i18n="hour">{t('hour')}</span>
                        </p>
                        <p className="pricing__price--min">
                            100 zł/2 <span data-i18n="hours">{t('hours')}</span>
                        </p>
                    </div>
                </div>

                <div data-aos="zoom-in" className="pricing__item pricing__item--no-min">
                    <div className="pricing__details">
                        <p className="pricing__service-name" data-i18n="intercity">
                            {t('intercity')}
                        </p>
                        <p
                            className="pricing__service-subtext"
                            data-i18n="minOrderIntercity"
                        >
                            {t('minOrderIntercity')}
                        </p>
                    </div>
                    <div className="pricing__price pricing__price--info">
                        <p className="pricing__price--km">
                            5 zł/<span data-i18n="km">{t('km')}</span>
                            <span
                                className="tooltip-wrapper"
                                data-i18n="tooltipBus"
                                data-tooltip="Zwykły bus"
                            >
                                <img src="./assets/price/info.png" alt="description" />
                            </span>
                        </p>

                        <p className="pricing__price--km">
                            6 zł/<span data-i18n="km">{t('km')}</span>
                            <span
                                className="tooltip-wrapper"
                                data-i18n="tooltipBusBig"
                                data-tooltip="Bus 10 EP + Winda załadowcza"
                            >
                                <img src="./assets/price/info.png" alt="description" />
                            </span>
                        </p>
                    </div>
                </div>

                <div data-aos="zoom-in" className="pricing__item">
                    <div className="pricing__details">
                        <p className="pricing__service-name" data-i18n="assembly">
                            {t('assembly')}
                        </p>
                    </div>
                    <div className="pricing__price">
                        <p className="pricing__price--hour">
                            70 - 100 zł/<span data-i18n="element">{t('element')}</span>
                        </p>
                    </div>
                </div>

                <div data-aos="zoom-in" className="pricing__item">
                    <div className="pricing__details">
                        <p className="pricing__service-name" data-i18n="cleaning">
                            {t('cleaning')}
                        </p>
                    </div>
                    <div className="pricing__price">
                        <p className="pricing__price--hour">
                            <span data-i18n="cleaningPrice">{t('cleaningPrice')}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" className="pricing__order">
                <a href="#leadForm" className="btn__order btn__pricing">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.2501 21C17.1514 21.0005 17.0536 20.9816 16.9622 20.9443C16.8708 20.907 16.7877 20.852 16.7176 20.7825L12.1201 16.1775L9.62261 19.9275C9.54308 20.0493 9.42983 20.1453 9.29666 20.2039C9.1635 20.2625 9.01616 20.2811 8.87261 20.2575C8.73201 20.2365 8.60025 20.176 8.49269 20.0831C8.38514 19.9901 8.30621 19.8685 8.26511 19.7325L3.76511 4.73245C3.71163 4.59811 3.69811 4.45117 3.7262 4.30933C3.75429 4.16749 3.82278 4.03679 3.92343 3.93297C4.02407 3.82915 4.15259 3.75664 4.29349 3.72417C4.43439 3.6917 4.58168 3.70065 4.71761 3.74995L19.7176 8.24995C19.8537 8.29105 19.9753 8.36997 20.0683 8.47753C20.1612 8.58509 20.2217 8.71685 20.2426 8.85745C20.2663 9.001 20.2477 9.14833 20.1891 9.2815C20.1305 9.41467 20.0344 9.52792 19.9126 9.60745L16.1626 12.105L20.7676 16.7025C20.8379 16.7722 20.8937 16.8551 20.9318 16.9465C20.9699 17.0379 20.9895 17.1359 20.9895 17.235C20.9895 17.334 20.9699 17.432 20.9318 17.5234C20.8937 17.6148 20.8379 17.6977 20.7676 17.7675L17.7676 20.7675C17.6322 20.9097 17.4464 20.9932 17.2501 21ZM17.2501 19.1925L19.1926 17.25L13.8226 11.8875L17.7601 9.26245L5.61761 5.61745L9.26261 17.76L11.8876 13.8225L17.2501 19.1925Z"
                            fill="white"
                        />
                    </svg>
                    <span data-i18n="onlineOrder">{t('onlineOrder')}</span>
                </a>
            </div>
        </div>
    );
};

export default Prices;