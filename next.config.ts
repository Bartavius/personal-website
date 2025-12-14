import type { NextConfig } from "next";

const { execSync } = require('child_process');

const getLastCommitDate = () => {
  try {
    return execSync('git log -1 --format=%cd --date=format:"%b %d, %Y"')
      .toString()
      .trim();
  } catch {
    return 'Dec 14th, 2025';
  }
};

module.exports = {
  env: {
    LAST_COMMIT_DATE: getLastCommitDate(),
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
