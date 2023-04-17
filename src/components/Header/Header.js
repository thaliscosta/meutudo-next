import React, { useEffect, useRef, useState } from "react"
import style from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/images/logo.webp'

function Header() {

    const [isSticky, setSticky] = useState(false);
    const buttonRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 50 ? true : false);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        if (buttonRef.current && navRef.current) {
            buttonRef.current.classList.toggle('active');
            navRef.current.classList.toggle('active');
        }
    };

    return (
        <header className={`${style.header} ${isSticky ? style.whiteHeader : ''}`}>
            <div className="container">
                <div className={style.topSite}>

                    <Link href="/" className={style.logo}>
                        <Image
                            src={logo}
                            alt='MeuTudo'
                            className={style.logo}
                        />
                    </Link>
                    <nav ref={navRef}>
                        <ul>
                            <li><a href="">Quem somos</a></li>
                            <li><a href="">Seu crédito</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Carreiras</a></li>
                            <li><a href="">Ajuda</a></li>
                            <li><a href="" className={style.login}>Entrar</a></li>
                        </ul>
                    </nav>
                    <button onClick={toggleMenu} ref={buttonRef} className={style.toggleMenu}>
                        <span className={style.line1}></span>
                        <span className={style.line2}></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
