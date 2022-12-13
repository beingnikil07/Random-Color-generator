const getColor = () => {
  const getNumber = Math.random();
  console.log(getNumber);
};

// Above function will generate  a random integer for U 
// Adding click event listener on btn and call the get color method 
document.getElementById("btn").addEventListener("click", getColor);
