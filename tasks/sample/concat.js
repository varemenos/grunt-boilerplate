// npm i -D grunt-contrib-concat

module.exports = {
    options: {
        separator: ';'
    },
    dev: {
        src: [
            '1.js',
            '2.js'
        ],
        dest: 'script.js'
    }
};
