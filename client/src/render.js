const fs = require('fs');
const sass = require('sass');

const sassFile = './src/sass/main.scss';
const cssFile = './src/style.css';

const result = sass.renderSync({
  file: sassFile,
  includePaths: ['./node_modules/']
});

console.log("Sass rendered successfully, output to " + cssFile);

try {
  fs.writeFileSync(cssFile, result.css.toString());
} catch (err) {
  console.error(err.message);
}
