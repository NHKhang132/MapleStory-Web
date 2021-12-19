const island = document.querySelectorAll(".island-hover")
console.log(island)

const img = document.querySelectorAll(".island-img")
console.log(img)

const modal = document.getElementById("modal")

var name;

island[0].addEventListener('click', function(){
    name = 'VICTORY ISLAND'
    des = "Victoria Island, one of the major landmasses in Maple World, is home to the bustling trade hub of Henesys. Other notable landmarks on the island include the Six Path Crossway, a crossroads that connects many major towns, including Perion, home base to the Warriors, Ellinia, hometown of the Magicians, Kerning City, hideout of the Thieves, and Lith Harbor, a major port and fishing village. Another port, Nautilus Harbor, is home to the Pirates and their floating city/submarine, fashioned after a giant whale."
    img[0].src = '../Maple/world/victoryisland/victoriaisland.jpg'
    img[1].src = '../Maple/world/victoryisland/area1.png'
    img[2].src = '../Maple/world/victoryisland/area2.jpg'
    img[3].src = '../Maple/world/victoryisland/area3.png'
    img[4].src = '../Maple/world/victoryisland/Monster.png'
    return chooseisland();
})

island[1].addEventListener('click', function(){
    name = 'MAPLE ISLAND'
    des = "Maple Island, a small landmass with two towns, is where most Explorers begin their journey. In the center lies Amherst, the Island's biggest town and home to its best weapon shop. To the south lies Southperry, a port where Explorers can charter ships to Lith Harbor."
    img[0].src = '../Maple/world/mapleisland/mapleisland.jpg'
    img[1].src = '../Maple/world/mapleisland/area1.png'
    img[2].src = '../Maple/world/mapleisland/area2.jpg'
    img[3].src = '../Maple/world/mapleisland/area3.png'
    img[4].src = '../Maple/world/mapleisland/monster.png'
    chooseisland();
})

island[12].addEventListener('click', function(){
    name = 'LUDUS LAKE'
    des = "A massive lake sporting two islands, Ludus Lake's most famous city is Ludibrium, which is held aloft by the two towers on each island. Ludibrium is entirely made out of plastic construction blocks and sentient toy monsters prowl outside its borders."
    img[0].src = '../Maple/world/luduslake/luduslake.jpg'
    img[1].src = '../Maple/world/luduslake/area1.jpg'
    img[2].src = '../Maple/world/luduslake/area2.png'
    img[3].src = '../Maple/world/luduslake/area3.png'
    img[4].src = '../Maple/world/luduslake/monster.png'
    chooseisland();
})

function chooseisland(){
    const islandName = document.getElementById("island-name")
    const islandDes = document.getElementById("island-des")

    islandName.innerText = name;
    islandDes.innerText = des;

    modal.style.display = 'block';
}

function xbtn_onclick(){
    modal.style.display = 'none'
}



