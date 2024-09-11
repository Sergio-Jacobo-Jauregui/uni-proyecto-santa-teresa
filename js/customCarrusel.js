window.addEventListener('load', () => {
    const customSliderTrack = document.getElementById("custom-slider-track")
    const amountImages = customSliderTrack.children.length
    const firstImage = customSliderTrack.firstElementChild
    const widthImage = firstImage.offsetWidth    
    
    const style = document.createElement('style');
    const css = `
        @keyframes slide {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(calc(-${widthImage}px * ${amountImages}));
            }
        }
    `;
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    customSliderTrack.innerHTML += customSliderTrack.innerHTML;
});