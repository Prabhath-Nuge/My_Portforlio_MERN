import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from '../assets/logo.png';

const Navbar = () => {
    const navItems = [
        { label: "Features", href: "#" },
        { label: "Workflow", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Testimonials", href: "#" },
    ];
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-primary/80">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0 bg-[#3f4c81]/20 rounded-2xl px-2 py-1">
                        <img className="h-10 mr-2 drop-shadow-md" src={logo} alt="Logo" />
                        {/* <span className="text-xl tracking-tight">VirtualR</span> */}
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12 text-text-primary font-medium ">
                        {navItems.map((item, index) => (
                            <li key={index} className="hover:scale-105 duration-100 ease-in-out">
                                <a href={item.href} className="">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center ">
                        <a href="#" className="py-2 px-3 border rounded-md hover:bg-secondary/20 shadow-lg hover:scale-102 duration-100 ease-in-out text-text-primary">
                            Sign In
                        </a>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-primary to-secondary py-2 px-3 rounded-md shadow-lg hover:scale-105 duration-100 ease-in-out text-text-primary"
                        >
                            Create an account
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className="py-2 px-3 border rounded-md">
                                Sign In
                            </a>
                            <a
                                href="#"
                                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-orange-800"
                            >
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
