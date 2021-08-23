import legacy from '@vitejs/plugin-legacy';
import utile from "./utile";
const {
    entrys,
    base
} = utile;

export default {
    base: base,
    envDir: "./config/",
    define: {
        app_base: JSON.stringify(base),
        app_pages: JSON.stringify(entrys),
    },
    build: {
        target: "es2015",
        rollupOptions: {
            input: {
                ...entrys,
                default: "/index.html"
            },
        },
        manifest: true
    },
    server: {
        host: "127.0.0.1",
        port: "8003",
        open: true
    },
    plugins: [
        legacy({
            targets: ['ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ]
}