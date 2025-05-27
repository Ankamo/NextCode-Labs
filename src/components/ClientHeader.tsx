'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';

const ClientHeader: React.FC = () => {
    const pathname = usePathname();

    // Mostrar el Header solo si no estamos en la página principal
    if (pathname === '/') {
        return null;
    }

    return <Header />;
};

export default ClientHeader;
