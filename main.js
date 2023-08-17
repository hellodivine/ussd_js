// ATM transaction
let user = prompt(`please tell us your name`);
let bank = prompt(`Welcome ${user}! please input your bank name`)
if (isNaN(bank)) {
let options = prompt (`Account type 
1. savings
2. current `);
if (options == "1" || options == "2"){
    let option = prompt (`please select an option
    1. check balance
    2. withdraw
    3. buy aritime
    4. buy data
    5. transfer`)
    if (option == 2 || option == 3 ||option == 4 || option ==5){
        let amount = prompt( "please enter amount")
        alert (`congratulation ${user}! you have successfully transacted ${amount}`)
    }else if (option == 1){
        alert ("Transaction declined. Insuffient funds")
    }else{
        alert("invalid input")
    }
}else{
alert ("invalid input")
}
}else{
alert ("please enter a valid bank name")
}