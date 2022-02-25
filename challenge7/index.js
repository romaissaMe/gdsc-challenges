var pics=["url(wallpaper.jpg)","url(wallpaper2.jpg)","url(wallpaper3.jpg)","url(wallpaper4.jpg)"
];
var container=document.getElementsByClassName("div1")[0];
function changeBg(){
        var index=Math.floor(pics.length*Math.random());
        container.style.backgroundImage = pics[index];
        console.log('hey');
    
}

setInterval(changeBg,1000);
console.log('hey');



 