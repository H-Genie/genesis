var currentSlide = 0;        
var nextSlide;
var mySlide = document.getElementsByClassName('js_slide');


var slide_state=0;

function slide(a) {
    slide_state=1;
    for(i=0; i<document.getElementsByClassName('time_indicator').length; i++) {
        document.getElementsByClassName('time_indicator')[i].style="display:none;";}

        
    nextSlide = a;
    indexDiffer = nextSlide - currentSlide;
    
    if(indexDiffer == 1 ) {
        mySlide[nextSlide].style="left:0; transition:left 0.7s;";
        for (i=0; i<mySlide.length; i++) {mySlide[i].style.zIndex = i+1;}                    
        setTimeout(function(){mySlide[currentSlide].style="left:-100%;"; currentSlide=nextSlide;},700)      
    }
    
    else if(indexDiffer > 1) {
        for(i=0; i<indexDiffer-1; i++) {
            mySlide[currentSlide + i+1].style="left:-100%; transition:left 0.7s" + " " + i*0.2 + "s;";            
        }
        for (i=0; i<mySlide.length; i++) {
            mySlide[i].style.zIndex=i+1;
        }
        mySlide[nextSlide].style="left:0; transition:left 0.7s" + " " + (indexDiffer-2)*0.2 + "s;";        
        setTimeout(function(){mySlide[currentSlide].style="left:-100%;"; currentSlide=nextSlide;},700)
    }

    else if(indexDiffer == -1) {
        mySlide[nextSlide].style="left:0; transition:left 0.7s;";                
        for (i=0; i<mySlide.length; i++) {
            mySlide[i].style.zIndex=mySlide.length-i;
        }
        setTimeout(function(){mySlide[currentSlide].style="left:100%;"; currentSlide=nextSlide;},700)
    }
    
    else if(indexDiffer < -1) {
        for(i=0; i < Math.abs(indexDiffer)-1; i++) {
            mySlide[currentSlide - i-1].style="left:100%; transition:left 0.7s" + " " + i*0.2 + "s;";
        }
        for (i=0; i<mySlide.length; i++) {mySlide[i].style.zIndex=mySlide.length-i;}
       
        mySlide[nextSlide].style="left:0; transition:left 0.7s" + " " + (Math.abs(indexDiffer)-2)*0.2 + "s;";
        setTimeout(function(){mySlide[currentSlide].style="left:100%;"; currentSlide=nextSlide;},700);                
    }

    //common
    for(i=0; i<mySlide.length; i++) {
    document.getElementsByClassName('js_bullet')[i].style="background-color: #cd9a81;"
    } document.getElementsByClassName('js_bullet')[a].style="background-color: #fff;"
}



function auto () {
    
    document.getElementsByClassName('indicator_fill')[0].style="width:100%; transition:width 6s linear;"
    
    setTimeout(function() {    
        if(slide_state==0) {
            document.getElementsByClassName('time_indicator')[0].style="display:none;";
            document.getElementsByClassName('time_indicator')[1].style="display:block;";
            document.getElementsByClassName('indicator_fill')[1].style="width:100%; transition:width 6s linear;"

            mySlide[1].style="left:0; transition:left 0.7s;";
            for (i=0; i<mySlide.length; i++) {mySlide[i].style.zIndex = i+1;}
            setTimeout(function(){mySlide[0].style="left:-100%;";},700)
            for(i=0; i<mySlide.length; i++) {document.getElementsByClassName('js_bullet')[i].style="background-color: #cd9a81;"}
            document.getElementsByClassName('js_bullet')[1].style="background-color: #fff;";    
            currentSlide=1;
        }        
    },6000);


    setTimeout(function() {
        if(slide_state==0) {
            document.getElementsByClassName('time_indicator')[1].style="display:none;";
            document.getElementsByClassName('time_indicator')[2].style="display:block;";
            document.getElementsByClassName('indicator_fill')[2].style="width:100%; transition:width 6s linear;"
            
            mySlide[2].style="left:0; transition:left 0.7s;";
            for (i=0; i<mySlide.length; i++) {mySlide[i].style.zIndex = i+1;}
            setTimeout(function(){mySlide[1].style="left:-100%;";},700)
            for(i=0; i<mySlide.length; i++) {document.getElementsByClassName('js_bullet')[i].style="background-color: #cd9a81;"}
            document.getElementsByClassName('js_bullet')[2].style="background-color: #fff;";
            currentSlide=2;
        }        
    },12000);

    setTimeout(function() {
        if(slide_state==0) {
            document.getElementsByClassName('time_indicator')[2].style="display:none;";
            document.getElementsByClassName('time_indicator')[3].style="display:block;";
            document.getElementsByClassName('indicator_fill')[3].style="width:100%; transition:width 6s linear;"
            
            mySlide[3].style="left:0; transition:left 0.7s;";
            for (i=0; i<mySlide.length; i++) {mySlide[i].style.zIndex = i+1;}
            setTimeout(function(){mySlide[2].style="left:-100%;";},700)
            for(i=0; i<mySlide.length; i++) {document.getElementsByClassName('js_bullet')[i].style="background-color: #cd9a81;"}
            document.getElementsByClassName('js_bullet')[3].style="background-color: #fff;";
            currentSlide=3;
        }        
    },18000);

    setTimeout(function() {
        if(slide_state==0) {
            document.getElementsByClassName('time_indicator')[3].style="display:none;";

            mySlide[4].style="left:0; transition:left 0.7s;";
            for (i=0; i<mySlide.length; i++) {mySlide[i].style.zIndex = i+1;}
            setTimeout(function(){mySlide[3].style="left:-100%;";},700)
            for(i=0; i<mySlide.length; i++) {document.getElementsByClassName('js_bullet')[i].style="background-color: #cd9a81;"}
            document.getElementsByClassName('js_bullet')[4].style="background-color: #fff;";
            currentSlide=4;
        }        
    },24000);    
}