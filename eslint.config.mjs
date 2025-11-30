import nextConfig from "eslint-config-next";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      ".vercel/**",
    ],
  },
  ...nextConfig,
];

export default eslintConfig;
