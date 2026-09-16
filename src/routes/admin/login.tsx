import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useState } from 'react';
import { loginAdmin } from '@/api/auth';

export const Route = createFileRoute('/admin/login')({
  component: AdminLogin,
});

function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await loginAdmin({ data: { email, password } });
      router.navigate({ to: '/admin/jobs' });
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-md bg-white p-8 border border-border shadow-sm">
        <h1 className="text-2xl font-display font-bold uppercase tracking-widest text-center mb-8">
          Admin Login
        </h1>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold tracking-widest uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-border px-4 py-3 bg-transparent outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold tracking-widest uppercase mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-border px-4 py-3 bg-transparent outline-none focus:border-accent transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white font-semibold uppercase tracking-widest py-4 mt-4 hover:bg-accent/90 transition-colors disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
