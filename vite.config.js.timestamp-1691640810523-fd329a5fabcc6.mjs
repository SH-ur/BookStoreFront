// vite.config.js
import { defineConfig } from "file:///C:/Users/lumin/Desktop/BookStoreClient/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/lumin/Desktop/BookStoreClient/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 3e3
    // Cambia este valor al puerto 3000
  },
  rewrites: [{ source: "/(.*)", destination: "/" }]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsdW1pblxcXFxEZXNrdG9wXFxcXEJvb2tTdG9yZUNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbHVtaW5cXFxcRGVza3RvcFxcXFxCb29rU3RvcmVDbGllbnRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2x1bWluL0Rlc2t0b3AvQm9va1N0b3JlQ2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAzMDAwLCAvLyBDYW1iaWEgZXN0ZSB2YWxvciBhbCBwdWVydG8gMzAwMFxyXG4gIH0sXHJcbiAgcmV3cml0ZXM6IFt7IHNvdXJjZTogXCIvKC4qKVwiLCBkZXN0aW5hdGlvbjogXCIvXCIgfV0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThTLFNBQVMsb0JBQW9CO0FBQzNVLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsRUFDUjtBQUFBLEVBQ0EsVUFBVSxDQUFDLEVBQUUsUUFBUSxTQUFTLGFBQWEsSUFBSSxDQUFDO0FBQ2xELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==