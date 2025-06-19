const buttons = document.querySelectorAll(".card button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const details = card.querySelector(".detailsHidden");
        
        details.classList.toggle("show");

        if (details.classList.contains("show")) {
            button.textContent = "Show less";
        }
        else {
            button.textContent = "Learn more...";
        }
    });
});