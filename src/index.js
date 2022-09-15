export const paintCards = () => {
    let listLi = document.getElementsByTagName("li");
    for (let i = 0; i < listLi.length; i++){
    if (!(i % 2)){
    listLi[i].style.backgroundColor = "red";
    }; // end if
    }; //end of cycle    
    }; //end function
    
    export const findElement = () => {
    let listLi = document.getElementsByClassName('likedItem');
    for (let i = 0; i < listLi.length; i++){
        listLi[i].style.backgroundColor = "blue";
    } // end for
    };// end function


