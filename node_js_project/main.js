#!/usr/bin/env node


// The process.argv property returns an array containing the command-line arguments passed ,
//when the Node.js process was launched. 
// The first element will be process.execPath.
// The second element will be the path to the JavaScript file being executed. 
// The remaining elements will be any additional command-line arguments.

// The slice() method returns selected elements in an array, as a new array.
// slice() selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

let inputArr=process.argv.slice(2); //output starts from index=2
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");

// console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help
let command = inputArr[0];
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
switch (command) {
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please 🙏 Input Right command");
        break;
}
