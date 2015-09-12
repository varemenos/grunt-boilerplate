# grunt-boilerplate

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

## Installation

1. First you have to download the files in your current working directory:

```shell
wget https://github.com/varemenos/grunt-boilerplate/archive/master.zip
unzip master
mv grunt-boilerplate-master/* .
rm -r grunt-boilerplate-master master LICENSE README.md
```

2. Then you have to install grunt and the boilerplate's required grunt tasks:

```shell
npm i -D grunt grunt-contrib-watch jit-grunt load-grunt-configs
```
