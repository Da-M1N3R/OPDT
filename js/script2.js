const myBox = document.getElementById("myBox");
const myImg = [
  "./images/Boa_Hancock_Outfit_in_Stampede.webp",
  "./images/Blackbeard_Anime_Concept_Art.webp",
  "https://optc-db.github.io/api/images/full/transparent/2/900/2963.png",
  "https://optc-db.github.io/api/images/full/transparent/2/900/2964.png"
]
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let num = 0

function changePic(direction) {
  if (direction === "prev") {
    num--; // Decrement for previous image
    if (num < 0) {
      num = myImg.length - 1; // Wrap around to last image on underflow
    }
  } else if (direction === "next") {
    num++; // Increment for next image
    if (num === myImg.length) {
      num = 0; // Wrap around to first image on overflow
    }
  }

  const imgElement = myBox.querySelector("img"); // Get the image element

  if (imgElement) {
    imgElement.src = myImg[num];
  } else {
    console.error("Image element not found!");
  }
}

// myBox.addEventListener("click", changePic);
prevBtn.addEventListener("click", () => changePic("prev"));
nextBtn.addEventListener("click", () => changePic("next"));
document.addEventListener("keydown", event => {
  console.log("Hello there")
  if(event.key.startsWith("Arrow")){
    event.preventDefault()

    switch(event.key){
      case "ArrowLeft":
        console.log("ArrowLeft pressed");
        changePic("prev");
        break;
      case "ArrowRight":
        console.log("ArrowRight pressed");
        changePic("next");
        break;
    }
  }
})
