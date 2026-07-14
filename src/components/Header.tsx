import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
    return (
        <header className="bg-[#1f3a5f]">
            <div className="flex justify-between text-white max-w-7xl mx-auto px-4 items-center py-4">
                <div><a href="#"><img src="/images/logo.webp" alt="Logo" /></a></div>
                <div><LanguageSwitcher /></div>
            </div>
        </header>

    );
};

export default Header;