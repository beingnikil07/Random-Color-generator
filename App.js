const getColor = () => {
  const getNumber = Math.floor(Math.random()*16777215);
  // Floor karta ye hai ye minimum integer return karta hai     
  console.log(getNumber);
};

// Above function will generate  a random integer for U 
// Adding click event listener on btn and call the get color method 
document.getElementById("btn").addEventListener("click", getColor);
