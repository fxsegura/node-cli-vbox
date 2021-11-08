#! /usr/bin/env node
const { program } = require('commander');
const list = require('./commands/list');
const start = require('./commands/start')
const stop = require('./commands/stop')
const importvm = require('./commands/import')
const deletevm = require('./commands/deletevm')
var virtualbox = require('virtualbox');
program
    .command('list')
    .description('List all Virtual Machines')
    .action(list)
program
    .command('start <vm>')
    .description('Start an existing Virtual Machine')
    .action(start)
program
    .command('importvm <vm>')
    .description('Import a new Virtual Machine')
    .action(importvm)
program
    .command('deletevm <vm>')
    .description('Delete a Virtual Machine')
    .action(deletevm)
program
    .command('stop <vm>')
    .description('Stop a Virtual Machine')
    .action(stop)
program.parse()