document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("#buttons button");
    const darkBtn = document.querySelector(".dark");
    const lightBtn = document.querySelector(".light");

    darkBtn.addEventListener("click", () =>{
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
    });

    lightBtn.addEventListener("click" , () =>{
document.documentElement.classList.remove("dark");
document.documentElement.classList.add("light");
    });

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if (buttonText === "CLR") {
                display.value = "";
            } else if (buttonText === "DEL") {
                display.value = display.value.slice(0, -1);
            } else if (buttonText === "=") {
                try {
                    display.value = eval(display.value)//.replace(/x/g, "*").replace(/÷/g, "/"));
                } catch (e) {
                    display.value = "Error";
                }
            } else {
                display.value += buttonText;
            }
        });
    });
});
