//############### PRELOADER #####################

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut('slow');
    $("body").css('background','#000');
    $preloader.delay(350).fadeOut('slow');
});
$(document).ready(function() {
    changeScreen();
});
function changeScreen(){

$(document).ready(function() {
  $(".container").customScrollbar();
});
//############### FORM ##########################

$('#mydt').onfocus=function(){
    $('.button-1').css('background','#fff');
};

var x = document.getElementById("mail");

x.addEventListener("focus", myFocusFunction, true);
x.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
    $('#myInput').css('background','#fff');
    $('#myInput').css('border-color','#fff');
}

function myBlurFunction() {
    $('#myInput').css('background','#ccc');
    $('#myInput').css('border-color','#ccc');
}

//############### NAVI ###########################

$(".navi").click(function() {
    $('.navi').removeClass('sel');
    $('.pmlm').css('left','-300px');
    $('.years').css('top','-300px');
    $('#logo').css('opacity','1');
    //$(this).addClass('sel');
    $('.yellow').css('opacity','0');
    $('.screen').css('opacity','0');
    $('.cont').css('opacity','0');
    $('.tmp').css('transform','scale(1)');
    $('.active').css('transform','scale(1.5)');
    $('.screen').removeClass('active');
    $('.screen').removeClass('tmp');
    $('.cont').css('z-index','0');
    $('#opa').css('z-index','1');
});
$("#home").click(function() {
    $('#screenHome').css('opacity','1');
    $('#logo').css('opacity','0');
    $('#cHome').css('opacity','1');
    $('#home2').css('opacity','1');
    $('#cHome').css('z-index','2');
    $('#screenHome').addClass('active');
    $('#screenHome').addClass('tmp');
    $('#screenHome').css('transform','scale(1.2)');
});
$("#info").click(function() {
    $('#screenInfo').css('opacity','1');
    $('#cInfo').css('opacity','1');
    $('.pmlm').css('left','0');
    $('#info2').css('opacity','1');
    $('#cInfo').css('z-index','2');
    $('#screenInfo').addClass('active');
    $('#screenInfo').addClass('tmp');
    $('#screenInfo').css('transform','scale(1.2)');
});
$("#team").click(function() {
    $('#screenTeam').css('opacity','1');
    $('#cTeam').css('opacity','1');
    $('#team2').css('opacity','1');
    $('#cTeam').css('z-index','2');
    $('#screenTeam').addClass('active');
    $('#screenTeam').addClass('tmp');
    $('#screenTeam').css('transform','scale(1.2)');
});
$("#news").click(function() {
    $('#screenNews').css('opacity','1');
    $('#y1').addClass('sel');
    $('.years').css('top','0');
    $('#cNews').css('opacity','1');
    $('#news2').css('opacity','1');
    $('#cNews').css('z-index','2');
    $('#screenNews').addClass('active');
    $('#screenNews').addClass('tmp');
    $('#screenNews').css('transform','scale(1.2)');
});
$("#press").click(function() {
    $('#screenPress').css('opacity','1');
    $('#cPress').css('opacity','1');
    $('#press2').css('opacity','1');
    $('#cPress').css('z-index','2');
    $('#screenPress').addClass('active');
    $('#screenPress').addClass('tmp');
    $('#screenPress').css('transform','scale(1.2)');
});
$("#projects").click(function() {
    $('#screenProjects').css('opacity','1');
    $('#cProjects').css('opacity','1');
    $('#projects2').css('opacity','1');
    $('#cProjects').css('z-index','2');
    $('#screenProjects').addClass('active');
    $('#screenProjects').addClass('tmp');
    $('#screenProjects').css('transform','scale(1.2)');
});
$("#contacts").click(function() {
    $('#screenContacts').css('opacity','1');
    $('#cContacts').css('opacity','1');
    $('#contacts2').css('opacity','1');
    $('#cContacts').css('z-index','2');
    $('#screenContacts').addClass('active');
    $('#screenContacts').addClass('tmp');
    $('#screenContacts').css('transform','scale(1.2)');
});

$(".an").click(function() {
    $(".an").removeClass('sel');
    $(this).addClass('sel');
    $('.conta').css('display','none');
});
$("#p1").click(function() {
    $('#p1Cont').fadeIn('500');
});
$("#p2").click(function() {
    $('#p2Cont').fadeIn('500');
});
$("#p3").click(function() {
    $('#p3Cont').fadeIn('500');
});
$("#p4").click(function() {
    $('#p4Cont').fadeIn('500');
});
$("#p5").click(function() {
    $('#p5Cont').fadeIn('500');
});

//############### NEWS ###########################

$(".mnth").click(function() {
    $('.mnth').css('color','#fff');
    $(this).css('color','#ecc334');
});

$(".yr").click(function() {
    $('.years').css('top','0');
});
$("#y1").click(function() {
    $('#screenNews').css('opacity','1');
    $('#y1').addClass('sel');
    $('#cNews').css('opacity','1');
    $('#news2').css('opacity','1');
    $('#cNews').css('z-index','2');
    $('#screenNews').addClass('active');
    $('#screenNews').addClass('tmp');
    $('#screenNews').css('transform','scale(1.2)');
});
$("#y2").click(function() {
    $('#screenPress').css('opacity','1');
    $('#y2').addClass('sel');
    $('#cPress').css('opacity','1');
    $('#press2').css('opacity','1');
    $('#cPress').css('z-index','2');
    $('#screenPress').addClass('active');
    $('#screenPress').addClass('tmp');
    $('#screenPress').css('transform','scale(1.2)');
});

