
 //removes the whitespaces at the end and start of the text.
    function removeSpaces(geek){
      return geek.trim();
    }
    let geek = " Geeks for geeks ";
    console.log(removeSpaces(geek));


//wite a function which takes a string and removes the whitespaces in between the string.
    function removeWhiteSpace(text){
        var newText = text.split(" ").join("");
        return newText
    }
    let text = "I am a student"
    console.log(removeWhiteSpace(text));



        //"first method"
//     class Students{
//         constructor(name,scores){
//             this.name=name;
//             this.scores=scores;
          
//         }
//     }
//     const student = [
//         {name:'agnes',scores:90},
//         {name:'mercy',scores:88},
//         {name:'kame',scores:85},
//         {name:'faith',scores:99}
//     ];
//     function compareByScore(a,b){ //it is a compare value that compares the  scores property of two objects.
//         return a.scores - b.scores;
// }
// student.sort(compareByScore);
//     console.log(student);
    
  
//          "Another method"
// class studentScores{
//         constructor(name,score){
//             this.name=name;
//             this.scores=score;
//         };
//     };
//     const studentScore = [
//          new studentScores('agnes',90),
//          new studentScores('mercy',80),
//          new studentScores('kame',70),
//     ];

// function sortedStudentScore(scores){                  //it is a compare value that compares the  scores property of two objects.
//      return scores .sort((a,b)=> a.score -b.score);
// };
// //  const sortScore = sortedStudentScore(studentScores);
//     console.log(sortedStudentScore(scores));

//
    function checkYear(year) {    // Check if the year is divisible by 4
        if (year % 4 === 0){         // If it's divisible by 100, it should also be divisible by 400 to be a leap year
            if (year % 100 === 0) {
                return year % 400 === 0;
            }
            return true;
        }
        return false;
    }
    let year = 2019
    console.log(checkYear(year))
    // function main() { 
    //     const year = 2000;   // Check if the given year is a leap year or not
    //     if (checkYear(year)) {
    //         console.log("Leap Year");
    //     } else {
    //         console.log("Not a Leap Year");    
    //     }      
    // };
     
    function divisibility(){
        for(var i=1 ;i<=100; i++){
           if( (i%3)===0 && (i%5)===0){
          console.log("fizzbuzz");
        }
          else if((i%3)===0){
        console.log("fuzz");
      }
         else if((i%5)===0){
          console.log("buzz");
         }
        else{
          console.log(i)
        };
      
      }};
      
      console.log(divisibility());



      function isServiceDue(mileage, lastServiceMileage) {
        const serviceInterval = 1000;                             // Service interval in miles
        const mileageDifference = mileage - lastServiceMileage; // Calculate the difference between the current mileage and the last service mileage
        if (mileageDifference >= serviceInterval) {        // Check if the mileage difference exceeds the service interval
            return true;                                     // Service is due
        } else {
            return false;                                   // Service is not due yet
        }
    }
    // Example usage:
    const currentMileage = 12000;                                        // Current mileage
    const lastServiceMileage = 10000;                                    // Mileage at the last service
    const serviceNeeded = isServiceDue(currentMileage, lastServiceMileage);
    if (serviceNeeded) {
        console.log("Service is due.");
    } else {
        console.log("Service is not due yet.");
    }

//Create a program that asks the user to input a temperature in Celsius. Your program should convert 
//the temperature to Fahrenheit then print the converted temperatures. and viseversa
function convertTemp(temp){
    let newTemp=(temp*9/5) + 32
    return newTemp
}
let temp = 10.0
console.log(convertTemp(temp))


function tempConvert(fahrenheit){
   let newFahreinheit=(fahrenheit-32)*5/9
    return newFahreinheit
}
let fahrenheit = 50.0
console.log(tempConvert(fahrenheit))





const tasks = [
    { name: 'praying', dueDate: Date.now() + 2 * 24 * 60 * 60 * 1000, urgency: 5 },
    { name: 'writing a report', dueDate: Date.now() + 1 * 24 * 60 * 60 * 1000, urgency: 3 },
    { name: 'completing assignments', dueDate: Date.now() + 3 * 24 * 60 * 60 * 1000, urgency: 4 },
    { name: 'doing group work', dueDate: Date.now() + 9 * 24 * 60 * 60 * 1000, urgency: 1},
  ];
  
  
  tasks.sort((a, b) => {
    if (a.dueDate !== b.dueDate) {
      return a.dueDate - b.dueDate;
    }
    return b.urgency - a.urgency;
  });
  
  
console.log('Prioritized Tasks:');
   tasks.forEach((task, index) => {
     console.log(`${index}. ${task.name} (Due: ${new Date(task.dueDate).toLocaleDateString()})`);
   }); 























