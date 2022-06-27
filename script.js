$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
$('.navbar').removeClass("sticky");
        }
    });
});

$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active")
    $('.menu-btn i').toggleClass("active")
});

// typing
var typed=new Typed (".typing",{
strings:["Cloud Enthusiast","Brand Manager","Developer","Designer","Content Writer"],
typeSpeed: 100,
backSpeed: 60,
loop: true
});
var typed=new Typed (".typing-2",{
    strings:["Cloud Enthusiast","Brand Manager","Developer","Designer","Content Writer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    });
