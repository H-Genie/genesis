window.onload = function() {
    document.getElementsByClassName('hero_content')[0].style="background-size:100%; opacity:1; transition:all 1s;";
    
    document.getElementsByClassName('title')[0].style="transform:translateY(0); opacity:1; transition:all 1s; transition-delay:0.5s;";
    document.getElementsByClassName('call-to-action')[0].firstElementChild.style="transform:translateY(0); opacity:1; transition:all 1s; transition-delay:0.7s;";
    document.getElementsByClassName('call-to-action')[0].lastElementChild.style="transform:translateY(0); opacity:1; transition:all 1s; transition-delay:0.9s;";
}

function moveVideo() {
    var width = window.innerWidth
  
    if(width>1600) {document.documentElement.scrollTop = document.getElementsByClassName('video')[0].offsetTop - 100;}
    if(width<=1600 && width>1365) {document.documentElement.scrollTop = document.getElementsByClassName('video')[0].offsetTop - 80;}
    if(width<=1365) {document.documentElement.scrollTop = document.getElementsByClassName('video')[0].offsetTop - 64;}    
}



var autoPlayed = 0;
window.onscroll = function() {    
    var height = window.innerHeight * 0.8
    var scroll = window.pageYOffset;
        
    if (scroll >= document.getElementsByClassName('carousel')[0].offsetTop - height) {
        if(autoPlayed==0) {auto(); autoPlayed=1;}
    }

    if (scroll >= document.getElementsByClassName('page_links_title')[0].offsetTop - height) {
        document.getElementsByClassName('page_links_title')[0].style="transform:translateY(0); opacity:1; transition:all 1s";}

    if (scroll >= document.getElementsByClassName('component_container')[2].offsetTop - height) {
        for (i=4; i<document.getElementsByClassName('vehicle_list').length; i++) {
            document.getElementsByClassName('vehicle_list')[i].style="transform:translateY(0); opacity:1; transition:all 1s; transition-delay:"+((i*0.2)-0.8)+"s;";}
    } 
    
    if (scroll >= document.getElementsByClassName('brand_text')[0].offsetTop - height) {
        document.getElementsByClassName('brand_text')[0].children[0].style="transform:translateY(0); opacity:1; transition:all 1s;";
        document.getElementsByClassName('brand_text')[0].children[1].style="transform:translateY(0); opacity:1; transition:all 1s; transition-delay:0.3s;";
        document.getElementsByClassName('brand_text')[0].children[2].style="transform:translateY(0); opacity:1; transition:all 1s; transition-delay:0.6s;";}

    if (scroll >= document.getElementsByClassName('motor_show_awards_title')[0].offsetTop - height) {
    document.getElementsByClassName('motor_show_awards_title')[0].firstElementChild.style="transform:translateY(0); opacity:1; transition:all 1s;";}

    if (scroll >= document.getElementsByClassName('carousel_vertical')[0].offsetTop - height) {
        document.getElementsByClassName('carousel_vertical')[0].style="transform:translateY(20px); opacity:1; transition:all 1s linear;";}

    if (scroll >= document.getElementsByClassName('related_content_list')[0].offsetTop - height) {
    for (i=0; i<document.getElementsByClassName('related_content_list').length; i++) {
        document.getElementsByClassName('related_content_list')[i].style="transform:translateY(0); opacity:1; transition:all 1s; transition-delay:"+((i*0.2)-0.2)+"s;";}        
    }

    if (scroll >= document.getElementsByClassName('social_connect')[0].offsetTop - height) {
        document.getElementsByClassName('social_connect')[0].firstElementChild.style="transform:translateY(0); opacity:1; transition:all 1s;";
        
        for (i=0; i<3; i++) {
            document.getElementsByClassName('social_link')[0].children[i].style="transform:translateY(0); opacity:1; transition:all 1s; transition-delay:"+(i*0.2)+"s;";}  
    }
}