[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/26dp6wek)
# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

The time complexity of my function would be $\Theta(n)$. This implementation is
made of 3 functions. The function that is called is doThing which calls the 
checkAsync function, but doesnt have any other relevant processes for asymptotic 
analysis. The checkAsync function uses the map function to iterate over the 
entire array which results in a runtime of n. It also calls the numCheck function,
but this runs in constant time so it doesnt impact the asymptotic complexity either. 
The final peice is the for loop which condenses the values in the results array into
one total which runs over the full array once. This works because a one is stored 
in the promise.all when the key is equal to the number in the original array. So our
total complexity is n+n or $\Theta (n)$.
