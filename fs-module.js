const fs = require("fs");

//sync
let first = fs.readFileSync("./Content/first.txt","utf8");
let second = fs.readFileSync("./Content/second.txt","utf-8");

fs.writeFileSync("./Content/third.txt",`Hello there!\nThis is CodeHunter\n`);
fs.writeFileSync("./Content/third.txt",`${first}${second}\n`,{flag : 'a'});

//async
fs.readFile("./Content/first.txt","utf8",(err,res)=>{
    if(err){
        console.log(err);
        return ;
    }
    let ft=res;
    fs.readFile("./Content/second.txt","utf-8",(err,res)=>{
        if(err){
            console.log(err);
            return ;
        }
        let st=res;
        fs.writeFile("./Content/third.txt",`Hello There!\nThis is CodeHunter again!\n`,{flag:"a"},(err)=>{
            if(err){
                console.log(err);
                return;
            }
        })
    })
})