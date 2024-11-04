// src/app/layout.tsx
import React from 'react';
import '../styles/globals.css'; // Importa los estilos globales

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="es">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;
