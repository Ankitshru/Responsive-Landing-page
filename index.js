// Drop Down menu hide and unhides
function dropDownMenu(){
    const dropMenuFeature = document.querySelector('#features');
    const dropMenuCompany = document.querySelector('#company')

    // inner list elements 
    const innerList = document.querySelector('.ul-inner');
    const innerList2 = document.querySelector('.ul-inner2');
    // icons elements
    
    const menuparent = document.querySelector('.main-header');
    const menuOption = document.querySelector('.menu-icon');
    const navbarmobile = document.querySelector('.navbar');

    [dropMenuCompany, dropMenuFeature, menuOption].forEach(menu => {
        menu.addEventListener('click', (e) => {
            if (dropMenuFeature.childNodes[0] === e.target){
                if (innerList.classList.contains('ul-inner')){
                    innerList.classList.remove('ul-inner');
                    innerList.classList.add('showHiddenList');
                    
                }else{
                    innerList.classList.add('ul-inner');
                    innerList.classList.remove('showHiddenList')
                   
                }
            }
            if(dropMenuCompany.childNodes[0] === e.target){
                if(innerList2.classList.contains('ul-inner2')){
                    innerList2.classList.remove('ul-inner2');
                    innerList2.classList.add('showHiddenListCompany');
                    
                }
                else{
                    innerList2.classList.add('ul-inner2');
                    innerList2.classList.remove('showHiddenListCompany');
                    
                }

            }
            if(menuparent.childNodes[3] === e.target){
                if(navbarmobile.classList.contains('navbar')){
                    navbarmobile.classList.remove('navbar');
                    navbarmobile.setAttribute('id', 'slideMenu');
                    menuOption.setAttribute('src', 'images/icon-close-menu.svg');
                }
                else{
                    navbarmobile.removeAttribute('id');
                    navbarmobile.classList.add('navbar');
                    menuOption.setAttribute('src', 'images/icon-menu.svg');
                }
            }
        });
    });
}

dropDownMenu()