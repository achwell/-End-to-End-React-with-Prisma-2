import { initAuth0 } from '@auth0/nextjs-auth0'
import { SignInWithAuth0 } from '@auth0/nextjs-auth0/dist/instance'
import getConfig from "next/config"

const {serverRuntimeConfig: {auth, cookieSecret}} = getConfig()

const auth0: SignInWithAuth0 = initAuth0({
    ...auth,
    session: {
        cookieSecret,
        cookieLifetime: 60 * 60* 8,
        storeIdToken: false,
        storeRefreshToken: false
    },
    oidClient: {
        httpTimeout: 2500,
        clockTolerance: 10000
    }
})

export default auth0
