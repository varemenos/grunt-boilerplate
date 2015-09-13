// npm i -D grunt-replace

var vars = require('./vars.json');
module.exports = {
    versions: {
        options: {
            variables: vars,
            prefix: '@@',
        },
        files: [{
            src: ['index.html'],
            dest: 'dist/',
            expand: true,
            flatten: true
        }]
    }
};
