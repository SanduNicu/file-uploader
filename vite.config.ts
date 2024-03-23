import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
// @ts-ignore
import express from "./express-plugin.ts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), express("src/server")],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./testSetup.ts",
  },
});
