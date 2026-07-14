'use client'
import { useTranslations } from "next-intl";

const Services = () => {

    const t = useTranslations('services')
    const keys = ['homeMoving', 'officeMoving', 'storeDelivery', 'constructionSupplies', 'cleaning', 'fragileCargo', 'specialCargo', 'transfer'] as const;

    return (
        <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {keys.map((item: any, index) => (
                    <div key={item} className="bg-white rounded-xl shadow p-6 text-center">
                        <img src={`/images/services/${index + 1}.png`} alt={t(item)} />
                        <p>{t(item)}</p>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Services;