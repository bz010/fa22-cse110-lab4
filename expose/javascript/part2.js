// Change between var, let, and const for different questions
function discountPrices(prices, discount){
    const discounted = [];
    //let finalPrice = 0;
    const length  = prices.length;

    for(let i = 0; i < length; i++){
        const discountedPrice = prices[i] * (1 - discount);
        //finalPrice = Math.round(discountedPrice * 100) / 100; // Q1-8
        //discounted.push(finalPrice); //Q1-8
        discounted.push(discountPrices); //Q9-11
    }

    // Change between different logs depends on the question
    //console.log(i);
    //console.log(length)
    //console.log(discountedPrice)
    //console.log(finalPrice);

    return discounted;
}

discountPrices([100, 200, 300], 0.5);

let student = {
    name: 'Sarah',
    major: "Computer Science",
    'Grad Year': '2022',
    greeting: function(){ console.log('Hello!');},
    'Favorite Teacher':{
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
console.log(student.name);
console.log(student['Grad Year']);
console.log(student.greeting());
console.log(student['Favorite Teacher'].name);
console.log(student.courseLoad[0]);