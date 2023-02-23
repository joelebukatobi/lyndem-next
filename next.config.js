/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/worldjumble/answersheet',
        destination: '/games/63330f75edaf740219179400/answersheet',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
