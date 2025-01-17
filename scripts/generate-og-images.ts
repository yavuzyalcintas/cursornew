import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import nodeHtmlToImage from "node-html-to-image";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateImage(type: "og" | "twitter") {
  const width = type === "twitter" ? 1200 : 1200;
  const height = type === "twitter" ? 600 : 630;

  const html = `
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
          body {
            width: ${width}px;
            height: ${height}px;
            margin: 0;
            font-family: 'Inter', sans-serif;
            background: linear-gradient(to bottom right, #000000, #111111);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            z-index: 10;
            position: relative;
          }
          .background-grid {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 25px 25px, #222 2%, transparent 0%);
            background-size: 50px 50px;
            opacity: 0.3;
          }
          .gradient-orb {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            height: 600px;
            background: radial-gradient(circle at center, rgba(130, 119, 89, 0.15) 0%, transparent 70%);
            filter: blur(40px);
            border-radius: 50%;
          }
          .logo {
            display: flex;
            align-items: center;
            font-size: 100px;
            font-weight: 800;
            margin-bottom: 1rem;
            filter: drop-shadow(0 0 30px rgba(130, 119, 89, 0.3));
            letter-spacing: -0.05em;
          }
          .logo-accent {
            color: hsl(82.7, 78%, 55.5%);
          }
          .title {
            font-size: 60px;
            text-align: center;
            margin-bottom: 1rem;
            font-weight: 700;
            letter-spacing: -0.025em;
          }
          .pills {
            display: flex;
            gap: 12px;
            margin-top: 1rem;
          }
          .pill {
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 24px;
            color: hsl(82.7, 78%, 55.5%);
            border: 2px solid hsl(82.7, 78%, 55.5%);
            background: rgba(130, 119, 89, 0.1);
            font-weight: 500;
          }
        </style>
      </head>
      <body>
        <div class="background-grid"></div>
        <div class="gradient-orb"></div>
        <div class="container">
          <div class="logo">
            <span>cursor</span>
            <span class="logo-accent">.new</span>
          </div>
          <div class="title">
            Intelligent Project Scaffolding
          </div>
          <div class="pills">
            <div class="pill">AI-Powered</div>
            <div class="pill">Modern Stack</div>
            <div class="pill">Best Practices</div>
          </div>
        </div>
      </body>
    </html>
  `;

  const publicDir = path.join(__dirname, "..", "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  const fileName = type === "og" ? "og-image.png" : "twitter-image.png";
  const outputPath = path.join(publicDir, fileName);

  console.log(`Generating ${fileName}...`);

  await nodeHtmlToImage({
    output: outputPath,
    html,
    transparent: false,
    puppeteerArgs: {
      defaultViewport: {
        width,
        height,
      },
    },
  });

  console.log(`Generated ${fileName} successfully!`);
}

async function main() {
  try {
    await generateImage("og");
    await generateImage("twitter");
    console.log("Successfully generated all images!");
  } catch (error) {
    console.error("Failed to generate images:", error);
    process.exit(1);
  }
}

main();
