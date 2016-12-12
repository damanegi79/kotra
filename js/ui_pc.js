// JavaScript Document

$(document).ready(function(){
   $('#notice_area .notice_tab li a').on('click',function(){
       var thisNum = $('#notice_area .notice_tab li a').index(this)
       $('#notice_area .notice_tab li').removeClass('active')
       $(this).parent().addClass('active')
       $('#notice_area .notice_list>ul').hide()
       $('#notice_area .notice_list>ul').eq(thisNum).show()
       return false;
   })
   $('#left_nav>dd').each(function(){
       
       if($(this).find('ul').size()==0){
         $(this).find('a').eq(0).addClass('noneChild')
       }
   })
   
   $('#left_nav>dd>ul>li>a').each(function(){
       if($(this).hasClass('active')){
        $(this).parent().parent().show()
       }
   })
   $('#left_nav>dd>a').on('click',function(){
       $('#left_nav>dd>a').removeClass('active')
       $(this).addClass('active')
       $('#left_nav ul').each(function(){
            if($(this).prev().hasClass('active')){
                $(this).slideDown()
            } else{
                $(this).slideUp()
            }
       })
       
       return false;
   })
});
