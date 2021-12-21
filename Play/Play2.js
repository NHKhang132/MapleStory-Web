const playnowbtn = document.getElementById('playnow-btn')
const downloadbtn = document.getElementById('download-btn')
const modal = document.getElementById('modal')
const download = document.getElementById('download')
const signin = document.getElementById('signin')
const signup = document.getElementById('signup')
const signinbtn = document.getElementsByClassName("signin-btn")
const signupbtn = document.getElementsByClassName("signup-btn")
const hr = document.getElementsByClassName('signhr')
console.log(playnowbtn)

playnowbtn.onclick = function(){
    modal.style.display = 'block';
    signin.style.display = 'block';
}

downloadbtn.onclick = function(){
    modal.style.display = 'block';
    download.style.display = 'block';
}

// signinbtn[0].onclick = function(){
//     signin.style.display = 'block'
//     signup.style.display = 'none'
//     var left = 50;
//     var hranimate1 = setInterval(() => {
//         left-=1;
//         if (left<20)
//         {
//             clearInterval(hranimate1);
//         }
//         hr[0].style.left = left + '%';   
//     }, 0.1);
// }

signupbtn[0].onclick = function(){
    signup.style.display = 'block'
    signin.style.display = 'none'    
    var left = 20;
    var hranimate2 = setInterval(() => {
        left+=1;
        if (left>50)
        {
            clearInterval(hranimate2);
        }
        hr[1].style.left = left + '%';   
    }, 0.1);
}

signinbtn[1].onclick = function(){
    signin.style.display = 'block'
    signup.style.display = 'none'
    var left = 50;
    var hranimate1 = setInterval(() => {
        left-=1;
        if (left<20)
        {
            clearInterval(hranimate1);
        }
        hr[0].style.left = left + '%';   
    }, 0.1);
}

// signupbtn[1].onclick = function(){
//     signup.style.display = 'block'
//     signin.style.display = 'none'
//     var left = 20;
//     var hranimate2 = setInterval(() => {
//         left+=1;
//         if (left>50)
//         {
//             clearInterval(hranimate2);
//         }
//         hr[1].style.left = left + '%';   
//     }, 0.1);
// }

function xbtn_onclick(){
    modal.style.display = 'none'
    signin.style.display = 'none'
    signup.style.display = 'none';
    download.style.display = 'none';
}