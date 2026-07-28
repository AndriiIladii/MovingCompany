import { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
    return (
        <section id={id} className={`py-20 ${className ?? ''}`}>
            {children}
        </section>
    );
};

export default SectionWrapper;