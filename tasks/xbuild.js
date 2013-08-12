
module.exports = function(grunt) {
    'use strict';

    grunt.registerMultiTask('xbuild', 'run mono xbuild', function() {

        var cp = require('child_process'),
            f = require('util').format,
            verbose = grunt.verbose,
            log = grunt.log,
            done = this.async(),
            options = this.options({
                sln_file: "",
                configuration: "Release",
                target_framework: "v4.0",
                properties: []
            }),
            command = [
                "xbuild",
                options.sln_file,
                "/p:configuration=" + options.configuration,
                "/p:TargetFrameworkVersion=" + options.target_framework
            ];

        verbose.writeflags(options, 'Options');

        for(var p in options.properties){
            command.push([ "/p:", p.key, "=", p.value].join());
        }

        verbose.subhead(command);

        var childProcess = cp.exec(command.join(), {}, function(){});

        childProcess.stdout.on('data', function (d) { log.write(d); });
        childProcess.stderr.on('data', function (d) { log.error(d); });

        childProcess.on('exit', function(code) {
            if (code !== 0) {
                log.error(f('Exited with code: %d.', code));
                return done(false);
            }

            verbose.ok(f('Exited with code: %d.', code));
            done();
        });
    });
};