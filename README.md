# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

$\Theta$ bound for my implementation (and other mergesort implementations) is $\Theta$(nlog(n))
For my implementation this is because the outer loop works over arrays that double in size each loop
halfing the amount of time taken each loop, leading to a time complexity of log(n)
The inner loop takes linear time as it iterates over all elements of the array each pass
to compare and sort during the merge process.
Thus we do $\Theta$(n) work $\Theta$(log(n)) times, making the resulting time complexity:
$\Theta$(nlog(n))

ChatGPT helped write the code within the original mergesort function, specifically the idea of breaking our problem down to subarrays of size one and doubling at each step instead of the typical recursion of breaking the problem in half at each step. It also helped with some simple syntax stuff such as shifting the values in the array to make it in place. Having now completed almost all of the required programs for this class this seems like very trivial things to have needed aid for and I'm confident I could now complete this assignment with much less help, but wanted to be fully transparent about the help I received at the time of completion.

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.
