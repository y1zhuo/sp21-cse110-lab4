Part 1a. A Quick Introduction...

var declaration

1. 20
2. 20

let declaration

1. 20
2. code returns an error because variable 'result' is declared inside the block scope of the if statement
   
const declaration 

1. code returns an error because variable with the const prevents it from being reassigned after it is assigned for the first time
## Part 1b. A Little More of a Challenge...

1. line 12 will print 3, because var provides the variable with function scope. This means that regardless of the block it is defined in, it can be accessed anywhere inside the function it is defined in. And print 3 because the for loop goes from 0 to 3.
2. line 13 will print 150, because 'discountedPrice' is assigned the last discountedPrice, which is 300 * (1-0.5) = 150
3. line 13 will print 150, because this line of code is going to round the final price into 2 decimal places. Since 150 is an integer, the result is 150.
4. It will return an array that contains all finalPrices because we declare the array at line 3 and push all finalPrices into it at line 9, so we can return an array with all finalPrices.
5. The code will return an error, because let provides the variable with block scope. variable 'i' is declared in the for loop.
6. The code will return an error, because variable 'discountedPrice' is declared in the for loop.
7. It will print 150, because variable 'finalPrice' is declared in this function scope.
8. It will return an array that contains all finalPrices, because variable 'discounted' is declared in this function scope.
9. The code will return an error, because variable 'i' is declared in the for loop.
10. It will print 3, because variable 'length' is declared in this function scope.
11. It will return a constant array that contains all finalPrices, because variable 'discounted' is declared in this function scope.
12. A. student.name;
    B. student['Grad Year'];
    C. student.greeting();
    D. student['Favorite Teacher'].name;
    E. student.courseLoad[0];
13. A. 32, because 2 maps to '2', so the result = '3' + '2' = '32'
    B. 1, because '3' maps to 3, so the result = 3 - 2 = 1
    C. 3, because null maps to 0, so the result = 3 + 0 = 3
    D. 3null, because null maps to 'null'. so the result = '3' + 'null' = 3null
    E. 4, because true maps to 1, so the result = 1 + 3 = 4
    F. 0, because false maps to 0 and null maps to 0, so the result = 0 + 0 = 0
    G. 3undefined, because undefined maps to 'undefined', so the result = '3' + 'undefined' = '3undefined'
    H. NaN, because null maps to NaN, so the result = 3 - NaN = NaN
14. A. true, because '2' maps to 2, so 2 > 1 is true
    B. false, because '2' < '12' is false
    C. true, because '2' maps to 2, so 2 == 2 is true
    D. false, because 2 and '2' are different types
    E. false, because true maps to 1, so 1 == 2 is false
    F. true, because Any object of which the value is not undefined or null, including a Boolean object whose value is false so that Boolean(2) results in true. Thus, true === true is true.
15. Operands of different types are converted to numbers by the equality operator == while a strict equality operator === checks the equality without type conversion.
16. The codes are part1b-question16.js
17. The result of this function is return the newArr = [2,4,6], because function 'modifyArray' call a callback function 'doSomething', and function 'doSomething' return the value of double the elements in the array.
18. The codes are part1b-question18.js
19. The output is 1 4 3 2. We know that the callback function calling by setTimeout executes after this function(printNums).