This is some fun coding

just to keep me thinking procedurally after all the prolog

and to have some practice not putting a full stop after

each line of code.

I am following coding challenge 3 from Daniel Shiffman

from the coding train.  But I am updating it to use Classes

and switch cases, as well a some other small changes 

https://youtu.be/AaGK-fj-BAM

I stated coding on replit and even created this github repo

there. watching youtube in the browser and running replit in 

the browser was making my computer hot and laggy not to mention

some disruptions from my vpn (coding in Beijing)

so now am continuing in vs Code.

## just saw that Shiffman also did this a second time

https://youtu.be/OMoVcohRgZA


## python version

https://youtu.be/M_npdRYD4K0

and here is a cool version using python curses for terminal

the snake in the python code is not an object just a list of

tuples holding x and y coordinates and using the list function 

insert to put the head at the zero index.

unshift works the same way in javascript 


## differences in my code and Shiffman's code

in addition to updating to Classes and switch cases 

(he actually in a later coding challenge updated to classes)

my code implements the snake array differently.  

I use unshift and pop always keeping the head of the snake at index 0 of the array

Shiffman had the head at the last index of the array.

This having the head at index zero just seems more intuitive.


## It's alive

I have also made the first attempts at the snake play itself

I have two dom checkboxes:

one for random walk

one for smart walk

Smart walk will quickly grow the snake and it really appears to be seeking 

the food.  It however does not check for hitting it's own body

so it can easily grow.  

This smart behavior is just checking if the food is above, below,

left or right of the head of the snake. (a bit like Braitenberg vehicle)

I hope to add another function so it first seeks the food

but avoids it's own body.
 
 (that will be harder than it looks, if you only check neighbors you can get caught it
 
 a trap pretty easily i think )

 


