console.log("Starting Program")

for(let i=0; i<=6; i++){
    setTimeout(function(){
        console.log(i);
        console.log(`${i} is printed`) //just to showcase the use of event literal
    },i*2000);
}

