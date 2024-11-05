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
allPets.push(pet1)
allPets.push(pet2)
allPets.push(pet3)
console.log("aaa",allPets)

let l = allPets.length;
let cmp = 0;

showCard()
function showCard(){
    console.log(cmp<l)
    cardContainer.innerHTML=``

    if(cmp<l){
      
            cardContainer.innerHTML =`   <div class="img">
                 <img src="./image/${allPets[cmp].name}.png" alt="">
                </div>
                           <div class="card-text ">
                              <span onclick="addDislikedPets()"  id="ignore-btn" class="">
                                Ignore
                              </span>
                              <span onclick="addLikePets()" id="like-btn">
                                Like
                              </span>
                          </div>`
    } else {
        

    }
    
}
function addLikePets(){
    
   
    if(cmp < l ){
        likedPets.push(allPets[cmp])
    console.log(likedPets)
        if (cmp == l-1){
            cardContainer.innerHTML =`   <div class="nomore" style="color: white">
                    <p> NO MORE PETS AVAILABLE </p>
           </div>
                      <div class="card-text ">
                         <span onclick="addDislikedPets()"  id="ignore-btn" class="">
                           Ignore
                         </span>
                         <span onclick="addLikePets()" id="like-btn">
                           Like
                         </span>
                     </div>`
                document.getElementById("like-btn").innerText ="Liked Pets"
                document.getElementById("like-btn").setAttribute("id", "liked-btn")
         }else {
            showCard();
         }
       
    }
    cmp++;

}
function addDislikedPets(){
    a=true;
    
   
    if(cmp < l ){
        dislikedPets.push(allPets[cmp])
    console.log(dislikedPets)
    if (cmp == l-1){
        cardContainer.innerHTML=`FINISHED`
                 }else {
                    showCard();
                 }
    }
    cmp++;

}
