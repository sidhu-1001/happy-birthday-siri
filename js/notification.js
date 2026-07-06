/* ==================================================
   NOTIFICATION
================================================== */

export function startNotification() {

    const screen = document.getElementById("notification-screen");
    const button = document.getElementById("open-notification");
    const card = document.querySelector(".notification-card");
    const wrapper = document.querySelector(".notification-wrapper");

    screen.classList.add("active");

    function openApp(e) {

        e.preventDefault();

        console.log("BUTTON PRESSED");

        wrapper.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-5px)" },
                { transform: "translateX(5px)" },
                { transform: "translateX(-4px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 180
            }
        );

        card.style.transition = ".55s ease";
        card.style.transform = "scale(1.08)";
        card.style.opacity = "0";

        setTimeout(() => {
            window.nextScreen();
        }, 500);

    }

    // Desktop
    button.addEventListener("click", openApp);

    // Mobile
    button.addEventListener("touchend", openApp);

    // Pointer devices
    button.addEventListener("pointerup", openApp);

}