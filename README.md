# react-dev-tools
#### By: Robby Emmert
<http://robbyemmert.com>

Nice tools for building react and ES6 web apps.

## Features:
- Fast ES6 and JSX compiling with webpack.
- Fast, Ruby-free Sass compiling with node-sass (gulp-sass).
- Accurate and helpful source maps (JS debug tools work with ES6).
- gulp watch acknowledges file adds and deletes.
- Totally not opinionated - hack to your heart's content.

## Install
1. `cd` into your project folder.
2. If your project doesn't have a git repo, make one with `git init`.
3. Link to this git repo: `git remote add devtools`. git@github.com:robbyemmert/react-dev-tools.git`
4. Pull the latest version of the dev tools: `git fetch devtools`.
5. Merge it in to your project and fix any merge conflicts: `git merge devtools`. CAUTION: you might want to do this on a test branch if you have an existing project (`git branch -b react-dev-tools`).
6. Make any changes you want to package.json, LICENSE, and README to reflect your own project.
7. Party on dudes.

## Use
react-dev-tools uses gulp for the most part.  If you don't already have it, you can get it with `npm install -g gulp`.  Pick the tasks that best suit your workflow.  Also check the actual gulpfile.js for the complete list as only the most relevant are here.

### Gulp Task Reference
`gulp build`: Builds your project, sending the output to the `dist/` folder.

`gulp watch`: runs `gulp-build`, then watches for any relevant file system changes in the `src` folder, re-building whatever changed.  For example, if you update a `.js` file, only the JavaScript will get re-built, if you update a `.scss` file, only Sass will get re-built, etc.

`gulp js`: build only the JavaScript.

`gulp styles`: build only the Sass/css.

`gulp index`: build only the index.html file.

`gulp assets`: copy the assets folder to dist.
