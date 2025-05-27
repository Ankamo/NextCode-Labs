import '../styles/globals.css';
import ClientHeader from '@/components/ClientHeader';
import { AuthProvider } from '@/context/AuthContext';
import ClientRedirect from '@/components/ClientRedirect'; // Nuevo componente para manejar redirección

export const metadata = {
    title: 'NextCode Labs',
    description: 'Desarrollo web moderno con Next.js y TypeScript',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className="bg-gray-900 text-white">
                <AuthProvider>
                    <ClientRedirect>
                        <ClientHeader />
                        <main>{children}</main>
                    </ClientRedirect>
                </AuthProvider>
            </body>
        </html>
    );
}
