document.getElementById("send-link-btn").addEventListener("click", () => {
    const popup = document.getElementById("popup");
    popup.classList.remove("hidden");

    // Automatically enable WhatsApp button after loading animation
    setTimeout(() => {
        const whatsappBtn = document.getElementById("whatsapp-btn");
        whatsappBtn.disabled = false;
        whatsappBtn.style.backgroundColor = "green";
        whatsappBtn.style.color = "whitesmoke";
    }, 2000); // Match loading bar animation duration
});

document.getElementById("whatsapp-btn").addEventListener("click", () => {
    // Simulate going to WhatsApp and returning
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");

    // Simulate adding balance when returning
    setTimeout(() => {
        const balanceText = document.getElementById("total-assets");
        let currentBalance = parseFloat(balanceText.textContent.match(/\d+\.\d+/)[0]);
        currentBalance += 2.7; // Add $2.70 to balance
        balanceText.textContent = `Total Assets: $${currentBalance.toFixed(2)} (Bonus🎄🎅🏽)`;
    }, 1000); // Simulate delay for user returning from WhatsApp
});
