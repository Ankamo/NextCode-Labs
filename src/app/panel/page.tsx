'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const PanelPage: React.FC = () => {
    const { logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout(); // Cerrar sesión
        router.push('/'); // Redirigir al inicio
    };

    const [projects, setProjects] = useState<{ id: number; name: string; usedStorage: number }[]>([]); // Lista de proyectos
    const [globalUsedStorage, setGlobalUsedStorage] = useState(0); // Almacenamiento global usado en GB
    const [globalMaxStorage, setGlobalMaxStorage] = useState(200); // Almacenamiento global máximo en GB

    // Cargar proyectos desde localStorage al cargar la página
    useEffect(() => {
        const storedProjects = localStorage.getItem('projects');
        if (storedProjects) {
            const parsedProjects = JSON.parse(storedProjects);
            setProjects(parsedProjects);
            calculateGlobalStorage(parsedProjects);
        } else {
            setProjects([]);
            setGlobalUsedStorage(0);
            setGlobalMaxStorage(0);
        }
    }, []);

    // Guardar proyectos en localStorage cuando cambien
    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
        calculateGlobalStorage(projects);
    }, [projects]);

    const calculateGlobalStorage = (projects: { id: number; name: string; usedStorage: number }[]) => {
        if (projects.length === 0) {
            setGlobalUsedStorage(0);
            setGlobalMaxStorage(0);
            return;
        }
        const totalUsedStorage = projects.reduce((sum, project) => sum + project.usedStorage, 0);
        setGlobalUsedStorage(totalUsedStorage);
        setGlobalMaxStorage(200); // Almacenamiento máximo global
    };

    const handleDeleteProject = (id: number) => {
        // Encontrar el proyecto a eliminar
        const projectToDelete = projects.find((project) => project.id === id);
        if (!projectToDelete) return;

        // Reducir el almacenamiento global usado
        setGlobalUsedStorage((prev) => Math.max(prev - projectToDelete.usedStorage, 0));

        // Eliminar el proyecto de la lista
        setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
    };

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 p-4">
                <h2 className="text-xl font-bold mb-4">Panel</h2>
                <nav className="space-y-2">
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
                        Proyectos
                    </a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
                        Almacenamiento
                    </a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
                        Configuración
                    </a>
                    <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Cerrar Sesión
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">Panel</h1>

                {/* Almacenamiento Global */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Almacenamiento Global</h2>
                    <p className="text-lg">
                        Almacenamiento usado: <strong>{globalUsedStorage.toFixed(2)} GB</strong> de <strong>{globalMaxStorage.toFixed(2)} GB</strong>
                    </p>
                    <div className="w-full bg-gray-700 rounded h-4 mt-2">
                        <div
                            className="bg-blue-600 h-4 rounded"
                            style={{ width: globalMaxStorage > 0 ? `${(globalUsedStorage / globalMaxStorage) * 100}%` : '0%' }}
                        ></div>
                    </div>
                </div>

                {/* Lista de Proyectos */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Proyectos</h2>
                    {projects.length === 0 ? (
                        <p className="text-gray-400">No hay proyectos creados.</p>
                    ) : (
                        <ul className="space-y-4">
                            {projects.map((project) => (
                                <li
                                    key={project.id}
                                    className="p-4 bg-gray-800 rounded shadow flex justify-between items-center"
                                >
                                    <div>
                                        <h3 className="text-lg font-bold">{project.name}</h3>
                                        <p className="text-sm text-gray-400">
                                            Almacenamiento usado: {project.usedStorage.toFixed(2)} GB
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteProject(project.id)}
                                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
                                    >
                                        Eliminar Proyecto
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </div>
    );
};

export default PanelPage;
