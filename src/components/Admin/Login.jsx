import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', { username, password });
            const { token } = response.data;
            localStorage.setItem('admin_token', token);
            onLogin(token);
        } catch (err) {
            setError('Invalid username or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--color-bg)]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md p-8 border rounded-lg bg-[var(--color-white)] border-[var(--color-border)] shadow-sm"
            >
                <div className="mb-8">
                    <span className="text-[10px] tracking-[0.14em] uppercase font-mono text-[var(--color-text-tertiary)]">Admin Access</span>
                    <h2 className="text-3xl font-serif mt-2 text-[var(--color-text-primary)]">Welcome back</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-[10px] tracking-[0.1em] uppercase font-mono text-[var(--color-text-tertiary)] mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-border-strong)] transition-colors"
                            placeholder="Enter username"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] tracking-[0.1em] uppercase font-mono text-[var(--color-text-tertiary)] mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-border-strong)] transition-colors"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-xs font-mono">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-[var(--color-accent)] text-white rounded-md text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-all disabled:opacity-50"
                    >
                        {loading ? 'Authenticating...' : 'Sign In'}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
