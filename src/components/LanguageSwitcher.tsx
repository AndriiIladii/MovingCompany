'use client'
import { useLocale } from "next-intl";
import { Link } from "../i18n/navigation"
import { routing } from "../i18n/routing"

const LanguageSwitcher = () => {
    const languageAtTheMoment = useLocale()

    return (
        <>

            {routing.locales.map((locale) => {

                return <Link href="/" className={languageAtTheMoment === locale ? 'font-bold px-2' : 'opacity-50 px-2'} key={locale} locale={locale}>{locale.toUpperCase()}</Link>

            }

            )}

        </>
    );
};

export default LanguageSwitcher;