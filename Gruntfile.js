'use strict';

module.exports = function (grunt) {
    // lazy-load only the required grunt tasks
    require('jit-grunt')(grunt);

    // load and then initialize all task configurations
    var taskConfigs = require('load-grunt-configs')(grunt, {
        config: {
            src: 'tasks/config/*.js'
        }
    });
    grunt.initConfig(taskConfigs);

    // load custom tasks from ./tasks folder
    grunt.task.loadTasks('./tasks');

    grunt.registerTask('default', ['watch']);
};
