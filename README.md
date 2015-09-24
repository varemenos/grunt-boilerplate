# grunt-boilerplate

## Features

1. Modular and clean Grunt configuration (via [load-grunt-configs](https://github.com/creynders/load-grunt-configs/)).
2. No more `grunt.loadNpmTasks()`, all grunt tasks are automatically loaded (via [jit-grunt](https://github.com/shootaroo/jit-grunt)).
3. Lazy-load Grunt tasks as needed, you no longer need to load a myriad of grunt tasks just so you can run the `grunt-contrib-concat`) (via [jit-grunt](https://github.com/shootaroo/jit-grunt)).
4. Preconfigured watch task for your `gruntfile.js` and grunt tasks configurations so it will reload grunt if you modify them (via [tasks/config/watch.js](https://github.com/varemenos/grunt-boilerplate/blob/master/tasks/config/watch.js#L2-L10)).
5. Load custom tasks from `./tasks` (via [grunt.task.loadTasks](https://github.com/varemenos/grunt-boilerplate/blob/master/Gruntfile.js#L16)).
6. Your suggestions and feature requests goes here

## Installation

1) First you have to download the files in your current working directory:

```shell
wget https://github.com/varemenos/grunt-boilerplate/archive/master.zip
unzip master
mv grunt-boilerplate-master/* .
rm -r grunt-boilerplate-master master tasks/sample LICENSE README.md
```

2) Then you have to install grunt and the boilerplate's required grunt tasks:

```shell
npm i -D grunt grunt-contrib-watch jit-grunt load-grunt-configs
```

## Content & Structure

The boilerplate consists of a `Gruntfile.js` file and a `tasks` directory.

```
.
├── Gruntfile.js
└── tasks
```

### The `Gruntfile.js` file

This is the grunt configuration file which contains all the necessary commands to load any grunt-tasks you've installed via npm and are currently in your node_modules directory

### The `tasks` directory

In the `tasks` directory there are 2 things you can do.

1. Add your customs tasks.
2. Add your task configurations inside the `config` subdirectory (like for example the `watch.js` file which is the configuration file for the `grunt-contrib-watch` task).

```
.
├── Gruntfile.js
└── tasks
  └── custom_task_1.js
  └── another-one.js
  └── config
    └── watch.js
    └── sass.js
    └── uglify.js
```

### Sample task file

```js
module.exports = {
    my_task: {
        options: {
            async: true
        },
        dist: {
            src: ['input.js'],
            dest: 'output.js'
        }
    }
};
```

You can find more examples [here](https://github.com/varemenos/grunt-boilerplate/tree/master/tasks/sample).

## License

The MIT License
