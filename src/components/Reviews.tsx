'use client'
import { useTranslations } from "next-intl";


const Reviews = () => {

    const t = useTranslations('reviews')
    const reviewsList = [
        { name: 'alex', date: 'yesterday', review: 'firstReview' },
        { name: 'irina', date: 'oneWeek', review: 'secondReview' },
        { name: 'sergey', date: 'threeWeeks', review: 'thirdReview' },
        { name: 'natalia', date: 'twoWeeks', review: 'fourthReview' },
        { name: 'maxim', date: 'oneMonth', review: 'fifthReview' },
        { name: 'vladimir', date: 'fiveDays', review: 'sixthReview' },
        { name: 'taras', date: 'twoMonth', review: 'seventhReview' },
        { name: 'svetlana', date: 'threeWeeks', review: 'eigthReview' },
        { name: 'elena', date: 'threeDays', review: 'ninthReview' },
    ];


    return (

        <section>
            <div className="container">
                <h2 className="reviews__title">
                    {t('reviewTitle')}
                </h2>

                {reviewsList.map((item, index) => (
                    <div key={index} className="review-card">
                        <div className="review-card__header">
                            <div className="review-card__avatar review-card__avatar--red">{t(item.name).charAt(0)}</div>
                            <div className="review-card__info">
                                <div className="review-card__name">{t(item.name)}</div>
                                <div className="review-card__date">{t(item.date)}</div>
                            </div>
                        </div>
                        <div className="review-card__stars">
                            ★★★★★ <span className="review-card__score-text">5.0</span>
                        </div>
                        <p className="review-card__text">{t(item.review)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;