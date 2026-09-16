import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useState } from 'react';
import { getMaintenanceState, toggleMaintenanceState } from '../api/maintenance';
import { HugeiconsIcon } from '@hugeicons/react';
import { Settings02Icon, LockIcon } from '@hugeicons/core-free-icons';

export const Route = createFileRoute('/maintenance-toggle')({
  component: MaintenanceTogglePage,
  loader: async () => {
    const isMaintenanceMode = await getMaintenanceState();
    return { isMaintenanceMode };
  },
});

function MaintenanceTogglePage() {
  const { isMaintenanceMode } = Route.useLoaderData();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleToggle = async (enable: boolean) => {
    setError('');
    setSuccess('');
    setIsLoading(true);
    
    try {
      await toggleMaintenanceState({ data: { password, enable } });
      setSuccess(`Maintenance mode successfully ${enable ? 'enabled' : 'disabled'}.`);
      router.invalidate();
    } catch (err: any) {
      setError(err.message || 'Failed to authenticate');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        <div className="bg-white border border-border p-8 rounded-sm shadow-sm relative overflow-hidden">
          {/* Accent top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
          
          <div className="flex flex-col items-center mb-8">
            <HugeiconsIcon icon={Settings02Icon} size={40} className="text-accent mb-4" />
            <h1 className="font-display text-2xl font-light uppercase tracking-widest text-foreground text-center">
              Maintenance Control
            </h1>
            <div className="h-px w-12 bg-accent mt-4" />
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-muted/20 border border-border rounded-sm flex items-center justify-between">
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Current Status:</span>
              <span className={`text-sm font-bold tracking-widest uppercase ${isMaintenanceMode ? 'text-red-500' : 'text-green-500'}`}>
                {isMaintenanceMode ? 'ACTIVE' : 'INACTIVE'}
              </span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Admin Password
              </label>
              <div className="relative">
                <HugeiconsIcon icon={LockIcon} size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter access code"
                  className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-none focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-xs font-medium tracking-wide border border-red-100">
                {error}
              </div>
            )}
            
            {success && (
              <div className="p-3 bg-green-50 text-green-600 text-xs font-medium tracking-wide border border-green-100">
                {success}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <button
                onClick={() => handleToggle(true)}
                disabled={isLoading || isMaintenanceMode}
                className="w-full py-3 bg-red-50 text-red-600 border border-red-200 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Enable
              </button>
              <button
                onClick={() => handleToggle(false)}
                disabled={isLoading || !isMaintenanceMode}
                className="w-full py-3 bg-green-50 text-green-600 border border-green-200 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Disable
              </button>
            </div>
            
            <div className="text-center mt-6">
              <button 
                onClick={() => router.navigate({ to: '/' })}
                className="text-xs text-muted-foreground hover:text-accent uppercase tracking-widest underline underline-offset-4"
              >
                Go to Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
