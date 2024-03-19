import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

const millionConfig = {
    rsc: true
};

export default million.next(nextConfig, millionConfig);
