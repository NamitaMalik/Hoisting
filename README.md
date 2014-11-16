#Hoisting in JavaScript

As we all know that in **JavaScript** there are only 2 **scope** i.e. **Global scope** and **Function scope**. There is no **block scope** in **JavaScript**. Now, here we need to look into a very important and interesting concept of **JavaScript** i.e. **Hoisting**. Since **JavaScript** has no **block scope**, so due to obvious reasons a **variable** declared anywhere in a **function** would be visible/available everywhere in that **function**. So this means that variable declared at the bottom of the **function** will be visible in the whole **function**. Lets first run below **JavaScript** code and see the output:

```JavaScript
var a = 5;
console.log(a); // 5
function funcScopeTest() {
  console.log(a); // undefined
  var a = 10;
  console.log(a); // 10
}
console.log(a); // 5
funcScopeTest();
```

After reading above paragraph and watching the output of above code, you must be feeling strange and might be thinking what is happening? why and how??? etc. Lets understand


This feature of **JavaScript** that **hoists** variable to the top is known as **hoisting**.

So let's have a look into some piece of code.....

Hey..Hang on..I forgot to add an important point here :

**Hoisting takes only declaration of variables to the top, assigned variables remain where they are!**

Now, without any further delay, let's move to some practical part:

```
/**
 * Created by Namita Malik on 11/11/14.
 */
"use strict";
var a = 10;
function c() {
  console.log(a, b);
  var b = 20;
  a = 20;
  console.log(a, b);
}
console.log(a);
c();
console.log(a);
```
Now, let us run the above code in your favourite browser and check the output:

Line 7 gives the output :

10, error

why?

As we know, a is global variable and has global scope so we get the value assigned to 'a' as output. But, 'b' is function/local variable and is not accessible outside the function, therefore we get error.

Now, let's see the output of Line 3.

Output is undefined, undefined.

Can you guess why?

We know that due to **hoisting** feature in JavaScript, our code becomes like this :

``
var a=10;
function c (){
var a,b;
console.log(a,b);
b=20; a=20;
console.log(a,b);
}
console.log(a,b);
c();
console.log(a,b);

``
Since JavaScript at the time of parsing knows that var 'a' is declared again in the function and since function scope gets preference over global scope, therefore, JS engine forgets the declaration of 'var a' as global variable and assignment of value '10' to it. And the local 'var a' is declared in the top line of the function while value is defined later, hence we get **undefined**!

For 'var b' it is simple, as it has been assigned value later in the code, therefore we get undefined in output.

For line 5, output is but obvious i.e. 20,20.

For line 9, output is again 10 and error and you now know the story.....

This was all about hoisting in **JavaScript**. In case you want to know about the **scope in JavaScript**, read this awesome blog by Amit Kumar.