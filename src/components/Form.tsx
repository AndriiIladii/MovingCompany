'use client'

import { useState } from 'react';
import { useTranslations } from "next-intl";

const Form = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [addressFrom, setAddressFrom] = useState('')
    const [addressTo, setAddressTo] = useState('')
    const [dateTime, setDateTime] = useState('')

    const t = useTranslations('form')

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const dateTimeFormatted = dateTime.replace("T", " ")

        let message = `<b>Новая заявка на переезд! 🚚</b>\n`;
        message += `<b>Имя:</b> ${name}\n`;
        message += `<b>Телефон:</b> ${phone}\n`;
        message += `<b>Откуда:</b> ${addressFrom}\n`;
        message += `<b>Куда:</b> ${addressTo}\n`;
        message += `<b>Дата и время:</b> ${dateTimeFormatted}`;


        const TOKEN = "8534201234:AAFafvbo6FoNnCm3wkwc5K3IVff4bbKFAMk";
        const CHAT_ID = "-5059325929";


        try {
            let response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ chat_id: CHAT_ID, parse_mode: 'html', text: message }),
            })
            if (!response.ok) throw new Error('Failed')
            alert('Заявка отправлена!')
            setName('')
            setPhone('')
            setAddressFrom('')
            setAddressTo('')
            setDateTime('')
        } catch {
            alert('Ошибка отправки')
        }
    }



    return (
        <section data-aos="fade-up" id="leadForm" className="leadForm">
            <div className="container">
                <div className="leadForm__card">
                    <div className="leadForm__card--header">
                        <div className="leadForm__card--title">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"

                                fill="#1f3a5f"
                                height="24"
                                width="24"
                                version="1.1"
                                id="Capa_1"
                                viewBox="0 0 495.317 495.317"
                                xmlSpace="preserve"
                            >
                                <path
                                    d="M495.103,333.198c-1.933-9.851-19.004-96.612-23.221-109.279c-10.139-30.455-34.498-65.125-65.159-92.742  c-31.879-28.713-64.908-45.181-90.62-45.181H65.991c-12.962,0-23.508,10.546-23.508,23.508v36.938H25.165  c-6.351,0-11.5,5.149-11.5,11.5s5.149,11.5,11.5,11.5h17.317v27.432H11.5c-6.351,0-11.5,5.149-11.5,11.5  c0,6.351,5.149,11.5,11.5,11.5h30.982v115.537c0,12.962,10.546,23.507,23.508,23.507h28.672  c4.287,28.488,28.926,50.401,58.59,50.401c29.664,0,54.303-21.913,58.589-50.401h105.484c4.286,28.488,28.926,50.401,58.59,50.401  c29.664,0,54.303-21.913,58.589-50.401h37.304c12.963,0,23.509-10.545,23.509-23.507  C495.317,334.669,495.245,333.928,495.103,333.198z M448.743,227.476l-118.502-0.001V111.052  C372.222,122.327,430.41,178.181,448.743,227.476z M153.253,386.32c-19.99,0-36.254-16.263-36.254-36.254  c0-19.99,16.264-36.253,36.254-36.253c19.99,0,36.253,16.263,36.253,36.253C189.505,370.057,173.243,386.32,153.253,386.32z   M375.916,386.32c-19.99-0.001-36.254-16.264-36.254-36.254c0-19.99,16.264-36.253,36.254-36.253s36.253,16.263,36.253,36.253  C412.169,370.057,395.906,386.32,375.916,386.32z M471.24,335.919c-9.59,0-37.791,0-37.791,0  c-6.361-25.861-29.736-45.105-57.533-45.105s-51.173,19.244-57.534,45.105H210.786c-6.361-25.861-29.736-45.105-57.533-45.105  c-27.797,0-51.173,19.244-57.534,45.105H65.991c-0.28,0-0.508-0.228-0.508-0.507V219.875h140.934c6.351,0,11.5-5.149,11.5-11.5  c0-6.351-5.149-11.5-11.5-11.5H65.482v-27.432h64.87c6.351,0,11.5-5.149,11.5-11.5s-5.149-11.5-11.5-11.5h-64.87v-36.938  c0-0.28,0.228-0.508,0.508-0.508h241.251v129.978c0,6.351,5.148,11.5,11.5,11.5l135.955,0.001  c4.904,22.361,11.63,58.202,17.356,84.734C472.168,335.744,471.834,335.919,471.24,335.919z"
                                    fill="#1f3a5f"
                                />
                            </svg>
                            <h2>{t('formTitle')}</h2>
                        </div>
                        <p className="leadForm__card--subtitle" data-i18n="">
                            {t('formSubTitle')}
                        </p>
                    </div>

                    <form className="leadForm__card--form" id="telegramForm" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <span className="input-icon">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#1f3a5f"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </span>
                            <input
                                type="text"
                                id="name"
                                className="input-field"
                                placeholder={t("formName")}
                                data-i18n="formName"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <span className="input-icon">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#1f3a5f"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                    ></path>
                                </svg>
                            </span>
                            <input
                                type="tel"
                                id="phone"
                                className="input-field"
                                placeholder={t("phoneNumber")}
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <span className="input-icon">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#1f3a5f"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                    ></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </span>
                            <input
                                type="text"
                                id="addressFrom"
                                className="input-field"
                                placeholder={t("movingFrom")}

                                required
                                value={addressFrom}
                                onChange={(e) => setAddressFrom(e.target.value)}

                            />
                            <div className="input-hint">
                                {t("movingFromSub")}
                            </div>
                        </div>

                        <div className="input-group">
                            <span className="input-icon">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#1f3a5f"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                                    ></path>
                                    <line x1="4" y1="22" x2="4" y2="15"></line>
                                </svg>
                            </span>
                            <input
                                type="text"
                                id="addressTo"
                                className="input-field"
                                placeholder={t("movingTo")}

                                required
                                value={addressTo}
                                onChange={(e) => setAddressTo(e.target.value)}

                            />
                            <div className="input-hint">
                                {t("movingToSub")}
                            </div>
                        </div>

                        <div className="input-group">
                            <span className="input-icon">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#1f3a5f"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        x="3"
                                        y="4"
                                        width="18"
                                        height="18"
                                        rx="2"
                                        ry="2"
                                    ></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                    <path d="M12 14l2 2 4-4" stroke="none"></path>
                                    <circle cx="12" cy="14" r="3"></circle>
                                    <polyline points="12 14 12 12"></polyline>
                                </svg>
                            </span>
                            <input
                                type="text"
                                id="dateTime"
                                className="input-field"
                                placeholder={t("dateTime")}
                                required
                                value={dateTime}
                                onChange={(e) => setDateTime(e.target.value)}
                            />
                            <div className="input-hint">
                                {t("dateTimeSub")}
                            </div>
                        </div>

                        <div className="action">
                            <button type="submit" className="action-button">
                                {t("cost")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Form;