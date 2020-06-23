const calc = document.querySelector(".calculator");
const keys = calc.querySelector("#keys");
const clear = calc.querySelector("#screen");
const display = calc.querySelector("#display");


keys.addEventListener('click', x => {

    const previousKeyType = calc.dataset.previousKeyType;


    if (x.target.matches("button")) {
        const key = x.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        const calculate = (n1, operator, n2) => {
            const firstNum = parseFloat(n1);
            const secondNum = parseFloat(n2);
            switch (operator) {
                case "add":
                    return firstNum + secondNum;
                case "minus":
                    return firstNum - secondNum;
                case "times":
                    return firstNum * secondNum;
                case "divide":
                    return firstNum / secondNum;

            }

            return result;
        };

        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove("is-depressed"));

        if (!action) {
            console.log("Number Key!");
            calc.dataset.previousKeyType = "number";

            if (
                displayedNum === "0" ||
                previousKeyType === "operator" ||
                previousKeyType === "calculate"
            ) {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }

        } else if (
            action === "add" ||
            action === "minus" ||
            action === "times" ||
            action === "divide"
        ) {
            console.log("Operator Key!");
            const firstValue = calc.dataset.firstValue;
            const operator = calc.dataset.operator;
            const secondValue = displayedNum;


            if (
                firstValue &&
                operator &&
                previousKeyType !== "operator" &&
                previousKeyType !== "calculate"
            ) {
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue

                calc.dataset.firstValue = calcValue
            } else {
                calc.dataset.firstValue = displayedNum
            }

            key.classList.add("is-depressed");
            calc.dataset.previousKeyType = "operator";

            calc.dataset.operator = action;

        } else if (action === "decimal") {
            console.log("deciaml Key!");
            calc.dataset.previousKeyType = "decimal";
            if (!displayedNum.includes(".") && previousKeyType !== "calculate") {
                display.textContent = displayedNum + ".";
            } else if (
                previousKeyType === "operator" ||
                previousKeyType === "calculate"
            ) {
                display.textContent = "0.";
            }

        } else if (action === "calc") {
            console.log("equal Key!");

            let firstValue = calc.dataset.firstValue;
            const operator = calc.dataset.operator;
            let secondValue = displayedNum;

            if (firstValue) {
                if (previousKeyType === "calculate") {
                    firstValue = displayedNum;
                    secondValue = calc.dataset.modValue;
                }

                display.textContent = calculate(firstValue, operator, secondValue);
            }

            calc.dataset.modValue = secondValue;
            calc.dataset.previousKeyType = "calculate";
        }

        if (action !== "clear") {
            const clearButton = calc.querySelector("[data-action=clear]")
            clearButton.textContent = "C"
        };
        

    }
});

clear.addEventListener("click", x => {

    if (x.target.matches("button")) {
        const key = x.target;
        const action = key.dataset.action;

        switch (action) {
            case "clear":
                console.log("clear Key!");

                if (key.textContent === "AC") {
                    calc.dataset.previousKeyType = "";
                    calc.dataset.modValue = "";
                    calc.dataset.firstValue = "";
                    calc.dataset.operator = "";
                } else {
                    key.textContent = "AC";
                }
    
                display.textContent = 0;
                calc.dataset.previousKeyType = "clear";
                break;
            case "back":
                console.log("back Key!");
                break;
        }
    }
});