$(".fb").click(function() {
    $('.pm').css('right','-20px');
    $('html').one('click',function() {
        $('.pm').css('right','-240px');
      });

      event.stopPropagation();

});

$(".pml").click(function() {
    $('.pm').css('right','-240px');

});


$("#mar").click(function() {
    $('.mStripe').css('margin-left','410px');
});

$("#apr").click(function() {
    $('.mStripe').css('margin-left','0px');
});

$("#may").click(function() {
    $('.mStripe').css('margin-left','-410px');
});

$("#jun").click(function() {
    $('.mStripe').css('margin-left','-820px');
});

$("#sep").click(function() {
    $('.mStripe').css('margin-left','-1230px');
});

$("#oct").click(function() {
    $('.mStripe').css('margin-left','-1640px');
});


//############### VIDEO ###########################

$("#play").click(function() {
    $('.resizeable').css('height','0px');
    $('.resizeable').css('opacity','0');
    $('.close').css('height','17px');
    $('.close').css('opacity','1');
    $('.video-js').css('margin-top','0px');
});

$(".close").click(function() {
    $('.cont').css('margin-top','0');
    $('.play').css('height','203px');
    $('.txt').css('height','250px');
    $('.resizeable').css('opacity','1');
    $('.close').css('height','0px');
    $('.close').css('opacity','0');
    $('.video-js').css('margin-top','600px');
    $('#example_video_1_html5_api').get(0).pause();
});

//############### NEWS ###########################

$('.lr').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta / 120 > 0) {
        $('.lr').removeClass('delay');
        $('.lr').removeClass('delay2');
        $('.layer4').addClass("layer0").removeClass('layer4');
        $('.layer3').addClass("layer4").removeClass('layer3');
        $('.layer2').addClass("layer3").removeClass('layer2');
        $('.layer1').addClass('layer2').removeClass('layer1');
        $('.layer0').removeClass('layer0').addClass('delay2').addClass('layer1');
    } else {
        $('.lr').removeClass('delay');
        $('.lr').removeClass('delay2');
        $('.layer1').addClass('layer0').removeClass('layer1');
        $('.layer2').addClass("layer1").removeClass('layer2');
        $('.layer3').addClass("layer2").removeClass('layer3');
        $('.layer4').addClass("layer3").removeClass('layer4');
        $('.layer0').removeClass('layer0').addClass('delay').addClass('layer4');
    }
});

$('#down').click(function(){

    $('.lr').removeClass('delay');
    $('.lr').removeClass('delay2');
    $('.layer1').addClass('layer0').removeClass('layer1');
    $('.layer2').addClass("layer1").removeClass('layer2');
    $('.layer3').addClass("layer2").removeClass('layer3');
    $('.layer4').addClass("layer3").removeClass('layer4');
    $('.layer0').removeClass('layer0').addClass('delay').addClass('layer4');

})
$('#up').click(function(){

    $('.lr').removeClass('delay');
    $('.lr').removeClass('delay2');
    $('.layer4').addClass("layer0").removeClass('layer4');
    $('.layer3').addClass("layer4").removeClass('layer3');
    $('.layer2').addClass("layer3").removeClass('layer2');
    $('.layer1').addClass('layer2').removeClass('layer1');
    $('.layer0').removeClass('layer0').addClass('delay2').addClass('layer1');

})

//############### PRESS ###########################

$('.lr2').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta / 120 > 0) {
        $('.lr2').removeClass('delay');
        $('.lr2').removeClass('delay2');
        $('.lyer1').addClass('lyer0').removeClass('lyer1');
        $('.lyer2').addClass("lyer1").removeClass('lyer2');
        $('.lyer3').addClass("lyer2").removeClass('lyer3');
        $('.lyer4').addClass("lyer3").removeClass('lyer4');
        $('.lyer5').addClass("lyer4").removeClass('lyer5');
        $('.lyer0').removeClass('lyer0').addClass('delay').addClass('lyer5');
    } else {
        $('.lr2').removeClass('delay');
        $('.lr2').removeClass('delay2');
        $('.lyer5').addClass("lyer0").removeClass('lyer5');
        $('.lyer4').addClass("lyer5").removeClass('lyer4');
        $('.lyer3').addClass("lyer4").removeClass('lyer3');
        $('.lyer2').addClass("lyer3").removeClass('lyer2');
        $('.lyer1').addClass('lyer2').removeClass('lyer1');
        $('.lyer0').removeClass('lyer0').addClass('delay2').addClass('lyer1');
    }
});

$('#down2').click(function(){

    $('.lr2').removeClass('delay');
    $('.lr2').removeClass('delay2');
    $('.lyer1').addClass('lyer0').removeClass('lyer1');
    $('.lyer2').addClass("lyer1").removeClass('lyer2');
    $('.lyer3').addClass("lyer2").removeClass('lyer3');
    $('.lyer4').addClass("lyer3").removeClass('lyer4');
    $('.lyer5').addClass("lyer4").removeClass('lyer5');
    $('.lyer0').removeClass('lyer0').addClass('delay').addClass('lyer5');

})
$('#up2').click(function(){

    $('.lr2').removeClass('delay');
    $('.lr2').removeClass('delay2');
    $('.lyer5').addClass("lyer0").removeClass('lyer5');
    $('.lyer4').addClass("lyer5").removeClass('lyer4');
    $('.lyer3').addClass("lyer4").removeClass('lyer3');
    $('.lyer2').addClass("lyer3").removeClass('lyer2');
    $('.lyer1').addClass('lyer2').removeClass('lyer1');
    $('.lyer0').removeClass('lyer0').addClass('delay2').addClass('lyer1');

})


}

