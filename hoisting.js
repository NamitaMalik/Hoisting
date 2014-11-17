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