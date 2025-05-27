'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import { useAuth } from '@/context/AuthContext';

const ClientHeader: React.FC = () => {
    const pathname = usePathname();
    const { user } = useAuth(); // Obtener el usuario desde el contexto de autenticación

    // Ocultar el Header solo si estamos en la página principal
    if (pathname === '/') {
        return null;
    }

    return <Header user={user} />; // Pasar el usuario como prop al Header
};

export default ClientHeader;
