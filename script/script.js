let allPets = []
let likedPets = []
let dislikedPets = []
let a=true;

const cardContainer = document.getElementById("card-container")
const pet1 = {
    id: "0",
    name: "pet1",
    age: "2",


}
const pet2 = {
    id: "1",
    name: "pet2",
    age: "2"


}
const pet3 = {
    id: "2",
    name: "pet3",
    age: "2"
}
const pet4 = {
    id: "3",
    name: "pet4",
    age: "2"
}
const pet5 = {
    id: "4",
    name: "pet5",
    age: "2"
}
allPets.push(pet1)
allPets.push(pet2)
allPets.push(pet3)
allPets.push(pet4)
allPets.push(pet5)
console.log("aaa",allPets)

let l = allPets.length;
let cmp = 0;

showCard()
function showCard(){

    console.log(cmp<l)
    cardContainer.innerHTML=``

    if(cmp<l){
      
            cardContainer.innerHTML =`     <div id="card" class="card">
                    <img src="./image/${allPets[cmp].name}.png" alt="">

                </div>`
    } 
   
    
}
function endCard(){
    cardContainer.innerHTML =` NO MORE PETS AVAILABLE `
    const btnRefresh = document.createElement('span')
    btnRefresh.setAttribute("id", "refresh-btn")
    btnRefresh.innerText="Refresh"
    document.getElementById("ignore-btn").replaceWith(btnRefresh)
    const btnLiked = document.createElement('span')
    btnLiked.setAttribute("id", "liked-btn")
    btnLiked.innerText="Liked Pets"
    document.getElementById("like-btn").replaceWith(btnLiked)
    document.getElementById("refresh-btn").addEventListener("click", function(){
        console.log("aaa")
        cmp = 0;
        likedPets = [];
        dislikedPets = [];
        const btnIgnore = document.createElement('span')
        btnIgnore.setAttribute("id", "ignore-btn")
        btnIgnore.innerText="Ignore"
        document.getElementById("refresh-btn").replaceWith(btnIgnore)
        const btnLike = document.createElement('span')
        btnLike.setAttribute("id", "like-btn")
        btnLike.innerText="Like"
        document.getElementById("liked-btn").replaceWith(btnLike)

 

        Events();
      
        showCard()
    
    
    })
    document.getElementById("liked-btn").addEventListener("click", function(){
        const div = document.createElement("div")
        div.className = "allLiked "
        cardContainer.innerHTML=``
        cardContainer.appendChild(div)
        likedPets.forEach(pet => {
              const div2 = document.createElement("div")
                 div2.className = "likedPets"
                 div2.style.backgroundImage = `url(./image/${pet.name}.png)`     
                div.appendChild(div2)
        })
     
    
    
     })

}
Events();
function Events(){
            document.getElementById("like-btn").addEventListener("click", function (){
                if(cmp < l ){
                    likedPets.push(allPets[cmp])
                console.log(likedPets)
                    if (cmp == l-1){
                        endCard();
                    }else {
                        cmp++;
                        showCard();
                    }
                
                }
                

            })

            document.getElementById("ignore-btn").addEventListener("click", function (){
                
                if(cmp < l ){
                    dislikedPets.push(allPets[cmp])
                console.log(dislikedPets)
                if (cmp == l-1){
                    endCard();

                }else {
                    cmp++;
                    showCard();
                    }
                }


            })
}
