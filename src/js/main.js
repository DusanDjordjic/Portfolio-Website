var tshirts = {};
  $.getJSON('designs.json', function(data) { 
    tshirts = data;
  }); 
console.log(tshirts);


$('.nav-expanded').hide();
$('.nav-arrow').click(function(event){
    event.preventDefault();
    $('.nav-expanded').slideToggle();
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 300){
            $('.to-top').addClass("tt-show");
        }
        else{
            $('.to-top').removeClass("tt-show");
        }
    });
});
    
$(document).ready(function(){
    var src;
    $('.card-img img').hover(
        function(){
            $(this).fadeOut('fast', function () {
                src = $(this).attr('src');
                let newSrc = src.replace('-tshirt','');
                $(this).attr('src',newSrc);
                $(this).fadeIn('fast');
            });
        },
        function(){
            $(this).fadeOut('fast', function () {
                let newSrc = src ;
                $(this).attr('src',newSrc);
                $(this).fadeIn('fast');
            });
        });

})
