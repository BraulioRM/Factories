(function(){


angular
.module('prac1',[])

// 1ero como me refiero al archivo en html, el segundo en el archivo javascript
.controller('pracCtrl', pracCtrl)

function pracCtrl(){
//le pones nombre a este contexto first, le vas poniendo nombre a las capas de 
//código

var first = this;
first.name= 'Braulio';
first.age=18;
first.number=3;
first.texto='hola';


first.users = [

{name:first.name,age:18,pais:"mx"},
{name:'ricardo',age:23, pais:"mx"},
{name:'mau',age:20, pais:'usa'},
{name:'daniel',age:20, pais:'país'},
{name:'mora',age:24, pais:'turco'},
{name:'ruth',age:29, pais:'mx'}
]

first.ruco=addAge;
function addAge(user){
	user.age += 1 
}

first.click=function click(){
	console.log(first.name)
}

}



}) ();

