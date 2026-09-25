(function () {
    "use strict";

    function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }

        var textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        var copied = false;
        try {
            copied = document.execCommand("copy");
        } finally {
            document.body.removeChild(textarea);
        }
        return copied ? Promise.resolve() : Promise.reject(new Error("Copy failed"));
    }

    function setupCopyButtons() {
        document.querySelectorAll("[data-copy-target]").forEach(function (button) {
            button.addEventListener("click", function () {
                var target = document.getElementById(button.getAttribute("data-copy-target"));
                if (!target) return;

                copyText(target.textContent)
                    .then(function () {
                        var icon = button.querySelector("i");
                        if (icon) icon.className = "fa-solid fa-check";
                        button.setAttribute("aria-label", "Copied");
                        setTimeout(function () {
                            if (icon) icon.className = "fa-regular fa-copy";
                            button.setAttribute("aria-label", "Copy BibTeX");
                        }, 1600);
                    })
                    .catch(function () {
                        button.setAttribute("aria-label", "Copy unavailable");
                    });
            });
        });
    }

    function setupImageModal() {
        var modal = document.getElementById("image-modal");
        var modalImage = document.getElementById("modal-image");
        var closeButton = modal ? modal.querySelector(".modal-close") : null;
        if (!modal || !modalImage || !closeButton) return;

        function closeModal() {
            modal.classList.remove("open");
            modal.setAttribute("aria-hidden", "true");
            modalImage.src = "";
            document.body.style.overflow = "";
        }

        document.querySelectorAll(".zoomable").forEach(function (image) {
            image.addEventListener("click", function () {
                modalImage.src = image.currentSrc || image.src;
                modalImage.alt = image.alt;
                modal.classList.add("open");
                modal.setAttribute("aria-hidden", "false");
                document.body.style.overflow = "hidden";
            });
        });

        closeButton.addEventListener("click", closeModal);
        modal.addEventListener("click", function (event) {
            if (event.target === modal) closeModal();
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        setupCopyButtons();
        setupImageModal();
    });
})();
