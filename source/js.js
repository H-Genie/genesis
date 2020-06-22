// carousel : motor_show_awards
function clickCV(a) {
    for (i=0; i<document.getElementsByClassName('navigation_li').length; i++) {
        document.getElementsByClassName('navigation_li')[i].style="color:white;";}

    document.getElementsByClassName('navigation_li')[a].style="color:#cd9a81;";
    document.getElementsByClassName('progress_bar')[0].style="left:"+(a*16.6)+"%;";

    for (i=0; i<document.getElementsByClassName('cv_page').length; i++) {
        document.getElementsByClassName('cv_page')[i].style="z-index:0; opacity:0;";
        document.getElementsByClassName('cv_message_box')[i].style="transform:translateY(50%); opacity:0;";}
    
    document.getElementsByClassName('cv_page')[a].style="z-index:1; opacity:1; transition:all 1s";
    document.getElementsByClassName('cv_message_box')[a].style="transform:translateY(0); opacity:1; transition:all 0.5s linear;";
}

// footer : language_list
var list_state=0;
function folding() {
    if(list_state==0) {
        document.getElementsByClassName('language_list')[0].style="transform:translateY(0); opacity:1; transition:transform 0.5s, opacity 0.1s";
        document.getElementById('list_arrow_left').style="transform:rotate(180deg); transition:transform 0.5s cubic-bezier(.785,.135,.15,.86);;";
        document.getElementById('list_arrow_right').style="transform:rotate(180deg); transition:transform 0.5s cubic-bezier(.785,.135,.15,.86);;";
        list_state=1;
    }
    else {
        document.getElementsByClassName('language_list')[0].style="transform:translateY(160px); opacity:0; transition:transform 0.5s, opacity 0.5s 0.5s";
        document.getElementById('list_arrow_left').style="transform:rotate(-35deg); transition:transform 0.5s cubic-bezier(.785,.135,.15,.86);;";
        document.getElementById('list_arrow_right').style="transform:rotate(35deg); transition:transform 0.5s cubic-bezier(.785,.135,.15,.86);;";
        list_state=0;
    }                    
}


// Mobile : shopping_tools_accordion
function toolsAccordion() {
    if(document.getElementsByClassName('tools_accordion')[0].style.height == "0px") {
        document.getElementsByClassName('tools_accordion')[0].style="height:456px; transition:height 0.5s";
        document.getElementById('mobile_arrow_left').style="transform:rotate(180deg); transition:transform 0.5s;";
        document.getElementById('mobile_arrow_right').style="transform:rotate(180deg); transition:transform 0.5s;";
    }
    else {
        document.getElementsByClassName('tools_accordion')[0].style="height:0px; transition:height 0.5s";
        document.getElementById('mobile_arrow_left').style="transform:rotate(0deg); transition:transform 0.5s;";
        document.getElementById('mobile_arrow_right').style="transform:rotate(90deg); transition:transform 0.5s;";    
    }
}


// Mobile : shopping_tools_accordion
function linkAccordion() {
    if(document.getElementsByClassName('link_accordion')[0].style.height == "0px") {
        document.getElementsByClassName('link_accordion')[0].style="height:130px; transition:height 0.5s";
        document.getElementById('link_arrow_left').style="transform:rotate(180deg); transition:transform 0.5s;";
        document.getElementById('link_arrow_right').style="transform:rotate(180deg); transition:transform 0.5s;";
    }
    else {
        document.getElementsByClassName('link_accordion')[0].style="height:0px; transition:height 0.5s";
        document.getElementById('link_arrow_left').style="transform:rotate(0deg); transition:transform 0.5s;";
        document.getElementById('link_arrow_right').style="transform:rotate(90deg); transition:transform 0.5s;";    
    }
}


// Mobile : LNB
var lnb_state=0;
function mobileLnb() {
    if(lnb_state==0) {   
        for (i=0; i<document.getElementsByClassName('snb').length; i++) 
            {document.getElementsByClassName('snb')[i].style="height:calc(100vh - 64px);"}
        
        document.getElementsByClassName('lnb_mobile')[0].style="height:calc(100vh - 64px); transition:height 0.5s;";

        document.getElementById('button1').style="transform:rotate(-45deg); top:50%; transition:all 0.15s linear";
        document.getElementById('button2').style="display:none;";
        document.getElementById('button3').style="transform:rotate(45deg); top:50%; transition:all 0.15s linear;";
        document.querySelector('body').style="overflow-y:hidden;";
        lnb_state=1;
    }    

    else {                
        for (i=0; i<document.getElementsByClassName('snb').length; i++) 
        {document.getElementsByClassName('snb')[i].style="height:0px;"}        

        document.getElementsByClassName('lnb_mobile')[0].style="height:0px; transition:height 0.5s";
                
        document.getElementById('button1').style="transform:rotate(0deg); top:10%; transition:all 0.15s linear";
        document.getElementById('button2').style="display:block;";
        document.getElementById('button3').style="transform:rotate(0deg); top:90%; transition:all 0.15s linear;";
        document.querySelector('body').style="overflow-y:visible;";

        setTimeout(function() {
            for (i=0; i<document.getElementsByClassName('snb').length; i++) 
            {document.getElementsByClassName('snb')[i].style="left:100%; overflow:hidden;"}
        },500)

        lnb_state=0;
    }
}


// Mobile : LNB → SNB
function clickSnb(a) {
    document.getElementsByClassName('lnb_mobile')[0].style="height:calc(100vh - 64px); left:-100%; transition:left 0.5s;";
    document.getElementsByClassName('snb')[a].style="left:0; height:calc(100vh - 64px); overflow:visible; transition:left 0.5s;";        
}


// Mobile : SNB → LNB
function backLnb(a) {        
    document.getElementsByClassName('snb')[a].style="left:100%; height:calc(100vh - 64px); overflow:hidden; transition:left 0.5s;";
    
    document.getElementsByClassName('lnb_mobile')[0].style="left:0; height:calc(100vh - 64px);  transition:left 0.5s;";    
}


// Mobile : MOTOR SHOW & AWARDS
function mobileNav(a) {
    document.getElementsByClassName('show_mobile')[0].style="top:0;";
    document.getElementsByClassName('show_mobile_carousel')[a].style="display:flex;";
}

function exitMobileNav(a) {
    document.getElementsByClassName('show_mobile')[0].style.top="";
    document.getElementsByClassName('show_mobile_carousel')[a].style="display:none;";
}