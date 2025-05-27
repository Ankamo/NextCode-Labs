'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const IngresarPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const { login } = useAuth(); // Asegurarse de que el contexto esté disponible

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/data/usuario.json');
            if (!res.ok) {
                throw new Error('No se pudo cargar el archivo de usuario.');
            }
            const data = await res.json();

            if (username === data.username && password === data.password) {
                login(); // Actualizar el estado global de autenticación
                setErrorMessage('');
                router.push('/panel');
            } else {
                setErrorMessage('Usuario o contraseña incorrectos');
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
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'} // Cambiar el tipo de input según el estado
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-800 text-white rounded"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)} // Alternar el estado
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                    >
                        {showPassword ? '🙈' : '👁️'} {/* Mostrar el ícono correspondiente */}
                    </button>
                </div>
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
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
