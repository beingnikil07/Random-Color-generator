const getColor = () => {
  const getNumber = Math.floor(Math.random() * 16777215);
  const getCode = "#" + getNumber.toString(16);
  document.body.style.backgroundColor = getCode;
  document.querySelector("#color-code").innerHTML = getCode;
  navigator.clipboard.writeText(getCode);
};


// Event Call
document.getElementById("btn").addEventListener("click", getColor);

// initial call
getColor();
