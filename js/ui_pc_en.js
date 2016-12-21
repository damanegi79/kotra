// JavaScript Document

$(document).ready(function(){
   $('.gnb>li>a').on('mouseover',function(){
       $('.gnb>li>a').removeClass('active');
       $('.gnb>li .gnbSub').hide();
       $(this).addClass('active').next().show()
   })
   $('#header').on('mouseleave',function(){
       $('.gnb>li>a').removeClass('active');
       $('.gnb>li .gnbSub').hide();
   })
   
});
