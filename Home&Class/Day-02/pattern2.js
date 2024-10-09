let space = 4;
let n = 9;
let cnt = 1;
// let scope = 9;
for(let i = 0; i < n; i++) {
    let value = "";
    for(let j = 1; j <= cnt; j++) {
        value +=j + " ";
    }
    let sp = "";
    for(let k = 0 ; k < space; k++) {
        sp +="  ";
    }
    console.log(sp + value );
    if(i < n/2-1) {
        cnt++;
        space--;
    }
    else {
        cnt--;
        space++;
    }
    
}