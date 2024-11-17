
const triggerElement = document.getElementById("trigger");
const targetImage = document.getElementById("target");


const originalImage = "picA.jpg";
const hoverImage = "picB.jpg";


triggerElement.addEventListener("mouseover", function() {
    targetImage.src = hoverImage;
});


triggerElement.addEventListener("mouseout", function() {
    targetImage.src = originalImage;
});
