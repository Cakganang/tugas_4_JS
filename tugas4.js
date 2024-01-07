let sofia = 42
let zia = 45
let sonny = 43

let satu = 0
let dua = 0
let tiga = 0

function fungsi() {
    if(sofia>zia){
        if(sofia>sonny){
        console.log("sofia paling tinggi");
        satu = sofia;
    }else{
        console.log("sofia paling tinggi kedua");
        dua = sofia;
    }
    }else{
        if(sofia<zia){
            console.log("sofia paling rendah kedua");
            tiga = sofia;
        }else{
            console.log("sofia paling rendah");
            dua = sofia;
        }
    }
}

fungsi();