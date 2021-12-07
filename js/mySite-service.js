'use strics'

// Global verbs 
var gProjects;
var gIdx = 1;

function init(){
    _createProjects();
}

function getProjects(){
    return gProjects;
}

function _createProjects(){
    var projects = [
        _createProject('MineSweeper', 'Would you Survive?', 'My first real time project, that i build by my self from Zero to Hero', 'https://netanel-nadav.github.io/CodingAcademi/', ['Gaming' , '2D Matrix'], 'img/portfolio/05-thumbnail.jpg'),
        _createProject('In-Picture', 'Whats in the Pic?', 'an easy game to build my JS skill\'s', '#', ['Gaming' , 'Vanilla JS'], 'img/portfolio/03-thumbnail.jpg'),
        _createProject('Touch Nums', 'Press the right Number', 'My first 2D Matrix game', '#', ['Gaming', '2D Matrix'], 'img/portfolio/04-full.jpg'),
        _createProject('Ball Board', 'Catch the balls in time!', 'a game that i build that you need to use KeyEvents', '#', ['Gaming', '2D Matrix'], 'img/portfolio/01-thumbnail.jpg'),
        _createProject('Todos', 'add or Remove todos', 'A simple app that allows the user add and remove todos', '#', ['App', 'User_Interactive'], 'img/portfolio/06-thumbnail.jpg'),
        _createProject('Book Shop', 'Do you like books?', 'A simple app for book store', '#', ['App', 'book_store'], 'img/portfolio/02-thumbnail.jpg'),
    ];
    gProjects = projects;
}


function _createProject(name, title, desc, url, labels, img){
    var proj = {
        id: _makeId(3),
        name: name,
        title: title,
        desc: desc,
        url: url,
        img: img,
        publishedAt: Date.now(),
        labels: labels,
    }
    return proj
}


function sendEmail(mail, sub, msg){
    window.open(`https://mail.google.com/mail/u/0/?fs=1&to=natinadav932@gmail.com&su=${sub}&body=${msg}&tf=cm`)
}