/**
 * Created by Namita Malik on 11/11/14.
 */
"use strict";

var a = 5;
console.log(a); // 5
function funcScopeTest() {
    console.log(a); // undefined
    var a = 10;
    console.log(a); // 10
}
console.log(a); // 5
funcScopeTest();
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