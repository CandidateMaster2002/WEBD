function organizeFn(dirPath) {

    // 1. input -> directory path given
    let destPath;
    if (dirPath == undefined) {

        //This method returns a string specifying the current working directory of the node.js process.
        destPath = process.cwd();
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {

            // 2. create -> organized_files -> directory
            destPath = path.join(dirPath, "organized_files");
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }

        } else {

            console.log("Kindly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
    // 3. identify categories of all the files present in that input directory  ->
}
function organizeHelper(src, dest) {
    // 3. identify categories of all the files present in that input directory  ->
    let childNames = fs.readdirSync(src);
    // console.log(childNames);
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            // console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            //console.log(childNames[i], "belongs to --> ", category);
            // 4. copy / cut  files to that organized directory inside of any of category folder 
            sendFiles(childAddress, dest, category);
        }
    }
}
function sendFiles(srcFilePath, dest, category) {

     //first an empty file is created in destination path (Step1)
    //And then contents of file is copied to this empty file using copyFileSync(Step2) 
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
     // On Windows: path.basename('C:\\temp\\myfile.html'); Returns: 'myfile.html'
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName); 
    fs.copyFileSync(srcFilePath, destFilePath); // if exists,overwrite,else creates and write
    //delete
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);

}
function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1); //utitlity object,values are not starting with .
    for (let type in types) {
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }
    }
    return "others";
}
module.exports = {
    organizeKey: organizeFn
}