console.log('welcome to my music player');

// Initialize the variables

let audioElement=new Audio('audio1.mp3');
let songIndex=0;
let masterPlay=document.getElementById('master-play');
let soundBar=document.getElementById('soundbar');
let songItems=Array.from(document.getElementsByClassName('list-number'));
let bottomName=document.getElementById('bottom-name');
let bottomImage=document.getElementById('bottom-image');
let singer=document.getElementById('singer');
const songs=[
    {songName:"Raataan Lambiyan", filePath:"audio1.mp3",songImage:"Hindi1.jpg",bottomSinger:"Jubin Nautiyal"},
    {songName:"Kalakar", filePath:"audio2.mp3",songImage:"Latest1.jpg",bottomSinger:"Khan Saab"},
    {songName:"Care Ni Karda", filePath:"audio3.mp3",songImage:"Hindi3.jpg",bottomSinger:"Sweetaj Brar"},
    {songName:"Pani Pani", filePath:"audio4.mp3",songImage:"Latest3.jpg",bottomSinger:"Ninja"},
    {songName:"Chitta", filePath:"audio5.mp3",songImage:"Hindi5.jpg",bottomSinger:"Manan Bhardwaj"},
    {songName:"Unstoppable", filePath:"audio6.mp3",songImage:"English1.jpg",bottomSinger:"SIA"},
]
// console.log(songs[5].songName);
// for (let i=0;i<=5;i++){
// console.log(songs[i].filePath);


// }

// songItems.forEach(element => {
//     console.log(element,i);
// });


// let songId={0:songs[i]};
// console.log(songs[i]);
// songId[i].onclick=function(){

// }



// (document.getElementsByClassName('playlist')).forEach(()=>{
//     Element.addEventListener('click',()=>{
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//         audioElement.play();
//     })
// })

// let songId = {0:songs[0], 1:songs[1]}
// Handle play/pause clicks

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        
    }
})

// Update Seekbar

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    soundBar.value=progress;
})
soundBar.addEventListener('change',()=>{
    audioElement.currentTime=(soundBar.value*audioElement.duration)/100;
})
