const buttons = document.querySelectorAll(".pImg");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        productDesc(button.id);
    });
});

function productDesc(productId) {
    const descriptionParagraphs = document.querySelectorAll(".pDesc");
    
    // Hide all description paragraphs
    descriptionParagraphs.forEach(paragraph => {
        paragraph.style.display = "none";
    });

    // Show the description paragraph corresponding to the clicked button
    const descriptionId = "desc" + productId.charAt(0).toUpperCase() + productId.slice(1);
    const targetParagraph = document.getElementById(descriptionId);
    if (targetParagraph) {
        targetParagraph.style.display = "block";
    }
}