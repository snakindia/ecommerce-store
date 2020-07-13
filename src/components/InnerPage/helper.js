export const hidePrevButton = (add) => {
    const htmlElement = document.getElementsByClassName('ril-prev-button')[0];
    if(add) {
        htmlElement.classList.add('hide-btn');
    } else {
        htmlElement.classList.remove('hide-btn');
    }
}

export const hideNextButton = (add) => {
    const htmlElement = document.getElementsByClassName('ril-next-button')[0];
   if(add) {
       htmlElement.classList.add('hide-btn');
   }
    else {
       htmlElement.classList.remove('hide-btn');
   }
}

