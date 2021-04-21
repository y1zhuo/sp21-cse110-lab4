Part 1a. A Quick Introduction...

var declaration
1. 20
2. 20
let declaration
1. 20
2. code returns an error because variable 'result' is declared inside the block scope of the if statement
const declaration 
1. code returns an error because variable with the const prevents it from being reassigned after it is assigned for the first time
2. code returns an error because this variable the same scope as the let keyword
   
Part 1b. A Little More of a Challenge...

1. line 12 will print 3, because var provides the variable with function scope. This means that regardless of the block it is defined in, it can be accessed anywhere inside the function it is defined in. And print 3 because the for loop goes from 0 to 3.
2. line 13 will print 150, because 'discountedPrice' is assigned the last discountedPrice, which is 300 * (1-0.5) = 150
3. line 13 will print 150, because this line of code is going to round the final price into 2 decimal places. Since 150 is an integer, the result is 150.
4. It will return an array that contains all finalPrices because we declare the array at line 3 and push all finalPrices into it at line 9, so we can return an array with all finalPrices.
5. code returns an error, because let provides the variable with block scope.
6. 