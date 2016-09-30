/*eslint-env node */
/*eslint strict: ["error", "global"]*/
'use strict';

var _s = require('underscore.string'),
    chalk = require('chalk'),
    yosay = require('yosay'),
    yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
    prompting: function() {
        this.log(yosay(
            'Hi, my frind! Welcome to ' + chalk.green('Swill boilerplate') + ' generator!'
        ));

        var prompts = [{
            name: 'projectName',
            message: 'Your project name'
        }, {
            name: 'projectDescription',
            message: 'Your project description'
        }, {
            name: 'projectHomepage',
            message: 'Project Homepage'
        }, {
            name: 'authorName',
            message: 'Author Name'
        }, {
            name: 'authorEmail',
            message: 'Author Email'
        }, {
            name: 'authorHomepage',
            message: 'Author\'s website'
        }, {
            name: 'githubUser',
            message: 'Github User'
        }, {
            type: 'confirm',
            name: 'settingFolder',
            message: 'You can rename default folder structure, do you want customize?',
            default: false
        }, {
            name: 'srcFolder',
            message: 'Source folder??',
            default: 'src',
            when: function(response) {
                return response.settingFolder === true;
            }
        }, {
            name: 'destFolder',
            message: 'Destination folder??',
            default: 'app',
            when: function(response) {
                return response.settingFolder === true;
            }
        }, {
            name: 'buildFolder',
            message: 'Builded folder??',
            default: 'build',
            when: function(response) {
                return response.settingFolder === true;
            }
        }, {
            name: 'bowerFolder',
            message: 'Bower folder??',
            default: 'bower_components',
            when: function(response) {
                return response.settingFolder === true;
            }
        }, {
            name: 'fontsDestFolder',
            message: 'Webfonts destination folder??',
            default: 'fonts',
            when: function(response) {
                return response.settingFolder === true;
            }
        }, {
            name: 'spriteSrcFolder',
            message: 'Sprite source folder??',
            default: 'sprite',
            when: function(response) {
                return response.settingFolder === true;
            }
        }, {
            name: 'imgSrcFolder',
            message: 'Images source folder??',
            default: 'images',
            when: function(response) {
                return response.settingFolder === true;
            }
        }, {
            name: 'imgDestFolder',
            message: 'Images destination folder??',
            default: 'img',
            when: function(response) {
                return response.settingFolder === true;
            }
        }, {
            name: 'stylesSrcFolder',
            message: 'Styles source folder??',
            default: 'stylesheets',
            when: function(response) {
                return response.settingFolder === true;
            }
        }, {
            name: 'stylesDestFolder',
            message: 'Styles destination folder??',
            default: 'css',
            when: function(response) {
                return response.settingFolder === true;
            }
        }, {
            name: 'scriptsSrcFolder',
            message: 'Scripts source folder??',
            default: 'scripts',
            when: function(response) {
                return response.settingFolder === true;
            }
        }, {
            name: 'scriptsDestFolder',
            message: 'Scripts destination folder??',
            default: 'js',
            when: function(response) {
                return response.settingFolder === true;
            }
        }, {
            type: 'confirm',
            name: 'handlebars',
            message: 'Do you want use handlebars Template?',
            default: true
        }, {
            type: 'list',
            name: 'preprocessor',
            message: 'Which CSS preprocessor you will use?',
            choices: [{
                name: 'Stylus',
                value: 'stylus'
            }, {
                name: 'SASS',
                value: 'sass'
            }]
        }, {
        //     type: 'confirm',
        //     name: 'componentsCSS',
        //     message: 'Do you want use some basic CSS setings? Like paragraphs, titles, buttons ...'
        // }, {
            type: 'checkbox',
            name: 'options',
            message: 'Would you like to use?',
            choices: [{
                name: 'ECMAScript 6',
                value: 'es6',
                checked: true
            }, {
                name: 'Lint CSS',
                value: 'lintCSS',
                checked: false
            }, {
                name: 'Lint JS',
                value: 'lintjs',
                checked: true
            }]
        }, {
            type: 'checkbox',
            name: 'features',
            message: 'Do you want use some of these lib/plugin?',
            choices: [{
                name: 'jQuery',
                value: 'jquery',
                checked: true
            }, {
                name: 'Normalize.css',
                value: 'normalize',
                checked: true
            }, {
                name: 'OutdatedBrowser',
                value: 'outdatedBrowser',
                checked: true
            }]
        }, {
            when: function(response) {
                return response.features.indexOf('jquery') >= 0;
            },
            type: 'confirm',
            name: 'jqueryLogoDownloadtip',
            message: 'Want use jQuery Logo Downloadtip?',
            default: false
        }, {
            type: 'checkbox',
            name: 'files',
            message: 'Which files do you need?',
            choices: [{
                name: 'Readme',
                value: 'readme',
                checked: false
            }, {
                name: 'Contributing',
                value: 'contributing',
                checked: false
            }, {
                name: 'Changelog',
                value: 'changelog',
                checked: false
            }, {
                name: '404 page',
                value: '404',
                checked: false
            }, {
                name: '.htaccess (Apache Server Configs)',
                value: 'htaccess',
                checked: false
            }, {
                name: 'crossdomain.xml (Cross-domain policy)',
                value: 'crossdomain',
                checked: false
            }, {
                name: 'manifest.json(Chrome app info)',
                value: 'manifestJson',
                checked: false
            }, {
                name: 'manifest.webapp (Firefox OS app info)',
                value: 'manifestWebapp',
                checked: false
            }, {
                name: 'robots.txt (Instructions about their site to web robots)',
                value: 'robots',
                checked: false
            }, {
                name: 'humans.txt (Contains the information about humans to the web building.)',
                value: 'humans',
                checked: false
            }]
        }];

        //================== Get props ==================//
        return this.prompt(prompts).then(function (props) {
            this.props = {};

            this.props.project = {
                name: (props.projectName) ? _s.clean(props.projectName) : '{Project Name}',
                sanitizeName: (props.projectName) ? _s.clean(props.projectName) : 'project-name',
                slugName: (props.projectName) ? _s.slugify(_s.clean(props.projectName)) : '{project-name}',
                description: props.projectDescription,
                homepage: props.projectHomepage
            };

            this.props.githubUser = (props.githubUser) ? props.githubUser : '{Github User}';

            this.props.author = {
                name: _s.clean(props.authorName),
                email: _s.clean(props.authorEmail),
                homepage: _s.clean(props.authorHomepage)
            };

            this.props.preprocessor = {
                name: props.preprocessor,
                extension: (props.preprocessor === 'sass') ? 'scss' : 'styl'
            };

            this.props.folder = {
                src: props.srcFolder || 'src',
                dest: props.destFolder || 'app',
                build: props.buildFolder || 'build',
                bower: props.bowerFolder || 'bower_components',
                fonts: props.fontsDestFolder || 'fonts',
                sprite: props.spriteSrcFolder || 'sprite',
                images: {
                    src: props.imgSrcFolder || 'images',
                    dest: props.imgDestFolder || 'img'
                },
                styles: {
                    src: props.stylesSrcFolder || 'stylesheets',
                    dest: props.stylesDestFolder || 'css'
                },
                scripts: {
                    src: props.scriptsSrcFolder || 'scripts',
                    dest: props.scriptsDestFolder || 'js'
                }
            };

            this.props.use = {
                es6: props.features.indexOf('es6') >= 0,
                jquery: props.features.indexOf('jquery') >= 0,
                jqueryLogoDownloadtip: props.jqueryLogoDownloadtip,
                lint: {
                    js: props.features.indexOf('lintJS') >= 0,
                    css: props.features.indexOf('lintCSS') >= 0
                },
                normalize: props.features.indexOf('normalize') >= 0,
                outdatedBrowser: props.features.indexOf('outdatedBrowser') >= 0,
                handlebars: props.handlebars
            };

            this.props.include = {
                htaccess: props.files.indexOf('htaccess') >= 0,
                404: props.files.indexOf('404') >= 0,
                readme: props.files.indexOf('readme') >= 0,
                contributing: props.files.indexOf('contributing') >= 0,
                changelog: props.files.indexOf('changelog') >= 0,
                crossdomain: props.files.indexOf('crossdomain') >= 0,
                manifest: {
                    chrome: props.files.indexOf('manifestJson') >= 0,
                    firefox: props.files.indexOf('manifestWebapp') >= 0
                },
                robots: props.files.indexOf('robots') >= 0,
                humans: props.files.indexOf('humans') >= 0
            };
        }.bind(this));
    },

    // ====================== Copy settings files ======================//
    bower: function() {
        var bowerJson = require('./templates/_bower.json');

        bowerJson.name = this.props.project.sanitizeName;
        bowerJson.description = this.props.project.description;
        bowerJson.homepage = this.props.project.homepage;
        bowerJson.author.name = this.props.author.name;
        bowerJson.author.homepage = this.props.author.homepage;

        this.props.use.jquery && (bowerJson.devDependencies.jquery = '~2.0.0');
        this.props.use.jqueryLogoDownloadtip && (bowerJson.devDependencies['jquery-logo-downloadtip'] = '~2.0.0');
        this.props.use.outdatedBrowser && (bowerJson.devDependencies['outdated-browser'] = '^1.1.3');
        this.props.use.normalize && (bowerJson.devDependencies['normalize-css'] = '^4.2.0');

        this.fs.writeJSON('bower.json', bowerJson);

        this.fs.copyTpl(
            this.templatePath('bowerrc'),
            this.destinationPath('.bowerrc'), {
                folder: this.props.folder.dest + '/' + this.props.folder.bower
            }
        );
    },
    editorconfig: function() {
        this.fs.copy(
            this.templatePath('editorconfig'),
            this.destinationPath('.editorconfig')
        );
    },
    git: function() {
        this.fs.copy(
            this.templatePath('gitattributes'),
            this.destinationPath('.gitattributes')
        );

        this.fs.copy(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore')
        );
    },
    lint: function() {
        this.fs.copy(
            this.templatePath('csslintrc'),
            this.destinationPath('.csslintrc')
        );

        this.fs.copy(
            this.templatePath('eslintrc'),
            this.destinationPath('.eslintrc')
        );
    },
    package: function() {
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),{
                project: this.props.project,
                author: this.props.author,
                preprocessor: this.props.preprocessor
            }
        );
    },



    // ====================== Copy boilerplate files ======================//
    config: function() {
        this.fs.copyTpl(
            this.templatePath('config.json'),
            this.destinationPath('config.json'), {
                folder: this.props.folder,
                use: this.props.use
            }
        );
    },
    gulpfile: function() {
        this.fs.copyTpl(
            this.templatePath('gulpfile.js'),
            this.destinationPath('gulpfile.js'), { preprocessor: this.props.preprocessor }
        );
    },
    styles: function() {
        // if (this.props.componentsCSS) {
        //     this.fs.copy(
        //         this.templatePath('src/stylesheets/' + this.props.preprocessor + '/components/*'),
        //         this.destinationPath(this.props.folder.src + '/' + this.props.stylesSrcFolder + '/components')
        //     );
        // }
        this.fs.copyTpl(
            this.templatePath('src/stylesheets/' + this.props.preprocessor.name + '/**/*'),
            this.destinationPath(this.props.folder.src + '/' + this.props.folder.styles.src + '/'),
            { bower: this.props.folder.dest + '/' + this.props.folder.bower }
        );
    },
    scripts: function() {
        this.fs.copyTpl(
            this.templatePath('src/scripts/**/*'),
            this.destinationPath(this.props.folder.src + '/' + this.props.folder.scripts.src + '/'), {
                use: this.props.use
            }
        );
    },
    images: function() {
        this.fs.copy(
            this.templatePath('src/images/**/*'),
            this.destinationPath(this.props.folder.src + '/' + this.props.folder.images.src + '/')
        );

        this.fs.copy(
            this.templatePath('public/img/**/*'),
            this.destinationPath(this.props.folder.dest + '/' + this.props.folder.images.dest + '/')
        );
    },
    html: function() {
        if(this.props.use.handlebars){
            this.fs.copy(
                this.templatePath('src/html/**/*'),
                this.destinationPath(this.props.folder.src + '/html/')
            );
        } else {
            // this.fs.copyTpl(
            // this.templatePath('public/index.html'),
            // this.destinationPath(this.props.folder.dest + '/index.html'), {
            //     humans: this.props.files.indexOf('humans') >= 0,
            //     jquery: this.includeJquery,
            //     outdatedBrowser: this.includeOutdatedBrowser,
            //     jqueryLogoDownloadtip: this.props.jqueryLogoDownloadtip,
            //     normalize: this.includeNormalize,
            //     folder: this.props.folder
            // });
        }
    },
    header: function() {
        this.fs.copyTpl(
            this.templatePath('src/header-comments.txt'),
            this.destinationPath(this.props.folder.src + '/header-comments.txt'), {
                author: this.props.author,
                project: this.props.project
            }
        );
    },
    test: function() {
        this.fs.copy(
            this.templatePath('karma.conf.js'),
            this.destinationPath('karma.conf.js')
        );

        this.fs.copy(
            this.templatePath('spec/**/*'),
            this.destinationPath('spec/')
        );
    },
    vendors: function() {
        this.fs.copy(
            this.templatePath('src/vendors/**/*'),
            this.destinationPath(this.props.folder.src + '/vendors')
        );
    },


    // ====================== Copy optional Files  ======================//
    optionalFiles: function() {
    //     if(this.props.include.404) {
    //         this.fs.copy(
    //             this.templatePath('public/404.html'),
    //             this.destinationPath(this.props.folder.dest + '/404.html')
    //         );
    //     }
    // },
        if(this.props.include.htaccess) {
            this.fs.copy(
                this.templatePath('../../node_modules/apache-server-configs/dist/.htaccess'),
                this.destinationPath(this.props.folder.dest + '/.htaccess')
            );
        }

        if(this.props.include.readme) {
            this.fs.copyTpl(
                this.templatePath('README.md'),
                this.destinationPath('README.md'), {
                    project: this.props.project,
                    githubUser: this.props.githubUser
                }
            );
        }

        if(this.props.include.contributing) {
            this.fs.copy(
                this.templatePath('CONTRIBUTING.md'),
                this.destinationPath('CONTRIBUTING.md')
            );
        }

        if(this.props.include.changelog) {
            this.fs.copy(
                this.templatePath('CHANGELOG.md'),
                this.destinationPath('CHANGELOG.md')
            );
        }

        if(this.props.include.crossdomain) {
            this.fs.copy(
                this.templatePath('public/crossdomain.xml'),
                this.destinationPath(this.props.folder.dest + '/crossdomain.xml')
            );
        }

        if(this.props.include.manifest.chrome) {
            this.fs.copy(
                this.templatePath('public/manifest.json'),
                this.destinationPath(this.props.folder.dest + '/manifest.json')
            );
        }

        if(this.props.include.manifest.firefox) {
            this.fs.copy(
                this.templatePath('public/manifest.webapp'),
                this.destinationPath(this.props.folder.dest + '/manifest.webapp')
            );
        }

        if(this.props.include.robots) {
            this.fs.copy(
                this.templatePath('public/robots.txt'),
                this.destinationPath(this.props.folder.dest + '/robots.txt')
            );
        }

        if(this.props.include.humans) {
            this.fs.copy(
                this.templatePath('public/humans.txt'),
                this.destinationPath(this.props.folder.dest + '/humans.txt')
            );
        }
    },
    license: function() {
        this.composeWith('license', {
            options: {
                name: this.props.project.name,
                email: '',
                website: ''
            }
        }, {
            local: require.resolve('generator-license/app')
        });
    },


    // ====================== YO actions ====================== //
    save: function() {
        this.config.set(this.props);
        this.config.save();
        // this.installDependencies();
    }
});
