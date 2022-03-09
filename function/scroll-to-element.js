const SCROLL_OFFSET = 100;
const element = document.getElementById('elementID');

if (element && typeof element.getBoundingClientRect === 'function') {
    const topPosition = element.getBoundingClientRect().top;
    const windowScrollY =
        window.scrollY + topPosition - SCROLL_OFFSET;
    window.scrollTo(0, windowScrollY);
}