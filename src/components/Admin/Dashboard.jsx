import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchQueries = async () => {
        const token = localStorage.getItem('admin_token');
        try {
            const response = await axios.get('http://localhost:5000/api/admin/queries', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setQueries(response.data);
        } catch (err) {
            setError('Failed to fetch queries. Please login again.');
            if (err.response?.status === 401 || err.response?.status === 403) {
                localStorage.removeItem('admin_token');
                window.location.reload();
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQueries();
    }, []);

    const updateStatus = async (id, status) => {
        const token = localStorage.getItem('admin_token');
        try {
            await axios.patch(`http://localhost:5000/api/admin/queries/${id}`, { status }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchQueries();
        } catch (err) {
            console.error('Update failed:', err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-[var(--color-bg-subtle)] p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-[10px] tracking-[0.14em] uppercase font-mono text-[var(--color-text-tertiary)]">Admin Dashboard</span>
                        <h1 className="text-4xl font-serif mt-2 text-[var(--color-text-primary)]">Inbound Queries</h1>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 border border-[var(--color-border)] rounded-md text-xs font-mono text-[var(--color-text-secondary)] hover:bg-[var(--color-white)] transition-colors"
                    >
                        Logout
                    </button>
                </header>

                {loading ? (
                    <div className="py-20 text-center text-[var(--color-text-tertiary)] font-mono text-sm animate-pulse">Loading queries...</div>
                ) : error ? (
                    <div className="py-20 text-center text-red-500 font-mono text-sm">{error}</div>
                ) : queries.length === 0 ? (
                    <div className="py-20 text-center text-[var(--color-text-tertiary)] font-mono text-sm border-2 border-dashed border-[var(--color-border)] rounded-xl">No queries found yet.</div>
                ) : (
                    <div className="grid gap-6">
                        <AnimatePresence>
                            {queries.map((query) => (
                                <motion.div
                                    key={query.id}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-[var(--color-white)] border border-[var(--color-border)] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex flex-col md:flex-row justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-lg font-medium text-[var(--color-text-primary)]">{query.name}</h3>
                                                <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider ${query.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                                                        query.status === 'contacted' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                                    }`}>
                                                    {query.status}
                                                </span>
                                            </div>
                                            <p className="text-xs font-mono text-[var(--color-text-tertiary)] mb-4">{query.email} · {query.budget}</p>
                                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{query.description}</p>
                                        </div>

                                        <div className="flex flex-col justify-between items-end gap-4 min-w-[200px]">
                                            <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                                                {new Date(query.createdAt).toLocaleDateString()} · {new Date(query.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                            <div className="flex gap-2">
                                                <select
                                                    value={query.status}
                                                    onChange={(e) => updateStatus(query.id, e.target.value)}
                                                    className="px-3 py-1.5 border border-[var(--color-border)] rounded text-xs font-mono focus:outline-none bg-transparent"
                                                >
                                                    <option value="pending">Mark Pending</option>
                                                    <option value="contacted">Mark Contacted</option>
                                                    <option value="completed">Mark Completed</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
