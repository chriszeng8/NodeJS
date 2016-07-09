//require('') will look for package in the Node CORE library.
// if not found, it will look for it in other places, one of which is the 
// node_modules folder
var moment = require('moment'); 
console.log(moment().format());
//display day of the week, hour, and AM/PM
console.log(moment().format("ddd,hA"));


var express = require('express')