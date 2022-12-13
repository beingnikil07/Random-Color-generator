const getColor = () => {
  const getNumber = Math.floor(Math.random()*16777215);
  const getCode="#"+getNumber.toString(16);
  // toString Method basically string ko jaisi hai vaisi return kar deta hai
  // 16 (hex unit) pass karane ka fayda ye hua kii toString humko avv normal 
  // string return na karke uss normal string ko hexadeciaml mai return karega
  // aur phir wo concatenated ho legi string # wali string se 
  console.log(getNumber,getCode);
};



document.getElementById("btn").addEventListener("click", getColor);
