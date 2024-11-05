const cards = document.querySelectorAll(".card");
const result = document.querySelectorAll(".result");
let matched = 0;
let cardOne, cardTwo;
let disable = false;


function flipCard(e){
    let clickedCard = e.target;
    if(clickedCard !== cardOne && !disable){
        clickedCard.classList.add("flip");
        if(!cardOne){
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disable = true;
        let cardOneImg = cardOne.querySelector("img").src,
        cardTwoImg = cardTwo.querySelector("img").src;
        matchCards(cardOneImg,cardTwoImg)
    }
}

function matchCards(img1,img2){
    if(img1 == img2){
        matched++;
        if(matched == 8){
            cards.forEach(card => {
                card.classList.add("shake1")
            })
            setTimeout(()=> {
                shuffled();
            },1000)
        }
        cardOne.removeEventListener("click",flipCard);
        cardTwo.removeEventListener("click",flipCard);
        cardOne = cardTwo ="";
        return disable = false;
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake","flip")
        cardTwo.classList.remove("shake","flip")
        cardOne = cardTwo ="";
        disable = false;
    }, 1200);
}

function shuffled(){
    matched = 0;
    cardOne = cardTwo = "";
    disable = false;
    let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    arr.sort(() => Math.random()>0.5 ? 1:-1);
    cards.forEach((card, index) => {
        card.classList.remove("flip")
        card.addEventListener("click",flipCard)
        let imgTag = card.querySelector("img");
        imgTag.src = `Memory Card Game Images/img-${arr[index]}.png`;
    })
}
shuffled();

cards.forEach(card => {
    card.addEventListener("click", flipCard)
})