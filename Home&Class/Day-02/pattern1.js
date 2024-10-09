let n = 1;
let space = 4;
for(let i = 0; i < 9; i++) {
    let value = "";
    let sp = "";
    if(i % 2 == 0) {
        for(let j = 1;j <= n; j++) {
            value += j + " "     
         }
        for(let k = 0; k  < space; k++) {
           sp += "  ";
        }
        console.log(sp + value);
        space--;
    }
    n++;
}