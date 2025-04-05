'use client';
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default function Header() {
    const navLinks = [
        { title: "Home", id: "home" },
        { title: "About me", id: "about" },
        { title: "Education", id: "education" },
    ];

    const [openMenu, setOpenMenu] = useState(false);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setOpenMenu(false);
        }
    };

    return (
        <header className=" p-2 lg:py-0 text-black px-8 lg:flex lg:justify-center lg:items-center relative bg-rosaLab md:bg-transparent z-40">
            <div className="flex items-center">
                <button id="navButton" title="navmenu" className="text-white w-full flex justify-end lg:hidden" onClick={() => setOpenMenu((prevValue) => !prevValue)}>
                    {openMenu ? <FiX size={30} /> : <FiMenu size={30} />}
                </button> 
            </div>
            <section className={`m-4 drop-shadow left-0 w-[calc(100vw-32px)] rounded-md z-40 p-4 lg:p-0 my-2 transition-all duration-300 max-lg:absolute max-lg:bg-rosaLab lg:flex lg:flex-grow lg:visible lg:opacity-100 ${openMenu ? 'opacity-100 visible border border-[#B04B6B]' : 'opacity-0 invisible'}`}>
                <nav className={`flex grow flex-col lg:flex-row lg:items-center lg:justify-end`}>
                    {navLinks.map((link) => (
                        <a 
                            key={link.title} 
                            onClick={() => handleScroll(link.id)}
                            className={`transition-all lg:mx-2 xl:mx-8 text-white hover:font-medium cursor-pointer`}
                        >
                            {link.title}
                        </a>
                    ))}
                </nav>
            </section>
        </header>
    );
}