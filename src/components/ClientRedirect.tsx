'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const ClientRedirect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            router.replace('/panel'); // Redirigir al panel si el usuario está autenticado
        }
    }, [isLoggedIn, router]);

    return <>{children}</>;
};

export default ClientRedirect;
