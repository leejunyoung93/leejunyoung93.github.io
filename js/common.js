function $(selector){
	var $el = document.querySelectorAll(selector);
	var count = $el.length;
	if(count > 1){
		return $el;
	}else if(count == 1){
		return $el[0];
	}else{
		return;
	}
}

document.addEventListener('DOMContentLoaded', function(){
    tPage();
});

/*** 함수선언식은 호이스팅에 영향을 받고 함수표현식은 호이스팅에 영향을 받지 않는다.
함수표현식은 클로저나 콜백으로 사용할 때 유용하게 쓰인다. ***/
function tPage(){ 

    setTimeout(function(){
        $tpage.classList.add('tpage_hidden')
    },1300);    

    $tpage =  $('.tpage')

    /*** 고치기 ***/
    var tpage_current = $('h2').innerHTML;
    $tpage.classList.add('tpage_'+ tpage_current +'_out')

    /*** 고치기 ***/
    $header = $('header');
    if(tpage_current !== 'intro' ){
        $header.classList.remove('header_hidden')
    }else{
        $header.classList.add('header_hidden')
    }

    var $tpage_link = $('.tpage_link');
         /*** 고치기 ***/
        for (var i = 0; i < $tpage_link.length; i++) {
            $tpage_link[i].addEventListener('click',function(evt){
            evt.preventDefault();
            link_location = this.getAttribute('href');
            setTimeout(function(){
                window.location = link_location
            },2000);
            var tpage_target = this.getAttribute('data');
            $tpage.classList.remove('tpage_hidden','tpage_'+ tpage_current +'_out')
            $tpage.classList.add('tpage_'+ tpage_target +'_in')
        })
    } 
}
