const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const svgrPlugin = require('esbuild-plugin-svgr');
const inlineImage = require('esbuild-plugin-inline-image');
const fs = require('fs');
const path = require('path');
const open = require('open');
// const eslint = require('esbuild-plugin-eslint');
require('dotenv').config();

const outdirectory = 'public';

//clear out any old JS or CSS
fs.readdir(outdirectory, (err, files) => {
  if (err) throw err;
  for (const file of files) {
    if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.map')) {
      fs.unlink(path.join(outdirectory, file), (err) => {
        if (err) throw err;
      });
    }
  }
});

//defaults to build
let config = '-build';
if (process.argv.length > 2) {
  config = process.argv[2];
}

const buildOptions = {
  // pass any options to esbuild here...
  logLevel: 'info',
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outdir: outdirectory,
  outbase: 'src',
  minify: config == '-watch' ? false : true,
  sourcemap: config == '-watch' ? true : false,
  minifyWhitespace: config == '-watch' ? false : true,
  minifyIdentifiers: config == '-watch' ? false : true,
  minifySyntax: false,
  target: 'es2020',
  tsconfig: './tsconfig.json',
  incremental: config == '-watch' ? true : false,
  watch:
    config == '-watch'
      ? {
          onRebuild(error) {
            if (error) console.error('watch build failed:', error);
            else console.log('watch build succeeded...');
          },
        }
      : null,
  loader: {
    '.tsx': 'tsx',
    '.ts': 'ts',
    '.ttf': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.png': 'file',
    '.gif': 'file',
    '.webp': 'file',
    '.avif': 'file',
    '.svg': 'file',
  },
  define: {
    'process.env.REACT_APP_NODE_ENV': JSON.stringify(process.env.REACT_APP_NODE_ENV),
    'process.env.REACT_APP_API_SERVER_URL': JSON.stringify(process.env.REACT_APP_API_SERVER_URL),
    'process.env.REACT_APP_DASHBOARD_URL': JSON.stringify(process.env.REACT_APP_DASHBOARD_URL),
    global: 'window',
  },
  plugins: [
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source, { from: undefined });
        return css;
      },
    }),
    svgrPlugin(),
    inlineImage({
      extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif'],
      limit: -1,
    }),
    // eslint(),
  ],
};

esbuild
  .build(buildOptions)
  .then(() =>
    console.log(
      config == '-watch' ? '⚡ Watch Build complete! ⚡' : '⚡ Production Build complete! ⚡',
    ),
  )
  .catch(() => process.exit(1));

// Run a local web server with livereload when -watch is set
config == '-watch' && serve();

async function serve() {
  console.log(`Server running from: http://localhost:5001`);

  const servor = require('servor');
  await servor({
    browser: true,
    root: outdirectory,
    port: 5001,
  });
  open('http://localhost:5001');
}

