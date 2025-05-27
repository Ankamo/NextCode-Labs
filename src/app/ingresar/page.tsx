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
        setErrorMessage('');

        if (!username || !password) {
            setErrorMessage('Por favor, complete todos los campos');
            return;
        }

        try {
            const res = await fetch('/data/usuario.json');
            if (!res.ok) throw new Error('Error del servidor');
            
            const data = await res.json();
            
            if (username.trim().toLowerCase() === data.username.toLowerCase() && 
                password === data.password) {
                try {
                    login(username); // Pasar el nombre de usuario al contexto
                    router.push('/panel');
                } catch (error) {
                    console.error('Error de navegación:', error);
                    setErrorMessage('Error al redirigir. Por favor, intente de nuevo.');
                }
            } else {
                setErrorMessage('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error de autenticación:', error);
            setErrorMessage('Error en el servidor. Por favor, intente más tarde.');
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
