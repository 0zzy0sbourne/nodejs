// GLOBALS

// __dirname -->  path to current directory
// __filename --> file name 
// require --> function to use modules
// module --> info about the current module 
// process --> info about the env where the program is being executed

const os = require("os")
const path = require("path")

const user = os.userInfo(); 
const currentOS = {
    name: os.type(), 
    release: os.release(), 
    totalMem: os.totalmem(), 
    freeMem: os.freemem(),
    architecture: os.arch(), 
    cpus: os.cpus()
}
console.log(currentOS)

const {me, my_friend} = require("../my_modules/person_modules")
// console.log(me)