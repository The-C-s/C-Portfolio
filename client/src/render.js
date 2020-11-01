const fs = require('fs');
const sass = require('sass');

const filePath = './src/sass/main.scss'

const result = sass.renderSync({
  file: filePath,
  includePaths: ['./node_modules/']
});

console.log("Sass rendered successfully, output to " + filePath);

try {
  fs.writeFileSync('./src/style.css', result.css.toString());
} catch (err) {
  console.error(err.message);
}
