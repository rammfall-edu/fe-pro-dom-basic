export const paintCards = () => {};

export const findElement = () => {
    let likedLi = dociment.getElementsByClassName('likedItem');
    for ( let i = 0; i < likedLi.length; i++) {
        likedLi[i].style.backgroundColor = "blue";
    }
};
