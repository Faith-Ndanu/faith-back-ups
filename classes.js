//Question 1
class Car{
    constructor(make,model,year,isAvailable){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable
    }
    toggleAvailability(){
        this.isAvailable=!isAvailable
    }
}
    const car1= new Car('mazda','Demio',2020,true);
    console.log(car1.isAvailable);


class Rental{
    constructor(car,startDate,endDate,renterName){
        this.car=car;
        this.startDate=startDate;
        this.endDate =endDate;
        this.renterName = renterName
    }
    calculateRentalDuration(){
        const start = new Date(this.startDate);
        const end = new Date(this.endDate)
        const duration = Math.abs(end-start)
        return Math.ceil (duration/(1000*60*60*24));
    }
}
const carInstance = new Car("Toyota","Camry",2020);
const startDate = new Date("2024-04-25");
const endDate = new Date ("2024-05-22")
const rentInstance =new Rental(carInstance,startDate,endDate)
const timeDuration =rentInstance.calculateRentalDuration()
console.log("Rent duration",timeDuration,"days")





//Question 2
class Questions{
    constructor(text,options,correctAnswer){
    this.text = text;
    this.options= options;
    this.correctAnswer= correctAnswer;
    }
    checkCorrectAnswer(myAnswer){
        return myAnswer===this.correctAnswer
    }
}
const question1 = new Questions(
    "Which year was AkiraChix founded"
    ["2010","2014","2020"],
    "2010"
)
console.log(question1.checkCorrectAnswer("2010"))
console.log(question1.checkCorrectAnswer("2014"))












