document.addEventListener('DOMContentLoaded', () => {
    const forgiveBtn = document.getElementById('forgiveBtn');
    const dontForgiveBtn = document.getElementById('dontForgiveBtn');
    const message = document.getElementById('message');
    const forgiveImage = document.getElementById('forgiveImage');

    forgiveBtn.addEventListener('click', () => {
        message.classList.remove('hidden');
        message.textContent = "แต้งกิ้วค้าบบ จะไม่ทำอีกแล้วว";

        // Display the image by removing the 'hidden' class and adding fade-in effect
        forgiveImage.classList.remove('hidden');
        forgiveImage.style.opacity = 1;
    });

    // No additional functionality for the Don't Forgive button
});
