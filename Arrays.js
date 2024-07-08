// Use of forEach()
arr = [1, 2, 3, 4, 5, 6];
arr.forEach(element => {
    console.log(element + "Hell");
});

// Use of map()
var newarr = arr.map(element => {
    return element + 4;
});
console.log(newarr);

// Use of filter()
xarr = [1, 2, 3, 'D', 'H', 'R', 'U', 'V'];
var narr = xarr.filter(element => {
    if (typeof element == 'string') {
        return true;
    }
});
console.log(narr);

// Use of find()
const foundElement = arr.find(element => {
    if (element == 2) {
        console.log("Present");
        return true;
    } else {
        console.log("Not Present");
        return false;
    }
});
console.log(foundElement);


var ans=arr.find(element =>{
    if(element==2){
        console.log("Present")
        return true;
    }
    else{
        console.log("Not Present")
        return false
    }
})
console.log(ans)

console.log(`Index of 5 in arr is ${arr.indexOf(5)}`)
console.log(`Index of letter D in xarr is ${xarr.indexOf('D')}`)
