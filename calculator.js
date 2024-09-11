const display = document.getElementById("display");

//Add button numbers on display by appending on prev numbers
const addToDisplay = (input) => {
  display.innerHTML += input;
};

//to calculate the expressions on the display
const calculate = () => {
  try {
    const data = display.value.split("");
    // logic to handle % sign as 1/100
    if (data.includes("%")) {
      const newArray = data.map((item) => {
        if (item == "%") {
          return (item = "*0.01*");
        }
        return item;
      });
      console.log(newArray);

      display.innerHTML = eval(newArray.join(""));
    }
    display.innerHTML = eval(display.value);
  } catch (error) {
    display.innerHTML = "error";
    console.log(error);
  }
};

//to clear displays
const clearDisplay = () => {
  display.innerHTML = "";
};

// to delete last input

const deleteLastInput = () => {
  display.innerHTML = display.value.slice(0, -1);
};
