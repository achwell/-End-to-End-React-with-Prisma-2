require('dotenv').config();

const {
    DATABASE_URL,
    AUTH0_CLIENT_ID,
    AUTH0_DOMAIN,
    AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE,
    AUTH0_COOKIE,
    BACKEND_ADDRESS
} = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    publicRuntimeConfig: {
        BACKEND_URL: `${BACKEND_ADDRESS}/api/graphql`,
        CORS_URL: `${BACKEND_ADDRESS}/api/cors`,
    },
    serverRuntimeConfig: {
        auth: {
            domain: AUTH0_DOMAIN,
            clientId: AUTH0_CLIENT_ID,
            clientSecret: AUTH0_CLIENT_SECRET,
            scope: AUTH0_SCOPE,
            redirectUrl: `${BACKEND_ADDRESS}/api/callback`,
            postLogoutReRedirectUri: `${BACKEND_ADDRESS}/`
        },
        cookieSecret: AUTH0_COOKIE
    }
};
module.exports = nextConfig
