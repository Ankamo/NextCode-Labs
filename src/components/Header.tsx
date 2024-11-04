// src/components/Header.tsx
import React from 'react';
import Nav from './Nav';

const Header: React.FC = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>NextCode Labs</h1>
            <Nav />
        </header>
    );
};

const styles = {
    header: {
        padding: '1rem 2rem',
        backgroundColor: '#1f1f1f',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
};

export default Header;
