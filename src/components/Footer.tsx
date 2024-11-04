// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <p>&copy; {new Date().getFullYear()} NextCode Labs. Todos los derechos reservados.</p>
                <nav style={styles.nav}>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <Link href="/privacy-policy">Política de Privacidad</Link>
                        </li>
                        <li style={styles.navItem}>
                            <Link href="/terms-of-service">Términos de Servicio</Link>
                        </li>
                        <li style={styles.navItem}>
                            <Link href="/contact">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '1rem 2rem',
        backgroundColor: '#1f1f1f',
        color: '#f1f1f1',
        textAlign: 'center' as const,
        fontSize: '0.875rem',
        borderTop: '1px solid #333',
    },
    footerContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center' as const,
        gap: '0.5rem',
    },
    nav: {
        marginTop: '0.5rem',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        gap: '1rem',
        margin: 0,
    },
    navItem: {
        color: '#f1f1f1',
    },
};

export default Footer;
