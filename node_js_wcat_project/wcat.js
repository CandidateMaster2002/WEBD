
#!/usr/bin/env node

fs=require("fs")

let inputArr=process.argv.slice(2)
let optionsArr=[]
let   filesArr=[]
for(let i=0;i<inputArr.length;i++){
    if(inputArr[i].charAt(0)=='-')
    {
        optionsArr.push(inputArr[i])
    }
    else{
        filesArr.push(inputArr[i])
    }
}

for(let i=0;i<filesArr.length;i++){
    if(fs.existsSync(filesArr[i])==false)
    {
        console.log("file not found")
        return;
    }
}

let content=""
for(let i=0;i<filesArr.length;i++){
    content+=fs.readFileSync(filesArr[i])+"\n"
}

console.log(content)

 
