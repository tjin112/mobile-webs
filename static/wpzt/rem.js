// 1rem = 100px     
function setRem() {
    var rate = 100/750; 
    var width = document.documentElement.clientWidth;  //获取浏览器可视区域宽
    console.log(width);
    if(width > 750) {
        width = 750;
    }
    document.querySelector('html').style.fontSize = width * rate + 'px';
}
setRem();
window.onresize = function () {
    setRem();
}
