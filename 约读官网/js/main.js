// 首页
 var Page={
    // 头部导航
    headNav:function(){
        var offset = 84;
        $('.head-nav li').each(function(index,item){
            $(this).click(function(){
                $('.head-nav li').removeClass('activeNav')
                $(this).addClass('activeNav')
                var ele='SinglePage'+index ;
                if (index==0) {
                    document.getElementById('SinglePage0').scrollIntoView()
                } else {
                    document.getElementById(ele).scrollIntoView()
                }
                scrollBy(0, -offset);
            })
        })
    },
    // 连动
    navToContent:function(){
       
        function arrH(){
            var arr=[];
            var length=$('.Single').length;
            for (var i = 0; i <length; i++) {
                var elementH = $('.Single').eq(i).offset().top;
                arr[i]=elementH
            }
            console.log(arr)
            $(window).scroll(function(){
                var winH=$(window).scrollTop();
                // console.log(winH)
                for (var index = 0; index < arr.length; index++) {
                //    array[index];
                if (index==4) {
                    if(winH>=$('.Single').eq(3).offset().top+200){
                        $('.head-nav li').removeClass('activeNav')
                        $('.head-nav li').eq(4).addClass('activeNav')
                    }
                } else {
                    if(winH>=Math.floor(arr[index]-200)&&winH<Math.floor(arr[index+1])){
                        $('.head-nav li').removeClass('activeNav')
                        $('.head-nav li').eq(index).addClass('activeNav')
                    }
                }
                    if(winH>=Math.floor(arr[index]-200)&&winH<Math.floor(arr[index+1])){
                        $('.head-nav li').removeClass('activeNav')
                        $('.head-nav li').eq(index).addClass('activeNav')
                    }
                    
                }
               
            })
        }arrH()
       
       
    },

    // 公司介绍
    product: function(){
        $('.product-nav .nav-btn').each(function(index,item){
            $(this).click(function(){
                $('.product-nav .nav-btn').removeClass(' active-pro-nav')
                $(this).addClass(' active-pro-nav')
                $('.product-nav-content .pro-nav-list').hide()
                $('.product-nav-content .pro-nav-list').eq(index).show()
            })
        })
    },
    productFaNav: function(){
        $('.product-guide img').each(function(index,item){
            $(this).click(function(){
                $('.productBg,.product-guide').hide()
                $('.product-nav').show()
                $('.product-nav-content').show()
                $('.product-nav .nav-btn').removeClass(' active-pro-nav')
                $('.product-nav .nav-btn').eq(index).addClass(' active-pro-nav')
                $('.product-nav-content .pro-nav-list').hide()
                $('.product-nav-content .pro-nav-list').eq(index).show()
                $('.product-service').css({
                    'background-color':'#f2f2f2'
                })
            })
        })
    },
    // 子分类tab
    productSonNav:function(obj,ele){
        $(obj).find('.nav-branch ul li').each(function(index,item){
            $(this).click(function(){
                $(obj).find('.nav-branch ul li').removeClass('active-branch-nav')
                $(this).addClass('active-branch-nav')
                $(obj).find(ele).hide()
                $(obj).find(ele).eq(index).show()
            })
        })
    },
    foot:function(){
        var footMid=$('.linkA a').length;
        if (footMid<=4) {
            $('.linkA a').css('width','98%')
        } else {
            $('.linkA a').css('width','48%')
        }
    }

 }
 Page.headNav()
 Page.product()
 Page.navToContent()
 Page.productSonNav('.reading-Resources','.Resources-item')
 Page.productSonNav('.study-Course','.Course-item')
 Page.productSonNav('.Reading-Activities','.Activities-item')
 Page.productSonNav('.Value-addedService','.addedService-item')

 Page.productFaNav()

 Page.foot()



