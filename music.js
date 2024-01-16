var audioplayer=document.getElementById("audioplayer")
var playbt=document.getElementById("playbtn")
var pausebt=document.getElementById("pausebtn")
var restartbt=document.getElementById("restartbtn")
var forwardbt=document.getElementById("forwardbtn")
var backwardbt=document.getElementById("backwardbtn")
var halfspeedbt=document.getElementById("halfspeedbtn")
var highspeedbt=document.getElementById("highspeedbtn")
// var speed =document.getElementById('pl')
let seekbar=document.getElementById("pl")
let speed=document.getElementById("pl1")

playbt.addEventListener('click',function(){
    audioplayer.play()
})
pausebt.addEventListener('click',function(){
    audioplayer.pause()
    console.log(audioplayer.currentTime)
})
restartbt.addEventListener('click',function(){
    audioplayer.currentTime=0
})
forwardbt.addEventListener('click',function(){
    audioplayer.currentTime=audioplayer.currentTime+10
})
backwardbt.addEventListener('click',function(){
    audioplayer.currentTime=audioplayer.currentTime-10
})
halfspeedbt.addEventListener('click',function(){
    audioplayer.playbackRate=0.5
})
highspeedbt.addEventListener('click',function(){
    audioplayer.playbackRate=2
})

var playlist=[
    {
        id1:1,
        title:"Hass-hass",
        musicImg:"hass.jpg",
        music:"Hass Hass_64-(DJPunjab).mp3",
        artist:"DILJIT DOSANJH"
    },
    {
        id1:2,
        title:"Moon-light",
        musicImg:"moonlight.jpg",
        music:"moonlight.mp3",
        artist:"HARNOOR"   
    }
    ,
    {
        id1:3,
        title:"Chogada Tara",
        musicImg:"chogada.jpg",
        music:"a.mp3",
        artist:"DARSHAN RAVAL"   
    }
    ,
    {
        id1:4,
        title:"You and Me",
        musicImg:"you.jpg",
        music:"you and me.mp3",
        artist:"SHUBH"   
    }
]
var playlock=document.getElementById("card")

for(var i=0;i<playlist.length;i++){
    playlock.innerHTML+=`<div onclick="playfunction(${playlist[i].id1})"class="box1" id="card1"><img src="${playlist[i].musicImg}" alt="">
    <h3>${playlist[i].title} </h3> <br>
    <h5> ${playlist[i].artist}</h5>
</div>`
}
var Gaana=document.getElementById("gaana")
function playfunction(id1){
    Gaana.innerHTML=`<img src=${playlist[id1-1].musicImg}
    "alt="" height="200px" width="200px" box-shadow: "5px 5px 5px black">`
    audioplayer.src=`${playlist[id1-1].music}`
    
}

audioplayer.ontimeupdate=function(){
    speed.style.width=Math.floor(audioplayer.currentTime*100/audioplayer.duration)+"%"
}
seekbar.addEventListener('click',function(e){
 audioplayer.currentTime = ((e.offsetX/seekbar.offsetWidth) * audioplayer.duration)
    
})
