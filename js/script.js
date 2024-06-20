function getSpells(url){

    fetch(url)
    .then(res=>res.json())
    .then(data => {
        document.getElementById("spellMono").addEventListener("click", (e) => SelectSpell(e,data.spells,"mono"))
        document.getElementById("spellMulti").addEventListener("click", (e) => SelectSpell(e,data.spells,"multi"))
        document.getElementById("spellGeneral").addEventListener("click", (e) => SelectSpell(e,data.spells,"general"))
    })
}


getSpells("./json/data.json")

function modifyImgSpells(url){
    document.getElementById("spellImg").src=`./images/${url}`
}
function modifyNameSpells(e){
    document.getElementById("hearderText").textContent = e;
}
function modifyCostSpells(e){
    document.getElementById("cost").textContent = e;
}
function modifyDescriptionSpells(e){
    document.getElementById("description").textContent = e;
}
function modifyDefenseSpells(e){
    document.getElementById("defense").textContent = e;
}

function modifySpells(url,title,cost,description,defense){
    document.getElementById("cardContainer").classList.add("active");
    modifyImgSpells(url);
    modifyNameSpells(title);
    modifyCostSpells(cost);
    modifyDescriptionSpells(description);
    modifyDefenseSpells(defense);
}

function SelectSpell(e,data,target){    
    let newArray = [];
    if(target === "mono" || target === "multi"){
        const array = [];
        data.forEach((spell)=>{
            if(spell.targets === `${target}`){
                array.push(spell)
            }
        })
        newArray = arrayRandom(array);
        console.log(newArray);
        
    }else{
        newArray = arrayRandom(data);
        console.log(newArray);
    }
    modifySpells(newArray.url,newArray.title,newArray.cost,newArray.description,newArray.defense)
}


function arrayRandom(array){
    return array[Math.floor(Math.random()*array.length)];
}





