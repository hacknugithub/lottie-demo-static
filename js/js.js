document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM is ready.');
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lottie'), // Required
        path: '../anim/om.json', // Required
        renderer: 'svg', // Required
        rendererSettings: {
             // the canvas context
            scaleMode: 'noScale',
            clearCanvas: false,
            progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
            hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
          },
        loop: true, // Optional
        autoplay: true, // Optional
        name: "OM", // Name for future reference. Optional.
    });
    animation.play();
});