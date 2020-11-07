let leftMountain = document.querySelector('.left-mountain');
let rightMountain = document.querySelector('.right-mountain');

window.onscroll = () => {
    leftMountain.style.left = `-${scrollY/40}%`;
    rightMountain.style.right = `-${scrollY/40}%`;
}