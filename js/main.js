window.onload=function init() {
    height = document.documentElement.clientHeight;
    video = document.getElementById("videoOverflow");
    heightDivided = height/2;
    video.style.height=heightDivided+"px";
}

function map(){ 
  source = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2988634.1870639385!2d-81.243177!3d42.9869502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef20ea88d9b0b%3A0x28c7d7699a056b95!2sLondon%2C+ON!5e0!3m2!1sen!2sca!4v1412898361667";
  document.getElementById("map").style.display="none";
  iframe = document.getElementById("iframe");
  iframe.src = source;  
  iframe.height = "450px";
  
}

var expanded = false;

function expand(){

  

  if (expanded == false) {
  document.getElementById('expand').innerHTML = "Close";
  var all = document.getElementsByClassName('bandInfo');

    for (var i = 0; i < all.length; i++) {
    all[i].style.height = '260px';

    } 
    expanded = true;
  } else {
  document.getElementById('expand').innerHTML = "Expand";
  var all = document.getElementsByClassName('bandInfo');

    for (var i = 0; i < all.length; i++) {
    all[i].style.height = '0px';
    }

  expanded = false;
  }
}
  