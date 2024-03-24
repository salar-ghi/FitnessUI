import { createRequire } from 'module';
const require = createRequire(import.meta.url)

// import runtimeCaching from "next-pwa/cache"
// import Caching from "next-pwa/cache"
import PWA from "next-pwa"

/** @type {import('next').NextConfig} */
// const runtimeCaching = require("next-pwa/cache");
// const runtimeCaching = Caching;
const withPWA = PWA({
    dest : 'public',
    register: true,
    skipWaiting: true,
    // cacheOnFrontEndNav: true,
    // aggressiveFrontEndNavCaching: true,
    // reloadOnOnline: true,
    // swcMinify:true,
    // runtimeCaching
})

const nextConfig = withPWA({
    reactStrictMode : false,
    // swcMinify:false
});

export default nextConfig;