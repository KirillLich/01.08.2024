const pic = document.querySelector('.main-pic');
const navigator = document.querySelector('.navigator');

const tl = new TimelineMax();

tl.from(pic, 1, { height: "0%" })