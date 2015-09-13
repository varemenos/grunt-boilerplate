// npm i -D grunt-sass

module.exports = {
    'dev': {
        options: {
            'style': 'expanded',
        },
        files: {
            'output.css': 'input.scss'
        }
    },
    'dist': {
        options: {
            'sourcemap': 'none',
            'style': 'compressed',
        },
        files: {
            'output.css': 'input.scss'
        }
    }
};
