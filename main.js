const arrow = document.querySelector(`#arrow`);

const addShowNav = document.querySelector(`.nav-container`);

arrow.addEventListener(`click`,() => {
    arrow.classList.toggle(`rotate`);

    let navIsClose = !addShowNav.classList.contains(`show-nav`);  

    if(navIsClose) { 
        addShowNav.classList.remove(`hide-nav`);
        addShowNav.classList.add(`show-nav`);
    } else {
        addShowNav.classList.remove(`show-nav`);
        addShowNav.classList.add(`hide-nav`);
    }
    
})
