document.getElementById("key-pad").addEventListener("click", function (event) {
  const numbers = event.target.innerText;
  const displayTypedNumber = document.getElementById("typed-numbers");
  if (isNaN(numbers)) {
    console.log(numbers);
    if (numbers == "C") {
      displayTypedNumber.value = "";
    }
  } else {
    const priviousTypedNumber = displayTypedNumber.value;
    const newNumber = priviousTypedNumber + numbers; //ager je value input field e chilo setar sathe abr jokhn new number type korteci oita add kore dicchi
    displayTypedNumber.value = newNumber;
  }
});

//verify pin

function verifyPin() {
  const currentPin = document.getElementById("display-pin").value;
  const typedPin = document.getElementById("typed-numbers").value;
  if (currentPin == typedPin) {
    document.getElementById("notify-success").style.display = "block";
    document.getElementById("notify-fail").style.display = "none";
  } else {
    document.getElementById("notify-success").style.display = "none";
    document.getElementById("notify-fail").style.display = "block";
  }
}
