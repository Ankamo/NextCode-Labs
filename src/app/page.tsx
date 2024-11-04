// src/app/page.tsx

'use client';

import React from 'react';

const HomePage: React.FC = () => {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Bienvenidos a NextCode Labs</h1>
            <p className="text-lg text-center max-w-2xl">
                En NextCode Labs, nos especializamos en crear soluciones web modernas y eficientes
                utilizando tecnologías de vanguardia como Next.js y TypeScript.
            </p>
        </main>
    );
};

export default HomePage;
