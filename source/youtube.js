// 플레이 버튼
function playVideo() {
    document.getElementById('player').style="display:block;";
    document.getElementsByClassName('play_button')[0].style="z-index:-1;";
    player.playVideo();
}

// API 코드 및 iframe 태그 생성
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// iframe 태그 속성 지정
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'PSgOtR6m0lQ',        
        events: {            
        'onStateChange': onPlayerStateChange
        }
    });
}

// 플레이어 상태 변경되었을 때 함수 (정지됐을 때 iframe 숨기기)
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PAUSED) {
        player.pauseVideo();
        document.getElementById('player').style="display:none;";
        document.getElementsByClassName('play_button')[0].style="z-index:0;";
    }
}     
