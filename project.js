/*
 Three types of modules - 
   1. core modules
   2. local modules
   3. npm modules
*/

const importedSum = require('./myModule');

const res = importedSum.sum(3,5);
const express = require('express');

console.log(importedSum)

