import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    // Static export has no image optimizer; emit plain <img> tags.
    unoptimized: true,
  },
  // Fully static HTML/JS export into ./out — no server runtime required.
  output: "export",
  // Emit each route as <route>/index.html for maximum static-host portability.
  trailingSlash: true,
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
