This is some fun coding

https://greggelong.github.io/shiffmanSnake/

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

 
 ## play it live

 remember you don't die yet!!!

 just enjoy watching a snake satisfying it's hunger

 and getting longer.
 

 https://greggelong.github.io/shiffmanSnake/

 for manual play use i,k,j,l

 click only random for random walk auto play

 click only smart for smart auto play

 (if both random and smart it will be smart )

## working on two snakes

made a branch twosnake, where I have changed the snake class

the two snakes compete for the food but it is rather boring


-----

##  August 27- onward

working on a non object oriented versions of the snake game

the topic captured my interest after the coding train did the 

"what was coding like 40 years ago"  

Daniel did a version in applesoft basic that was really elegant

I have made two less elegant versions to better understand the moving the snake in the array

I have a 

butt first version that Daniel uses

https://greggelong.github.io/shiffmanSnake/buttFirstSnake/

and I have a 

head first version that seems more natural to me

https://greggelong.github.io/shiffmanSnake/headFirstSnake/

I have coded them with characters the snake counts its body parts 


I hope to make a c64 version 

but the c64 handles x y coords in a different way than apple so

just a bit more math and I will poke screen graphics not  print text to the screen

