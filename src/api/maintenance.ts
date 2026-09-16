import { createServerFn } from '@tanstack/react-start';

// Simple in-memory global state for maintenance mode
// (Resets to true if the server restarts)
let isMaintenanceModeEnabled = false;

export const getMaintenanceState = createServerFn({ method: 'GET' })
  .handler(async () => {
    return isMaintenanceModeEnabled;
  });

export const toggleMaintenanceState = createServerFn({ method: 'POST' })
  .validator((data: { password: string, enable: boolean }) => data)
  .handler(async ({ data }) => {
    const validPassword = process.env.INITIAL_ADMIN_PASSWORD;
    if (!validPassword || data.password !== validPassword) {
      throw new Error('Invalid password');
    }
    
    isMaintenanceModeEnabled = data.enable;
    return { success: true, state: isMaintenanceModeEnabled };
  });
