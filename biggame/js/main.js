var mybutton=document.querySelector('button')
var myheading=document.querySelector('h1')
function setusername(){
	var myname=prompt('please input your name');
	if(myname===null){setusername();}
	else{
	localStorage.setItem('name',myname);
	myheading.textContent='hola,'+myname;}}
// JavaScript Document

if(!localStorage.getItem('name'))
{setusername();}
else
{var storename=localStorage.getItem('name')
myheading.textContent='hola,'+storename;
}

mybutton.onclick=function(){setusername();}