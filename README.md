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

Line 2 of the above code prints "5", which doesn't requires any explanation. Now, let's look at the line 4. We see that it logs "undefined", even though when 'a' has been defined as **global variable** with value "5" assigned to it. Well, the reason behind this behaviour is that 'var a' has also been defined in the **function** funcScopeTest() and in JavaScript, **function scope** gets preference. Now, you would be thinking that the 'var a' in funcScopeTest() has been defined in the next line, so how come JavaScript engine gets to know that there is 'var a' in funcScopeTest() too ?? The answer is a simple yet magical term **hoisting**.

Due **hoisting**, a **variable** defined anywhere in the **function** is taken to the top of the **function**!

Hey..Hang on..I forgot to add an important point here :

**Hoisting takes only declaration of variables to the top, assigned variables remain where they are!**

Now, without any further delay, let's move to some more practical part:

```
var d = 10;
function c() {
    console.log(d, e);
    var e = 20;
    d = 20;
    console.log(d, e);
}
console.log(d);
c();
console.log(d);
```
Run the above code in your favourite browser and check the output:

Line 8 gives the output :

10

This doesn't requires any explanation

Line 3 prints "10 undefined". It is because that 'var d' has been declared as **global variable** and has been assigned value "10". But now, a question would arise in your mind that in line 5, variable 'd' has been assigned the value "20". So "20" should have got printed instead of "10".

The answer is simple : The magic of **hoisting** is limited to the **declaration** part. In line 5, **variable** 'd' has been assigned the value "20", but has not been declared again. So **assignment** part remains where it is, and we get the value of the **global variable** 'd'.

Now. why does **variable** 'e' logs "undefined"? Answer is again the same. Due to **hoisting**, **declaration** part went to the top, but **assignment** remained where it was, hence we get "undefined". Line 6 logs "20 20" because now, both 'd' and 'e' have been assigned value "20".

Let's look at the last line now. It logs "20". This because that value of the **global variable** 'd' has been updated to "20".

Things would be more clear if you see a slightly modified version of the code:

```JavaScript
var d = 10;
function c() {
    var e; //this happened due to hoisting
    console.log(d, e);
    e = 20;
    d = 20;
    console.log(d, e);
}
console.log(d);
c();
console.log(d);
```
The above code simply shows that how **declaration** part moves to the top of the **function** during **hoisting**.

This was all about hoisting in **JavaScript**. In case you want to know about the **scope in JavaScript**, read this awesome blog by Amit Kumar.