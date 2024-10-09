let n = 1;
let space = 0;
for(let i = 9; i >= 0; i--) {
    let value = "";
    let sp = "";
    if(i % 2 == 0) {
        for(let j = 1;j <= i + 1; j++) {
            value += j + " ";     
         }
        for(let k = 0; k  < space; k++) {
           sp += "  ";
        }
        console.log(sp + value);
        space++;
    }
}