// npm i -D grunt-contrib-uglify

module.exports = {
    'options': {
        'compress': {
            'drop_console': true
        }
    },
    'base': {,
        files: {
            'output.js': ['input.js']
        }
    }
};
