(function(){
    const header=document.querySelector('.header');

    header.innerHTML= `<div class="container">
    <div id="preloader">
        <img src="../Maple/giphy.gif">
        <br>
        <img src="../Maple/loading2.gif">
    </div>
    <a href="../Index.html"><img class="logo" src="../Maple/light-logo-full.png"></a>
    <div class="menu">
        <div class="page-btn overview">
            <div class="topBor"></div>
            <a href="../Overview/Overview.html">OVERVIEW</a>
            <div class="bottomBor"></div>
        </div>
        <div class="page-btn class">
            <div class="topBor"></div>
            <a href="../Classes/Classes.html">CLASSES</a>        
            <div class="bottomBor"></div>     
        </div>
        <div class="page-btn world">
            <div class="topBor"></div>
            <a href="../World/World.html">WORLD</a>        
            <div class="bottomBor"></div>      
        </div>
        <div class="page-btn play">
            <div class="topBor"></div>
            <a href="../Play/Play.html">PLAY</a>         
            <div class="bottomBor"></div>                     
        </div>
    </div>
</div>`
}
)();

(function () {
    const preloader = document.querySelector('#preloader'); 
    setTimeout(() => {
      preloader.style.opacity = '0';
    }, 1000);
  
    setTimeout(() => {  
      preloader.style.display = 'none'; 
    }, 1250);  
})();