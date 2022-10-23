# Expose Part 2

### Question 1:
Output:

3

Because the only output by line 12 is console.log(i), which the output will be var i. i represent the length of the list of price which is 3. Therefore, it output 3 by line 12. And var can be access anywhere within the js.

### Question 2:
Output:

150

The program output 150 because at the end of the for loop, the var discounted price will be assigned with equation contains last element in prices list, which is prices[300] * (1-0.5). therefore, the discounted price is the last element's discounted price as that is the last assignment. And var can be access anywhere within the js.

### Question 3:
Output:

150

The final price is a variable defined out of the box, but it will round the discounted price to 2 decimal to push out. The last reassign to the final price is when the last discountedPrice was processed at the last recurssion of for loop, wich the last element in the prices list, 300. And discounted price processed it to 150. So the final price is the round of the latest discounted price. Therefore, it is 150. And var can be access anywhere within the js.

### Question 4:
Output:

(3) [50, 100, 150]

the function returned the new length of array as it add element to the finalPrice array. And the discounted pricese list because the function return the array. Therefore, the function return both the length of array and variables in the array.

### Question 5:
Output Error:

Uncaught ReferenceError ReferenceError: i is not defined

Error because the i is now set as a let, which is will only be declared limit to the scope of block for loop. Therefore, the program will see it as not defired when we try to call it outside of the for loop.

### Question 6:
Output Error:

Uncaught ReferenceError ReferenceError: discountedPrice is not defined

Error have same problem with i. Since discountedPrice is set as let, it will only be declared limit inside for loop. Therefore, the program will see it as not defired when we try to call it outside of the for loop.

### Question 7:
Output:

150

The finalPrice can be output correctly because this let was declared in the function block scope, so everything within the function can reassign value to it and call on it. After process the last element in the price list, the final price is 150 for the last recurssion of for loop.

### Question 8:
Output:

(3) [50, 100, 150]

The function will return discounted correctely because discounted is declared in the function block scope, so everything within the function can reassign value to it and call on it. So the function can return the value pushed from for loop to discounted with length and variables.

### Question 9:
Output Error:

Uncaught ReferenceError ReferenceError: i is not defined

Error because the i is now set as a let, which is will only be declared limit to the scope of block for loop. Therefore, the program will see it as not defired when we try to call it outside of the for loop.

### Question 10:
Output:

3

The length can be output correctly because length is assigned in the function to the length of list prices, which is 3. And since the value is never reassigned in the function block. Therfore, it is output correctly without an error.

### Question 11:
Output:

(3) [ƒ, ƒ, ƒ]

The function returned the right length as the number of push was called, but the variable within the functon is returned as false. This is because js will keep processing even if there is an error to prevent variable losses. Therefore, the function will still return. Since discountedPrice is a constant that was reassigned multiple time in the for loop. There should be an error. So the function returned an array of f as false variables.


### Question 12:
- A:
    - student.name;
- B
    - student['Grad Year'];
- C
    - student.greeting();
- D
    - student['Favorite Teacher'].name;
- E
    - student.courseLoad[0];

### Question 13:
- A:
    - 32  
    - Because '3' is string and 2 is integer which map to string and plus sign makes both combine to make new string. Determined by first variable.
- B:
    - 1   
    - Because minus sign is operator for math so string '3' convert to integer and 2 is integer which makes it 3 - 2 = 1.
- C:
    - 3   
    - Because null convert to 0 in numeric. So  3 + 0 = 3
- D:
    - 3null   
    - Because '3' is a string in this case and null is convert to string. Both string combined togeter as 3null.
- E:
    - 4   
    - Because true is convert to numeric 1, so 1 + 3  = 4.
- F:
    - 0   
    - Because false is mapped to numeric 0 and null is also numeric 0. So both conversion is 0 makes it 0 + 0.
- G:
    - 3undefined  
    - Because '3' is a string, and undefined will be convert to string. Both string combined by plus sign, making it 3undefined.
- H:
    - NaN     
    - Because minus sign makes this math equation, 3 is convert to an integer and undefined convert to NaN. Since undefuned cannot be convert to a integer, the output becomes NaN.

### Question 14:
- A:
    - true    
    - Because string 2 convert to int 2 and 2 is bigger than 1
- B:
    - false   
    - Because first character of string '2' convert to 2, which is geater than the first character in string '12', which is 1. 2 > 1.
- C:
    - true    
    - Because string '2' will be convert to numeric 2, and int 2 is same as numeric 2.
- D:
    - false   
    - Because strict equality must have same type on both side. So different types of variable(int and string) from both side lead to false.
- E:
    - false   
    - Because the numeric conversion of true is 1, and integer 2 will still be 2 after convert to number. int 1 is not equal to 2, so it return false
- F:
    - true    
    - Because boolean() function will turn all symbols into true , so boolean(2) will be equal to boolean true, which have the same type and same boolean on both side of the strict equality operator.

### Question 15

'==' operator will do type conversion of the variable on both side before the comparison, while the "===" operator will compares the value and data type of the variable on both side.

### Question 16
Answer within part2-question16.js

### Question 17
The function will return:
(3) [2, 4, 6]

When the function get called at first place, the two domain we input are an array and the name of another function. The modify Array function first create a constant array called newArr, then in the for loop, the function will recurring for every element in the domain array. 

Within every reaccurance, the newArr will call the function in domain, which is doSomething. Then, the element at the index i in the list, array[i], will become the domain input for the function.

The function doSomething will have the domain of (array[i]), the domain will be * 2, which double itself. Then the new number that's double the original element value got returned.

The number returned by the doSomething function will be pushed into the newArr. And this process will be repeated until element in the array are processed.

After all elements are processed, the function will return the array. The push function will also return the length of the array. 
Therefore, the function return the modified array with array length and double of each element within the array.

### Question 18
Answer within part2-question18.js

### Question 19
The function will output:
1 <br>
4 <br>
3 <br>
2 <br>

In the aboce order, because when the function was called, it will first call on log(1), then it set timeout of 1 second on log(2), then set a timeout of 0 on log(3). Since both log(2) and log(3) have timeout, the program will process log(4) the next without the timeout.
The program then process the one that have the least value in timeout, so program process log(3). After 1 second, the program process log(2) as timeout finishes.

