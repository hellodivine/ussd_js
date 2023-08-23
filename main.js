
const user = prompt("Please tell us your name");
let bank = prompt(`Welcome ${user}! Please input your bank name`);

while (user === user) {
  const options = prompt(`Account type 
  1. savings
  2. current `);
  if (options === "1" || options === "2") {
    let option = prompt(`Please select an option
    1. check balance
    2. withdraw
    3. buy airtime
    4. buy data
    5. transfer`);
    while (option !== "1" && option !== "2" && option !== "3" && option !== "4" && option !== "5") {
      option = prompt("Invalid input. Please select an option from 1-5");
    }
    if (option === "2" || option === "3" || option === "4" || option === "5") {
      const amount = prompt("Please enter amount");
      proceed = prompt(`Congratulations ${user}! You have successfully transacted ${amount}
      Continue Transaction ?
      1- Yes    2- No`);
      if (proceed == "Yes" || proceed == "1") {
        alert(`Returning to Home`)
      } else {
        break;
      }
    } else {
      alert("Transaction declined. Insufficient funds");
    }
  } else {
    alert("Invalid input");
  }
  bank = prompt("Please input a valid bank name");
}