/** @type {import('next').NextConfig} */

const hostnames = ["cdn4.iconfinder.com", "cdn3.iconfinder.com", "cdn1.iconfinder.com", "cdn0.iconfinder.com"]
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns: hostnames.map(hostname => ({
      protocol:"https", 
      hostname, 
    })) 
  }
}

module.exports = nextConfig
