import process from 'process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

    // const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);
// console.log(__dirname);


var args = process.argv;
// console.log("Current directory:", process.cwd());
const __dirname = process.cwd();
// console.log(__dirname);


function execute(choice){
    // console.log("hey");
    switch(choice){
        case '0': 
            if (choice == '0')
            menu();
        case '1': 
            if (choice == '1'){
                createFolder(args[3])
                menu();
            }
            break;
        case '2':     
            if (choice == '2'){
                deleteFolder(args[3]);
                menu();
            }

        case '3': 
            if (choice == '3')
           {
            getCurrentFilenames(__dirname);
            menu();
           }
        case '4': 
            if (choice == '4')
            {
                renameFolder(args[3],args[4]);
                menu();

            }
        case '5': 
            if (choice == '5'){
                createFile(args[3]);
                menu();

            }
        case '6': 
            if (choice == '6'){
                deleteFile(args[3]);
                menu();

            }
        case '7': 
            if (choice == '7'){
                editFile(args[3],args[4],args[5]);
                menu();

            }
        case '8': 
            if (choice == '8'){
                move(args[3],args[4]);
                menu();

            }
        case '9': 
            if (choice == '9'){
                copy(args[3],args[4]);
                menu();

            }
            // if (choice == "deleteFolder")
            // createFolder()
            // break;
           

    //     case '2':
    //         if ()
    }
}

function getCurrentFilenames() {
    console.log("\nCurrent folder contains");
    fs.readdirSync(__dirname).forEach(file => {
      console.log(file);
    });
    console.log("\n");
  }

function createFolder(fname){
   if( !fs.existsSync(fname)){
        fs.mkdirSync(fname);
    };
}

function deleteFolder(fname){
    if( fs.existsSync(fname)){
        fs.rmdir(fname,{
            recursive: true,
          }, () => {
            console.log("Folder Deleted!");});
    };
}

function renameFolder(fname,newname){
    if(fs.existsSync(fname)){
        fs.renameSync(fname,newname)
    }
}


function createFile(fname){
    if(!fs.existsSync(fname)){
        fs.writeFileSync(fname, "" )
    }
    console.log("File created successfully");
}

function deleteFile(fname){
    fs.rm(fname, { recursive:true }, (err) => {
        if(err){
            // File deletion failed
            console.error(err.message);
            return;
        }
        console.log("File deleted successfully");
    })
}  

function editFile(fname, oldData, newData){
    fs.readFile(fname, 'utf8', function(err, data){

        var newValue = data.replace(oldData, newData);
        
        fs.writeFile(fname, newValue, function(){
        console.log(newValue);
        });
        
        });
        
        console.log('You have modified the file ');
}


function move(src ,dest){
    fs.rename(src, dest, (err) => {
        if (err) return console.log(err);
        console.log(`File successfully moved!!`);
      });
}

function copy(src ,dest){
    fs.cp(src, dest, { recursive: true }, (err) => {
        if (err) {
          console.error(err);
        }
      });
}
// console.log("number of arguments is "+args.length); 
// args.forEach((val, index) => {
//     console.log(`${index}: ${val}`); 
// });
// console.log(args);
if(args.length >2){
    execute(args[2]);
}

function menu(){
    console.log("0: List menu");
    console.log("1: create folder foldername");
console.log("2: delete folder foldername");
console.log("3: List current directory");
console.log("4: rename folder");
console.log("5: create file");
console.log("6: delete file");
console.log("7: edit file");
console.log("8: move");
console.log("9: copy");

};







