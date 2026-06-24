document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll(".lang-btn");
    const langDescriptions = document.querySelectorAll(".lang-desc");

    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedLang = button.getAttribute("data-lang");

            // 1. Update active button styles
            langButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // 2. Animate and swap descriptions
            langDescriptions.forEach(desc => {
                if (desc.id === `desc-${selectedLang}`) {
                    desc.classList.remove("hidden");
                } else {
                    desc.classList.add("hidden");
                }
            });
        });
    });
});