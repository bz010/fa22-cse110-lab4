### Expose Part 1

#Question 1:
Output: 

values added:  20

#Question 2:
Output: 

final result:  20

#Question 3:
Output: 

values added:  20

#Question 4:
Output Error: 

Uncaught ReferenceError ReferenceError: result is not defined

This is because let only allws variable declared limited to the scope of the block statement. Therefore, the result is not define out of the if statement block.

#Question 5:
Output Error:  

Uncaught TypeError TypeError: Assignment to constant variable.

This is because constant cannot be changed throughout the program. Once it set, the value will remain constant through the block.

#Question 6:
Output Error:  

First of all, the code exit with error by line 9. Also, because result is a constant defined in if statement block, it is not decleared in the else block. Therefore, it will return it is not defined even if no error by line 9.

