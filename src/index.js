export const paintCards = () => {
    let listOfLi = document.getElementsByTagName("li");
    for (let i = 0; i < listOfLi.length; i++){
        if (!(i % 2)){
            listOfLi[i].style.backgroundColor = "red";
        }; 
    }; 
};

export const findElement = () => {
    let likedLi = dociment.getElementsByClassName('likedItem');
    for ( let i = 0; i < likedLi.length; i++) {
        likedLi[i].style.backgroundColor = "blue";
    }
};
