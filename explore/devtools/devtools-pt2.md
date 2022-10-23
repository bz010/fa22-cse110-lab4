# DevTool Part 2

### Quetion 1

The bug is that for the explore inputs, after input First and Second number and click "calculate", the js should return sum of the First number and Second number by add them out. 
However, the program return a string that combine First Number and Second Number as a string. So instead of 1 + 2 = 3, it takes input as String so "1" + "2" = "12".

### Question 2

I used parseFloat() at line 11 for both num1 and num2 so they are both turned into a float number for calculation. Two numbers will add up to result as a number. Specific fix in fix.png
