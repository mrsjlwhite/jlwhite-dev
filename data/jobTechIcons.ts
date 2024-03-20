// programmer icon names
const vue = 'vuejs-plain';
const react = 'react-original';
const typescript = 'typescript-plain';
const javascript = 'javascript-plain';
const csharp = 'csharp-plain';
const mysql = 'mysql-plain';
const sql = 'microsoftsqlserver-plain';
const atlassian = 'matlab-plain';
const jira = 'jira-plain';
const confluence = 'confluence-original';
const github = 'github-original';
const angular = 'angularjs-plain';
const bootstrap = 'bootstrap-plain';
const css = 'css3-plain';
const html5 = 'html5-plain';
const mongo = 'mongodb-plain';
const express = 'express-original';
const node = 'nodejs-plain';
const net = 'dotnetcore-plain';
const bitbucket = 'bitbucket-original';
const trello = 'trello-plain';

const jobTechIcons = new Map();

jobTechIcons.set('Synergy', [
    csharp,
    net,
    html5,
    css,
    javascript,
    angular,
    sql,
    github,
    confluence,
    jira,
    atlassian
])

jobTechIcons.set('Xerox Business Solutions Southwest', [
    vue,
    javascript,
    csharp,
    net,
    sql,
    github
]);

jobTechIcons.set('Tresta', [
    react,
    typescript,
    javascript,
    csharp,
    net,
    mysql,
    atlassian,
    jira,
    confluence,
    github
]);

jobTechIcons.set('IAPMO', [
    csharp,
    javascript,
    angular,
    net,
    sql,
    bootstrap,
    css,
    html5,
    github,
    atlassian,
    jira,
    confluence
]);

jobTechIcons.set('Freelance', [
    mongo,
    express,
    angular,
    javascript,
    node,
    bootstrap,
    css,
    html5,
    bitbucket
]);

jobTechIcons.set('Laso Concepts', [
    mongo,
    express,
    angular,
    javascript,
    node,
    bootstrap,
    css,
    html5,
    trello,
    github
]);

jobTechIcons.set('TL;DR', [
    angular,
    react,
    vue,
    typescript,
    javascript,
    bootstrap,
    css,
    html5,
    csharp,
    mysql,
    sql,
    github,
    atlassian,
    node,
    net
]);

export default jobTechIcons;