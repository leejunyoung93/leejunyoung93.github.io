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
function addClass(element, className) {
     element.className += " " + className; 
};

function removeClass(element, className) {
    var check = new RegExp("(\\s|^)" + className + "(\\s|$)"); 
        element.className = element.className.replace(check, " ").trim(); 
};
function toggleClass(element, className) {
    var check = new RegExp("(\\s|^)" + className + "(\\s|$)");
    if (check.test(element.className)){ 
        element.className = element.className.replace(check, " ").trim(); 
    } else { 
        element.className += " " + className; 
    } 
}



document.addEventListener('DOMContentLoaded', function(){
    tPage();
});

var tPage = function(){  

    function windowLink() {
		window.location = link_location;
    }

    var $tpage = $('.tpage')
        for(var i = 0; i <= 5; i++){
           tpage_item = '<div class="tpage_item" data-num="'
           +i+'"></div>';
           $tpage.innerHTML += tpage_item
        }
    setTimeout(function(){
        $tpage.style.display = 'none';
    },1300);
    
    
    var tpage_current = $('h2').innerHTML;//이거 {{page.pagename}}으로 바꾸는 법 머야?
    addClass($tpage,'tpage_'+ tpage_current +'_out');

    if(tpage_current !== 'intro' ){
        $('header').style.display='block';
    }else{
        $('header').style.display='none';
    }

    var $tpage_link = $('.tpage_link');
        for (var i = 0; i < $tpage_link.length; i++) {
            $tpage_link[i].addEventListener('click',function(evt){
            evt.preventDefault();
            link_location = this.getAttribute('href');
            setTimeout(function(){
                windowLink();
            },2000);
            var tpage_target = this.getAttribute('data');
            $tpage.style.display='block';
            removeClass($tpage,'tpage_'+ tpage_current +'_out');
            addClass($tpage,'tpage_'+ tpage_target +'_in');
        })
    } 
}

