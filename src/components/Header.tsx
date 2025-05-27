'use client';

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="w-full bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold">NextCode Labs</h1>
            <nav className="space-x-4">
                <Link href="/inicio" className="hover:text-blue-400">
                    Inicio
                </Link>
                <Link href="/ingresar" className="hover:text-blue-400">
                    Panel
                </Link>
            </nav>
        </header>
    );
};

export default Header;
