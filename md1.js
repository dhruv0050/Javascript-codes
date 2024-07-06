// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


let stud_name=["alpha","beta kumar","gamma","delta singh","omega khan","psu preet","double"]
let houses=[]

for (const stud of stud_name) {
    if(stud.length<6){
        houses.push("Gryffindor")
    }
    else if(stud.length<8){
        houses.push("Hufflepuff")
    }
    
    else if(stud.length<12){
        houses.push("Ravenclaw")
    }
    
    else{
        houses.push("Slytherin")
    }
}
console.log(stud_name,houses)

