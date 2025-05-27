'use client';

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-gray-800 text-white py-4 px-8 text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} NextCode Labs. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
