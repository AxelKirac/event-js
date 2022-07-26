const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  //console.log(e.target.classList[1])
  //console.log(getElapsedTime())
  let color = e.target.classList[1]

  const selectDisplaysquare = document.querySelector('.displayedsquare-wrapper');
  const newDiv = document.createElement('div');
  newDiv.classList.add('displayedsquare');
  

  selectDisplaysquare.appendChild(newDiv);
  newDiv.style.backgroundColor = color;
  

  const actionhist = document.querySelector('ul');
  const newli = document.createElement('li');
  actionhist.appendChild(newli);
  newli.innerHTML = getElapsedTime() + ' Un nouveau square create'
}



const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)

}

function generateRandomCode() {
    var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
     return myRandomColor;
  }

  const randomColorHex = () => {
    let rndRed = parseInt(Math.random() * 256);// Random Color
    let rndGreen = parseInt(Math.random() * 256);// Random Color
    let rndBlue = parseInt(Math.random() * 256);// Random Color
    return `#${rndRed.toString(16)}${rndGreen.toString(16)}${rndBlue.toString(16)}`;
  };

  const gDelete = (query) => {
    const elems = document.querySelector(query);
    while(elems.childNodes.length > 0)
    {
      elems.removeChild(elems.childNodes[elems.childNodes.length - 1]);
    } 
  };
  
  const logKey = (e) => {

    
        switch(e.keyCode)  
      {
          case 32:
            document.body.style.backgroundColor = randomColorHex();
            break;
        }
        const log = document.querySelector('ul');
        const newLog = document.createElement('li');
        newLog.innerText = `[${getElapsedTime()}] Spacebar key has been pressed`;
        log.appendChild(newLog);

        const remlog = newLog.remove()
        log.addEventListener('click',remlog);
    };
    
    const bodyElt = document.querySelector('body');
    
    
    bodyElt.addEventListener('keyup', logKey);
    









