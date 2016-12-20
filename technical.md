https://github.com/babel/karma-babel-preprocessor

babel and karma-babel-preprocessor only convert ES6 modules to CommonJS/AMD/SystemJS/UMD. If you choose CommonJS, you still need to resolve and concatenate CommonJS modules on your own. We recommend karma-browserify + babelify or webpack + babel-loader in such cases.



# Documentation as code