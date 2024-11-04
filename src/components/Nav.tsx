'use client'

import React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => {
    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link href="/about">Sobre Nosotros</Link>
                </li>
                <li className="nav-item services-dropdown">
                    Servicios
                    <ul className="dropdown-content">
                        <li>
                            <Link href="/services/web-development">Desarrollo Web</Link>
                        </li>
                        <li>
                            <Link href="/services/mobile-apps">Aplicaciones Móviles</Link>
                        </li>
                        <li>
                            <Link href="/services/consulting">Consultoría Tecnológica</Link>
                        </li>
                        <li>
                            <Link href="/services/automation">Automatización y Scripts</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link href="/projects">Proyectos</Link>
                </li>
                <li className="nav-item">
                    <Link href="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                    <Link href="/testimonials">Testimonios</Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact">Contacto</Link>
                </li>
                <li className="nav-item">
                    <Link href="/faq">FAQ</Link>
                </li>
                <li className="nav-item">
                    <Link href="/careers">Carreras</Link>
                </li>
                <li className="nav-item">
                    <Link href="/support">Soporte</Link>
                </li>
            </ul>

            <style jsx>{`
                .nav-container {
                    display: flex;
                    justify-content: center;
                    background-color: #333;
                    padding: 1rem;
                }
                .nav-list {
                    list-style: none;
                    display: flex;
                    gap: 1.5rem;
                }
                .nav-item {
                    position: relative;
                }
                .nav-item a {
                    color: #fff;
                    text-decoration: none;
                }
                .services-dropdown:hover .dropdown-content {
                    display: block;
                }
                .dropdown-content {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background-color: #444;
                    padding: 0.5rem;
                    border-radius: 4px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                }
                .dropdown-content li {
                    padding: 0.5rem 1rem;
                }
                .dropdown-content li a {
                    color: #fff;
                }
                .dropdown-content li a:hover {
                    color: #ddd;
                }
            `}</style>
        </nav>
    );
};

export default Nav;
