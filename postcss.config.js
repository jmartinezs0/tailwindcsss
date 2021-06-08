const cssnano = require('cssnano');

module.export = {
    plugins: [
         require('tailwindcss'),
         cssnano ({
             preset = 'default',
         }),
         require('autoprefixer'),
    ]
}