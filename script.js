document.body.style.backgroundColor = 'silver'

let home = document.getElementById('title');
home.style.color = 'green';

let tags = document.getElementById('tags');
tags.style.textTransform = 'uppercase';

let title = document.getElementById ('tag');
title.style.textTransform = 'uppercase';

let fruitList = document.getElementById('fruList');
let fruit = document.createElement('li');
let one_fruit = document.createTextNode('Guava');

fruit.appendChild(one_fruit);
fruitList.appendChild(fruit);

let veggieList = document.getElementById('vegList');
let veggie = document.createElement('li');
let one_vegan = document.createTextNode('Broccoli');

veggie.appendChild(one_vegan);
veggieList.appendChild(veggie);