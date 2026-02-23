const searchInput =
    document.getElementById("searchInput");
const recipeCards =
    document.querySelectorAll(".recipe-card");

searchInput.addEventListener("keyup", function() {
    const searchValue =
        searchInput.value.toLowerCase();

    recipeCards.forEach(function(card) {
        const recipeName =
            card.
        querySelector("h3").textContent.toLowerCase();

        if (recipeName.include(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    })
})