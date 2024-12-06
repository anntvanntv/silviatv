

    let arts = document.querySelectorAll('.art'); 


let lastBackgroundColor = '#ffffffeb';
let lastTextColor = 'black';

for (let i = 0; i < arts.length; i++) {
    let art = arts[i]; 
    let link = art.lastElementChild; 

    if (i > 0 && art.offsetTop === arts[i - 1].offsetTop) {
      
        art.style.backgroundColor = arts[i - 1].style.backgroundColor;
        link.style.color = arts[i - 1].lastElementChild.style.color;

    } else {
        lastBackgroundColor = (lastBackgroundColor === '#ffffffeb') ? 'black' : '#ffffffeb';
        lastTextColor = (lastTextColor === 'black') ? '#ffffffeb' : 'black';

        art.style.backgroundColor = lastBackgroundColor;
        link.style.color = lastTextColor;
    }
}




