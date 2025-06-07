const navBar = document.querySelector(".navbar");

let isClicked = true;

let showOrHide = function () {
  if (isClicked) {
    navBar.style.display = "flex";
    isClicked = false;
  }else{
    navBar.style.display = 'none';
    isClicked = true;
  }
};
