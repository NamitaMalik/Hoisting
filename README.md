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

After reading above paragraph and watching the output of above code, you must be feeling strange and might be thinking what is happening? why and how??? etc. Lets understand:

On line no 1, we are defining a variable with name **a**. Line 2 of the above code prints "5", which doesn't requires any explanation. Now, let's look at the line 4. We see that it logs **undefined**, even though when **a** has been defined as **global variable** at line no. 1, with value ```5``` assigned to it. Well, the reason behind this behaviour is that **var a** has also been defined in the **function** **funcScopeTest** and in **JavaScript**, **function scope** gets preference. Now, you would be thinking that the **var a** in **funcScopeTest** has been defined in the next line, so how come **JavaScript** engine gets to know that there is **var a** in funcScopeTest **function** too ?? The answer is a simple yet magical term **hoisting**.

Due **hoisting**, a **variable** defined anywhere in the **function** is taken to the top of the **function**!

Hey..Hang on.. I forgot to add an important point here :

**Hoisting takes only declaration of variables to the top, assigned variables remain where they are!**

**Hoisting** happens in **parsing** phase. Actually **JavaScript** runs in two steps:
1. Parsing Phase
2. Execution Phase.

So at first/Parsing Phase, **JavaScript**, perform **hoisting** with parsing. So after the parsing phase and before the execution phase above code will be converted to below:

```JavaScript
var a = 5;
console.log(a); // 5
function funcScopeTest() {
  var a;
  console.log(a); // undefined
  a = 10;
  console.log(a); // 10
}
console.log(a); // 5
funcScopeTest();
```

You will notice that difference between the above snippets is that only declaration of variable (in our example variable name is **a**) has moved to the first line of the **function**. Assignment is still happening on the same place!

This was all about **Hoisting** in **JavaScript**.

Follow Me
---
[Github](https://github.com/NamitaMalik)

[Twitter](https://twitter.com/namita13_04)

[LinkedIn](https://in.linkedin.com/in/namita-malik-a7885b23)

[More Blogs By Me](https://namitamalik.github.io/)
