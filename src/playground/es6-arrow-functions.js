 function square(x) {
   return x * x
 }

 Prefered function
 const squareArrow = (x) => {
   return x * x
 }

 same as above without a return
 const squareArrow = (x) => x * x

 console.log(squareArrow(8));

 let fullName = 'Rob Stark'

 const getFirstName = (fullName) => {
   if (fullName) {
     const firstName = fullName.split(' ')[0]
     console.log(firstName);
   }
 }

 getFirstName(fullName)

 const getFirstName = (fullName) => fullName ? console.log(fullName.split(' ')[0]) : undefined;;

 getFirstName(fullName)

 Arrow Funtions 2

 const add = (a, b) => {
   return a + b
 }

 console.log(add(2, 3));

 const user = {
   name: 'rob',
   cities: ['Las Vegas', 'Odessa', 'la belle'],
   printPlacesLived: function() {
     const that = this;

     this.cities.forEach(function(city) {
       console.log(that.name + ' has lived in ' + city);
     })
   }
 }

 user.printPlacesLived()

 can use this
 const user = {
   name: 'rob',
   cities: ['Las Vegas', 'Odessa', 'la belle'],
   printPlacesLived() {

     const cityMessages = this.cities.map((city) => {
       return city
     })
     //  this.cities.forEach((city) => {
     //    console.log(this.name + ' has lived in ' + city);
     //  })
     return cityMessages
   }
 }

 console.log(user.printPlacesLived());

 const multiplier = {
   number: [2, 3, 4, 5, 6, 7],
   muliplyBy: 15,
   muliply() {
     return this.number.map((numbers) => numbers * this.muliplyBy)
   }
 }
 console.log(multiplier.muliply());
