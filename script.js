document.addEventListener("DOMContentLoaded", () => {
    function copySymbol(element) {
        const text = element.innerText;
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        // Show the "Copied" popup
        const popup = document.getElementById("copied-popup");
        popup.classList.add("show");

        // Hide the popup after 3 seconds
        setTimeout(() => {
            popup.classList.remove("show");
        }, 1000); // 3000ms = 3 seconds
    }

    // Attach event listeners to symbol boxes
    document.querySelectorAll(".symbol-box").forEach(box => {
        box.addEventListener("click", function () {
            copySymbol(this);
        });
    });
});

