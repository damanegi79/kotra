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
   $('.family_link .select_link a').on('click',function(){
       $('.link_list').slideToggle(200)
       return false;
   })
   $('.quick_menu>li').hover(function(){
       $(this).addClass('active')
   },function(){
       $(this).removeClass('active')
   })
   $('[data-role="tab_view"]').each(function(){
        var list = $(this);
        list.find('.btn').on('click',function(){
           var num = list.find('.btn').index(this)
           list.find('li').removeClass('active')
           $(this).parent().addClass('active')
           list.next().find($('[data-role="tab_content"]>li,[data-role="tab_content"]>div')).hide()
           list.next().find($('[data-role="tab_content"]>li,[data-role="tab_content"]>div')).eq(num).show()
           return false;
       })
   })
//   $('[data-role="tab_view"] li .btn').on('click',function(){
//        var num = $('[data-role="tab_view"] li .btn').index(this)
//       $('[data-role="tab_view"] li').removeClass('active')
//       $(this).parent().addClass('active')
//       $('[data-role="tab_content"]>li,[data-role="tab_content"]>div').hide()
//       $('[data-role="tab_content"]>li,[data-role="tab_content"]>div').eq(num).show()
//       return false;
//   })
   $('.guideArea .guideCon .closeCon').on('click',function(){
        $('.guideArea .guideCon .contents').hide()
        $('[data-role="tab_view"] li').removeClass('active')
        return false;
   })
   $('.hamMenu button').on('click',function(){
        $('.allLayer').show();
    })
   $('.allLayer .btn_close button').on('click',function(){
        $('.allLayer').hide();
    })
   $('#nav li a').on('mouseover',function(){
        var num = $('#nav li a').index(this);
        $('#nav li a').removeClass('active')
        $(this).addClass('active')
        $('.subNav').show();
        $('.subNav ul').hide();
        $('.subNav ul').eq(num).show();
   })
   $('#header').on('mouseleave',function(){
       $('#nav li a').removeClass('active')
       $('.subNav').hide();
       $('.subNav ul').hide();
   })
   $('.headBottom .search button').on('click',function(){
        $('.headBottom .searchForm').toggle();
    })
   
});
