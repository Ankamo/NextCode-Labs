import '../styles/globals.css';
import ClientHeader from '@/components/ClientHeader';
import ClientFooter from '@/components/ClientFooter';

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
                <ClientHeader />
                <main>{children}</main>
                <ClientFooter />
            </body>
        </html>
    );
}
