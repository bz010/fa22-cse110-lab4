### Expose Part 2

#Question 1:
Output:

3

Because the only output by line 12 is console.log(i), which the output will be var i. i represent the length of the list of price which is 3. Therefore, it output 3 by line 12. And var can be access anywhere within the js.

#Question 2:
Output:

150

The program output 150 because at the end of the for loop, the var discounted price will be assigned with equation contains last element in prices list, which is prices[300] * (1-0.5). therefore, the discounted price is the last element's discounted price as that is the last assignment. And var can be access anywhere within the js.

#Question 3:
Output:

150

The final price is a variable defined out of the box, but it will round the discounted price to 2 decimal to push out. The last reassign to the final price is when the last discountedPrice was processed at the last recurssion of for loop, wich the last element in the prices list, 300. And discounted price processed it to 150. So the final price is the round of the latest discounted price. Therefore, it is 150. And var can be access anywhere within the js.

#Question 4:
Output:

(3) [50, 100, 150]

the function returned the new length of array as it add element to the finalPrice array. And the discounted pricese list because the function return the array. Therefore, the function return both the length of array and variables in the array.

#Question 5:
Output Error:

Uncaught ReferenceError ReferenceError: i is not defined

Error because the i is now set as a let, which is will only be declared limit to the scope of block for loop. Therefore, the program will see it as not defired when we try to call it outside of the for loop.

#Question 6:
Output Error:

Uncaught ReferenceError ReferenceError: discountedPrice is not defined

Error have same problem with i. Since discountedPrice is set as let, it will only be declared limit inside for loop. Therefore, the program will see it as not defired when we try to call it outside of the for loop.

#Question 7:
Output:

150

The finalPrice can be output correctly because this let was declared in the function block scope, so everything within the function can reassign value to it and call on it. After process the last element in the price list, the final price is 150 for the last recurssion of for loop.

#Question 8:
Output:

(3) [50, 100, 150]

The function will return discounted correctely because discounted is declared in the function block scope, so everything within the function can reassign value to it and call on it. So the function can return the value pushed from for loop to discounted with length and variables.

#Question 9:
Output: