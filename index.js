const fs=require("fs");

function searchInFile(file,word){
    const dt=fs.readFileSync(file,"utf-8");
    var arr=dt.split(/\r?\n/);
    var found=false;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i].includes(word)){
            console.log("line number: "+(i+1));
            found=true;
        }
    }
    if(found==false){
        console.log(-1);
    }
}
searchInFile("notes.txt","sidharth");
searchInFile("notes.txt","sanket");