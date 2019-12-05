/*var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kb.jpg') {
      myImage.setAttribute('src', 'images/kb2.jpg');
    } else {
      myImage.setAttribute('src', 'images/kb.jpg');
    }
}
*/
var im =document.querySelector('img');
im.onclick = function(){
	var mysrc=im.getAttribute('src');
	if (mysrc === 'images/kb.jpg'){
	im.setAttribute('src','images/kb2.jpg');
		}
	
	else{
	im.setAttribute('src','images/kb.jpg');
	}
}

var mybutton=document.querySelector('button')
var myheading=document.querySelector('h1')
function setusername(){
	var myname=prompt('please input your name');
	if(myname===null){setusername();}
	else{
	localStorage.setItem('name',myname);
	myheading.textContent='Mozilla酷毙了,'+myname;}}
// JavaScript Document

if(!localStorage.getItem('name'))
{setusername();}
else
{var storename=localStorage.getItem('name')
myheading.textContent='Mozilla酷毙了,'+storename;
}

mybutton.onclick=function(){setusername();}