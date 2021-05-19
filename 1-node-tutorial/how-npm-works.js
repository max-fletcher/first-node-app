// npm - global command, comes with node
// npm --version OR npm -v

// local dependency - use it only in this particular project
// npm i <packagename>

// to install a node module as a dev dependency(i.e it will be used to test stuff and not be used in production
// i.e laravel scout)
// npm i <packagename> -D OR --save-dev
// Anything that is installed as a dev dependency can have an accompanying script command
// inside package.json, the scripts array will contain commands that will start the execution of a certain file/script
// "start" : "node app.js" executes app.js using cmd. Its basically a shortcut command. "dev" : "nodemon app.js"


// global dependency - usee it in any project
// npm install -g <packagename>
// sudo install -g <packagename> (mac)
// Its never a good idea to install anything globally since there is always collision between the package files. Either
// use npx or install locally

// package.json -manifest file (stores important info about project/ package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm uninstall <packagename> - uninstall package
// another way(the nuclear way) to uninstall npm packages is by following the steps:
// 1. Delete the "node_modules" folder
// 2. Delete the "package-lock.json" file
// 3. Remove the line responsible for the package inside "package.json" (either in the dependencies or devDependencies array)
// 4. run "npm install" again

// package-lock.json is a file that determines version compatibility. If a package/dependency uses a particular version
// of another package/dependency, then that makes sure the right versions are used so that the it doesn't break.

const lodash = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = lodash.flattenDeep(items)
console.log("Simplified Array due to flattenDeep Method from lodash")
console.log(newItems)