'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const IngresarPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Leer el archivo usuario.json desde la carpeta public
            const res = await fetch('/data/usuario.json');
            const data = await res.json();

            // Validar credenciales
            if (username === data.username && password === data.password) {
                setErrorMessage(''); // Limpiar mensaje de error
                router.push('/panel'); // Redirigir al panel
            } else {
                setErrorMessage('Usuario o contraseña incorrectos'); // Mostrar mensaje de error
            }
        } catch (error) {
            console.error('Error al validar las credenciales:', error);
            setErrorMessage('Hubo un problema al validar las credenciales.');
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
            <Link href="/" className="text-3xl font-bold mb-6 hover:text-blue-400">
                Inicio de Sesión
            </Link>
            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded"
                    required
                />
                {errorMessage && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                >
                    Ingresar
                </button>
            </form>
        </main>
    );
};

export default IngresarPage;
