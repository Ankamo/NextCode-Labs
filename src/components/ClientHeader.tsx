'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';

const ClientHeader: React.FC = () => {
    const pathname = usePathname();

    // Ocultar el Header solo si estamos en la página principal
    if (pathname === '/') {
        return null;
    }

    return <Header />;
};

export default ClientHeader;
