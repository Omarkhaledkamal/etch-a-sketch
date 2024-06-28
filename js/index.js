// بسم الله الرحمن الرحيم


//default tiles
let tiles = 16;
// generate random colour
function randomColor(max) {
  return Math.floor(Math.random() * max);
}
// reference sketch container
const sketchContainer = document.querySelector(".sketch-container");
function createTiles(tiles) {
  // rows
  for (let i = 0; i < tiles; i++) {
    let tile = document.createElement("div");
    tile.style.cssText = "display: flex; flex-basis: 50px; flex: 1;";
    tile.classList.add("row")
    sketchContainer.appendChild(tile);
    // columns
    for (let j = 0; j < tiles; j++) {
      let innerTile = document.createElement("div");
      innerTile.style.cssText = "border: 1px solid; flex-basis: 50px; flex: 1;"
      innerTile.classList.add("chanbg");
      tile.appendChild(innerTile);
    }
  }
  
  const tileDivs = document.querySelectorAll(".chanbg");
  tileDivs.forEach((tile) => {
    tile.addEventListener("mouseover", () => {
      tile.style.backgroundColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)}`;
    })
  })  
}

// default 16 tile grid
// createTiles(tiles);
// const sketchDivs = document.querySelectorAll(".sketch-container .row");
// const tilesButton = document.querySelector("button");
// tilesButton.addEventListener("click", () => {
//   tiles = Number(prompt("Enter A Valid Tiles Number From 16 - 100"));
//   while ( tiles < 16 || tiles > 100) {
//     alert ( " ERROR ");
//     tiles = Number(prompt("Enter A Valid Tiles Number From 16 - 100"));
//   }
//   console.log(tiles);
//   // remove old grid
//   for (let i = 0; i < tiles; i++) {
//     sketchDivs.forEach((tile) => {
//       tile.removeChild("div");
//     })
//     sketchDivs.forEach((div) => {
//       sketchContainer.removeChild(div);
//     })
//   }
//   // create new grid
//   createTiles(tiles);
// })

