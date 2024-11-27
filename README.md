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

I used the lecture material, as well as a previous mergesort I had worked with as a base
for my code and had chatGPT's help adjusting it to work in place.

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.
