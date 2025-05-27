'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

const ClientFooter: React.FC = () => {
    const pathname = usePathname();

    // Ocultar el Footer solo si estamos en la página principal
    if (pathname === '/') {
        return null;
    }

    return <Footer />;
};

export default ClientFooter;
