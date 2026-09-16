import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" }
    }),
    nitro({ 
      preset: process.env.BUILD_TARGET === 'docker' ? 'node-server' : 'vercel',
      vercel: {
        functions: {
          "**/*": {
            includeFiles: [
              "node_modules/.prisma/client/**",
              "node_modules/@prisma/client/**",
              "node_modules/tslib/**"
            ]
          }
        }
      }
    }),
    react(),
  ],
});
