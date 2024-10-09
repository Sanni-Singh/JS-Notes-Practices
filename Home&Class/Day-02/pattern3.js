let n = 9;
let cnt = 1;
for(let i = 0; i < n; i++) {
    let value = "";
    for(let j = cnt; j > 0; j--) {
        value +=j + " ";
    }
    console.log( value );
    if(i < n/2-1) {
        cnt++;
    }
    else {
        cnt--;
    }
    
}