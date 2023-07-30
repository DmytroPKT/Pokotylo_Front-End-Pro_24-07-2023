let start = 10
let end = 20
let str = ''


do {
    if (start === end){
        str += `${start**2}.`;
        break;
    }
    str += `${start**2}, `;
    start ++;
} while(start <= end);
console.log(str);