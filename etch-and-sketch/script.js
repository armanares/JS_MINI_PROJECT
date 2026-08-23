const container = document.querySelector('.container');

for(let i=0;i<16*16;i++) {
  const div = document.createElement('div');
  div.classList.add('grid-item');
  container.appendChild(div);
}

let input = document.querySelector('.input');
let btn = document.querySelector('.btn');

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
  item.addEventListener('click', () => {
    item.style.backgroundColor = 'black';
  });
});


btn.addEventListener('click', (e)=>{
  e.preventDefault();
  let size = input.value;
  if(size < 1 || size > 50) {
    alert('please enter valid number between 1 and 50')
  }else {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i=0;i<size*size;i++) {
      const div = document.createElement('div');
      div.classList.add('grid-item');
      container.appendChild(div);
    }


    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(item => {
    item.addEventListener('click', () => {
    item.style.backgroundColor = 'black';
   });
  });

  }
  
});



