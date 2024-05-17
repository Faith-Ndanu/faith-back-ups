//question1
function peopleAboveAge(people){
    return people.filter(c=>c.age >= 18).map(c=>c.name);
  };
const people =[{ name: 'Alice', age: 17 },
{ name: 'Eunice', age: 22 },
{ name: 'Charlie', age: 14 },
{ name: 'Max', age: 19 },];
console.log(peopleAboveAge(people));


//question 2
function sortProducts(products){
  return products.reduce((acc, product) => {
      if (!acc[product.category]) acc[product.category] = [];
      acc[product.category].push(product);
      return acc;
  }, {});
};

const products=[
{ name: 'Laptop', price: 1200, category: 'Electronics' },
{ name: 'Shirt', price: 25, category: 'Clothing' },
{ name: 'Headphones', price: 80, category: 'Electronics' },
{ name: 'Shoes', price: 60, category: 'Clothing' },
];

console.log(sortProducts(products))

//question3

const students = [
{ name: 'John', scores: [90, 80, 85] },
{ name: 'Jane', scores: [95, 92, 88] },
{ name: 'Jim', scores: [70, 80, 75] },
{ name: 'Jill', scores: [85, 90, 84] },
];
function getStudentByAverage(students) {
  return students.filter(student=>{
    const averageScore = student.scores.reduce ((sum,score)=> sum + score,)/student.scores.length;
    return averageScore >= 85;
   }).map(student=>student.name);

  }
  console.log(getStudentByAverage(students))


//question4
function carNewAge(car){
  car["age"]=(2024-car.year)
  console.log(car)
}
const car ={
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};
carNewAge(car)


//question2
 function sortProducts (product) {
  const productResult = { Clothing: [], Electronics: []};
  for (i = 0; i < product.length; i++){
    let Electronics = product[i];
    if (Electronics.category === 'Electronics'){
     productResult.Electronics.push (Electronics);
  }
  }
   for (i = 0; i < product.length; i++){
   let Clothing = product[i];
     if (Clothing.category === 'Clothing'){
      productResult.Clothing.push (Clothing);
    }
  }
   return productResult;
 }
 console.log(sortProducts(products))




