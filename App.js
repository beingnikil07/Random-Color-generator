const getColor = () => {
  const getNumber = Math.floor(Math.random() * 16777215);
  const getCode = "#" + getNumber.toString(16);
  // toString Method basically string ko jaisi hai vaisi return kar deta hai
  // 16 (hex unit) pass karane ka fayda ye hua kii toString humko avv normal
  // string return na karke uss normal string ko hexadeciaml mai return karega
  // aur phir wo concatenated ho legi string # wali string se

  document.body.style.backgroundColor = getCode;
  document.querySelector("#color-code").innerHTML = getCode;
};

// Event Call
// Event call are those which only happens when an event occurs or triggerred.
document.getElementById("btn").addEventListener("click", getColor);

// initial call
getColor();

/* Initial call isliye lagayi kyuki nhi lagate to first time mai jvv page load 
   hua karta to white dikhe karta matlab click karne prr he color show hota
    aur wo ek accha user experience nhi hai ,that's why hamne initial call 
    lagayi avv body prr pehle se he koi na koi color jrur milega kyuki
    beta sabse pehle load hote he ye call ho jaayegi.
*/
