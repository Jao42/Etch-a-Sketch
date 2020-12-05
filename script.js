let container = document.querySelector('.container');
let defaultSideSize = 16;
let myDivs;
let containerSideSize = 600;

function divCreate(sideSize = defaultSideSize) {

  for(let i = 0; i < sideSize**2; i++) {
    container.appendChild(document.createElement('div'));
  }

  container.setAttribute('style', `grid-template-columns: repeat(${sideSize}, 1fr); grid-template-rows: repeat(${sideSize}, 1fr);
  width: ${containerSideSize}px; height: ${containerSideSize}px;`)

  container.style.left = `calc(50% - ${parseInt(container.style.width) / 2}px)`;

  myDivs = document.querySelectorAll('.container > div');

  myDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.setAttribute('style', 'background-color: blue;')

    })
  })
}

divCreate();



resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    
  myDivs.forEach(div => div.remove());

  newContainerWidth = parseInt(prompt('define the side size(default = 16):'));
  divCreate(newContainerWidth);  
})




