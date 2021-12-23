const scrollContainer = document.querySelector("div.classes-list");

    const classes = document.getElementById("classes");
    console.log(classes);

    const warrior = document.getElementById("warrior");
    const magican = document.getElementById("magican");
    const thief = document.getElementById("thief");
    const bowman = document.getElementById("bowman");
    const pirate = document.getElementById("pirate");

    const barItem = document.querySelectorAll(".bar-item")
    console.log(barItem)

    var name = '';
    var des = '';
    var video = '';
    var imgId = '';

    scrollContainer.addEventListener("wheel", (evt) => 
    {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

    warrior.onclick = function(){
        imgId = 'warrior1'
        name = 'WARRIOR';
        des = 'The Warrior is a solid, well-rounded character perfect for players new to MapleStory. This character excels at defense, with large amounts of health and access to powerful suits of armor. These strengths help keep the Warrior protected when engaged in close-quarters combat against hordes of monsters. Warriors can wield the widest array of weapons in the game, including everything from swords and axes to spears and blunt weapons, as well as shields, and can specialize in their favorites as they level up. Warriors hail from the town of Perion, located in the northern highlands of Victoria Island.';
        video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/J_7nyuk43Mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        barItem[0].classList.add('per80')
        barItem[1].classList.add('per80')
        barItem[2].classList.add('per60')
        barItem[3].classList.add('per40')
    }
    magican.onclick = function(){
        imgId = 'magican1'
        name = 'MAGICAN';
        des = 'The Magician may look fragile, but this powerful magic-user can obliterate enemies from afar with devastating spells. With a large amount of mana, the Magician can cast elemental or supportive skills from a distance while characters stronger in melee combat engage monsters up close. The Magician is perfect for Party Quests, Boss Fights, hunting and other activities that require elemental power. The Magician calls the town of Ellinia, located in the eastern forest of Victoria Island, home.'
        video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/1IqZMGNN5No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        barItem[0].classList.add('per80')
        barItem[1].classList.add('per40')
        barItem[2].classList.add('per80')
        barItem[3].classList.add('per60')
    }
    bowman.onclick = function(){
        imgId = 'bowman1'
        name = 'BOWMAN';
        des = 'Bowmen are nimble, long-range snipers. They have a variety of skills to help attack, evade danger, buff their damage, and launch arrows at groups of monsters. Bowmen can attack an enemy horde with arrow barrages, but are strongest attacking single targets from afar, as their long range is balanced by modest HP. Bowmen call the bustling town of Henesys, located in the southern part of Victoria Island, their home.'
        video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/VJYtM9JYZ9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        barItem[0].classList.add('per80')
        barItem[1].classList.add('per40')
        barItem[2].classList.add('per80')
        barItem[3].classList.add('per100')
    }
    thief.onclick = function(){
        imgId = 'thief1'
        name = 'THIEF';
        des = "Thieves are born sneaks. They're skilled at dodging attacks and are particularly fond of stealth, using their abilities to evade enemies or hide from them entirely. While out of sight, a Thief can slip past baddies unnoticed, or get into position for a sneak attack. Armed with daggers, claws and throwing stars, a Thief can unleash a lightning-fast flurry of blows that will take monsters by surprise."
        video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/wUrbDjiGo04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        barItem[0].classList.add('per80')
        barItem[1].classList.add('per40')
        barItem[2].classList.add('per100')
        barItem[3].classList.add('per80')
    }
    pirate.onclick = function(){
        imgId = 'pirate1'
        name = 'PIRATE';
        des = "Ahoy, mateys! If it's adventure ye be seeking, then the Pirate is the class for you! These swashbuckling rogues come equipped with guns and brass knuckles, and can specialize as either a Buccaneer or Corsair depending on their preference. Buccaneers can channel their inner energy to deliver powerful strikes. Corsairs are masters of firearms and offer a variety of rapid-fire, high caliber attacks."
        video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_N-8Vx8GUkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        barItem[0].classList.add('per80')
        barItem[1].classList.add('per60')
        barItem[2].classList.add('per60')
        barItem[3].classList.add('per40')
    }


    var modal = document.getElementById("classes-detail");

    function img_onclick(){
        var Img = document.getElementById(imgId);   
        const class_name = document.getElementById("class-name");
        const class_des = document.getElementById("class-des");
        const class_video = document.getElementById("class-video");
        
        class_name.textContent = name;
        class_des.textContent = des;
        class_video.innerHTML = video;

        let cloneImg = Img.cloneNode(true);


        cloneImg.style.width = 'auto';
        cloneImg.style.height = '30%';
        cloneImg.style.position = 'absolute';
        cloneImg.style.bottom = '10%';
        cloneImg.style.right = '0%';
        cloneImg.style.zIndex = '5';
        cloneImg.style.visibility = 'visible';
        
        cloneImg.id = 'cloneImg';

        modal.style.display = 'block';
        modal.appendChild(cloneImg);

        var position = 0;
        var height = 30;
        var animate = setInterval(() => {
            position+=0.22;
            height+=0.2;
            if (position>55)
            {
                clearInterval(animate);
            }
            cloneImg.style.right = position + '%';   
            cloneImg.style.height = height + '%'; 
        }, 0.1);

        var opacity = 0;
        var animate2 = setInterval(() => {
            opacity += 0.01
            if (opacity>1)
            {
                clearInterval(animate2);
            }
            modal.style.opacity = opacity; 
        }, 0.5);
             
    }

    function xbtn_onclick(){
        const class_video = document.getElementById("class-video");
        class_video.innerHTML = "";

        document.getElementById("cloneImg").remove();

        modal.style.display = 'none';

        barItem.forEach(function(Item){
            Item.classList.remove('per100')
            Item.classList.remove('per60')
            Item.classList.remove('per80')
            Item.classList.remove('per40')
        })
    }

    
    





    



