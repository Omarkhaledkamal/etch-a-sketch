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
    tile.classList.add("row")
    sketchContainer.appendChild(tile);
    // columns
    for (let j = 0; j < tiles; j++) {
      let innerTile = document.createElement("div");
      innerTile.classList.add("chanbg");
      tile.appendChild(innerTile);
    }
  }
  
  const tileDivs = document.querySelectorAll(".chanbg");
  tileDivs.forEach((tile) => {
    tile.style.backgroundColor = "#eee";
    tile.addEventListener("mouseover", () => {
      tile.style.backgroundColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
    })
  })  
}

// default 16 tile grid
createTiles(tiles);

const tilesButton = document.querySelector("button");
tilesButton.addEventListener("click", () => {
  const sketchDivs = document.querySelectorAll(".row");
  const tileDivs = document.querySelectorAll(".chanbg")
  tiles = Number(prompt("Enter A Valid Tiles Number From 16 - 100"));
  while ( tiles < 16 || tiles > 100) {
    alert ( " ERROR ");
    tiles = Number(prompt("Enter A Valid Tiles Number From 16 - 100"));
  }
  // remove old grid
  for (let i = 0; i < tiles; i++) {
    tileDivs.forEach(tile => {
      tile.remove();
    })
    sketchDivs.forEach(div => {
      div.remove();
    })
  }
  // create new grid
  createTiles(tiles);
})