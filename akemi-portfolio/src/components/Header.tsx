'use client';
import { useState } from "react";

export default function Header() {
    const navLinks = [
        { title: "Início", id: "home" },
        { title: "Quem somos?", id: "about" },
        { title: "Oficinas", id: "workshops" },
        { title: "Produtos", id: "products" }
    ];

    const [openMenu, setOpenMenu] = useState(false);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setOpenMenu(false); // Fecha o menu ao clicar em um link
        }
    };

    return (
        <header className=" p-2 lg:py-0 text-black px-8 lg:flex lg:justify-center lg:items-center relative bg-rosaLab md:bg-transparent z-40">
            <div className="flex items-center">
                <button id="navButton" title="Menu de navegação" className="text-white w-full flex justify-end lg:hidden" onClick={() => setOpenMenu((prevValue) => !prevValue)}>
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
                    <button className='transition-all text-white mt-2 lg:mt-0 lg:ml-2' style={{ border: '1px solid white', borderRadius: 30, paddingInline: 20, paddingBlock: 5 }} onClick={() => handleScroll('colab')}>Colaborar</button>
                </nav>
            </section>
        </header>
    );
}