const video1 = document.getElementById('video1')
const video2 = document.getElementById('video2')

video2.style.display = 'none'

setTimeout( function(){
    video1.style.display = 'none';
    video2.style.display = 'block';
    video2.style.opacity = '0';
    var opacity = 0;
    var animate = setInterval(() => {
        opacity += 0.01
        if (opacity>1)
        {
            clearInterval(animate);
        }
        video2.style.opacity = opacity; 
    }, 20);
    
}, 35000)