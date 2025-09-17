import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // network par expose karne ke liye
    port: 5173       // port fix kar diya
  }
});
