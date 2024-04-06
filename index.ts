#! /usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';

const currency : any = {
    USD : 1, //Base Currency
    Euro : 0.92,
    Japnese_Yen : 151.61,
    GBP : 0.76,
    INR : 83.30,
    PKR : 277.54,
    Chinese_Yuan : 7.23,
    Russian_Rubble : 92.58,
};

let userAnswer = await inquirer.prompt(
    [
        {
            name : 'from',
            message : 'Enter from Currency',
            type : 'list',
            choices : ['USD','Euro','Japnese_yen','GBP','INR','PKR','Chinese_Yuan','Russian_Rubble']
        },
        {
            name : 'to',
            message : 'Enter to Currency',
            type : 'list',
            choices : ['USD','Euro','Japnese_yen','GBP','INR','PKR','Chinese_Yuan','Russian_Rubble']
        },
        {
            name : 'amount',
            message : 'Enter Your Amount',
            type : 'number',
        },
    ]
)

let fromAmount = currency [userAnswer.from]
let toAmount = currency [userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(chalk.green(convertedAmount));
