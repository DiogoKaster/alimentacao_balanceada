/** @type {import('next').NextConfig} */

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')


// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {

  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environment variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  const env = {
    REACT_APP_BACKEND_URL: (() => {
      if (isDev) return 'http://localhost:3002'
      // if (isProd) {
      //   return 'https://www.siliconvalley-codecamp.com/rest/speakers/ps'
      // }
      // if (isStaging) return 'http://localhost:11639'
      // return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),

    
  }
  
  images = {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3002',
        pathname: '/images/**',
      },
    ],
  }

  // next.config.js object
  return {
    env, images
  }
}