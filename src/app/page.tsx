'use client';

import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Bienvenidos a NextCode Labs</h1>
            <p className="text-lg text-center max-w-2xl mb-8">
                En NextCode Labs, nos especializamos en crear soluciones web modernas y eficientes
                utilizando tecnologías de vanguardia como Next.js y TypeScript.
            </p>
            <div className="flex space-x-4">
                <Link
                    href="/inicio"
                    className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500"
                >
                    Ingresar al Sitio Web
                </Link>
                <Link
                    href="/ingresar"
                    className="px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-600"
                >
                    Ingresar al Panel
                </Link>
            </div>
        </main>
    );
};

export default HomePage;
