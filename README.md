# grunt-xbuild [![Build Status](https://travis-ci.org/andyroyle/grunt-xbuild.png?branch=master)](https://travis-ci.org/andyroyle/grunt-xbuild) [![NPM version](https://badge.fury.io/js/grunt-xbuild.png)](http://badge.fury.io/js/grunt-xbuild) ![Dependencies](https://david-dm.org/andrewrjones/grunt-ssh.png)

xbuild runner for grunt

## Getting Started:

The task requires that the [mono mdk][1] be installed and the 'xbuild' command available in the path

installing:
```shell
npm install git://github.com/andyroyle/grunt-xbuild.git --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-xbuild');
```

## XBuild task

builds and execs the xbuild command on the shell

```js
xbuild: {
  build: {
    options: {
      sln_file: "MySolution.sln", // solution to target
      configuration: "Release", // optional configuration (e.g. Debug, Release), defaults to Release
      target_framework: "v4.0", // optional, defaults to 'v4.0'
      properties: {
        // <key: value> list of extra properties to be included e.g.
        outputPath: "./buildOutput/" // expands to /p:outputPath=./buildOutput/
      }
    }
  }
}
```

[1]: http://www.go-mono.com/mono-downloads/download.html
