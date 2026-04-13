#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Page Loader')
const url = readlineSync.question('Enter the page URL: ');
console.log(url);