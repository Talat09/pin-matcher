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
