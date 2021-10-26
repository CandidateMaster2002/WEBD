const { create } = require("domain")
let fs=require("fs")

// read,create,update,delete

// #read 
//let buffer=fs.readFileSync("abc.js")
// #output file data in binary
//console.log("bin data",buffer)
// #concatenation will return file data in string
//console.log("bin data"+buffer)

//# create ( cretaes empty file )
//fs.openSync("ram.txt","w");

// #create and write
// fs.writeFileSync("shyam.txt","if file exists already --> clear all and write this,else cretae & write");

// #update
//fs.appendFileSync("ram.txt", "adds this line to end of file");


// #delete
//fs.unlinkSync("ram.txt");


// -------Directories-------------

// create,read,delete 

// #create
// fs.mkdirSync("meriDirectory");

//fs.writeFileSync("meriDirectory/meriFile.text","mera content");

// #read
// let content=fs.readdirSync("meriDirectory"); //content is array of strings
// console.log("content  "+content);
// for(let i=0;i<content.length;i++){
// fs.unlinkSync("meriDirectory/" + content[i]);
// }

// #delete
// fs.rmdirSync("meriDirectory")

// #existSync returns true if a file with input name exists
//console.log(fs.existsSync("abc.js"));

// # lstatSync has a feature which can tell if a path is file or folder
// let detailsObj=fs.lstatSync(__dirname+"\\intro.js")
// let isF=detailsObj.isFile();
// let isD=detailsObj.isDirectory();
// console.log(isF+ " " + isD);


