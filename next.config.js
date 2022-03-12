const { createSecureHeaders } = require("next-secure-headers");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          referrerPolicy: "strict-origin-when-cross-origin",
        }),
      },
    ];
  },
};
