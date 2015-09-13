// npm i -D grunt-postcss autoprefixer-core

module.exports = {
    options: {
        processors: [
            require('autoprefixer-core')({
                cascade: false,
                remove: false,
                browsers: 'last 2 versions'
            })
        ]
    },
    dev: {
        options: {
            map: true
        },
        files: {
            'output.css': ['input.css']
        }
    },
    dist: {
        options: {
            map: false
        },
        files: {
            'output.css': ['input.css']
        }
    }
};
