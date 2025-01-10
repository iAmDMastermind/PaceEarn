document.addEventListener("DOMContentLoaded", () => {
    const statementButtons = document.querySelectorAll(".statement-btn");
    const formContainer = document.querySelector(".form-container");

    statementButtons.forEach(button => {
        button.addEventListener("click", () => {
            formContainer.style.display = "block";
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target === formContainer) {
            formContainer.style.display = "none";
        }
    });
});



    // Update Earnings Logic
    document.getElementById("update-earnings-btn").addEventListener("click", () => {
        const earningsSelect = document.getElementById("earnings-select");
        const selectedOption = parseInt(earningsSelect.value);

        const earningRates = {
            1: 3,
            2: 7,
            3: 6.5
        };

        if (!earningRates[selectedOption]) {
            alert("Please select a valid earning option.");
            return;
        }

        const tasksPerformed = prompt("Enter the number of tasks performed:");

        if (!tasksPerformed || isNaN(tasksPerformed) || tasksPerformed <= 0) {
            alert("Please enter a valid number of tasks.");
            return;
        }

        const earningsBeforeTax = earningRates[selectedOption] * tasksPerformed;
        const earningsAfterTax = earningsBeforeTax * 0.9;

        document.getElementById("earnings-amount").textContent = `$${earningsAfterTax.toFixed(2)}`;

        alert(`Earnings updated to $${earningsAfterTax.toFixed(2)}`);
    });
