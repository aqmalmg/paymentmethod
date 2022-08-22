
document.getElementById("myButton").onclick = function() {
  
  const visaButton = document.getElementById("visaButton");
  const mastercardButton = document.getElementById("mastercardButton");
  const paypalButton = document.getElementById("paypalButton");
  
  if (visaButton.checked) {
    document.getElementById("judul").innerHTML = "You are paying with Visa";
  } else if (mastercardButton.checked) {
    document.getElementById("judul").innerHTML = "You are paying with MasterCard";
  } else if (paypalButton.checked) {
    document.getElementById("judul").innerHTML = "You are paying with PayPal";
  } else {
    document.getElementById("judul").innerHTML = "You must select your payment method";
  }
}