interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "outline";
}



const Button = ({ variant, children, ...rest }: ButtonProps) => {


    const variants = {
        primary: 'bg-brand-orange text-white hover:bg-[#e67e00]',
        secondary: 'bg-brand-blue text-white hover:bg-[#162d4a]',
        outline: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
    }

    return (
        <button  {...rest} className={`rounded-lg px-6 py-3 cursor-pointer transition ${variants[variant]}`}>
            {children}
        </button>
    );
};

export default Button;