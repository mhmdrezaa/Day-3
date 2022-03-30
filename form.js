/*
function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  if (name == "") {
    return alert("Nama Wajib Diisi!");
  } else if (email == "") {
    return alert("Email Wajib Diisi!");
  } else if (phone == "") {
    return alert("Phone Wajib Diisi!");
  } else if (subject == "") {
    return alert("Subject Wajib Diisi!");
  } else if (message == "") {
    return alert("Message Wajib Diisi!");
  }

  let emailReceiver = "rezam1281@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto: ${emailReceiver}?subject=${subject} &body=Hello my name ${name}, ${subject},You can contact me with this number : ${phone}`;

  a.click();
}
*/
/*
let name = "Mohamad Reza";
let age = 20;
console.log("Nama", name, "umur", age, "tahun");
console.log(`nama ${name} umurnya ${age} tahun`);

let bil1 = 15;
let bil2 = 25;
let hasil = bil1 + bil2;
console.log(hasil);

let namaD = "Mohamad Reza";
let umur = 15;
console.log(`Nama ${namaD} umurnya ${umur} Tahun`);

let num1 = 100;
let num2 = 200;
let hasil1 = num1 * num2;
console.log(hasil1);
function family(bapak, ibu) {
  let say = `Nama bapak saya ${bapak} Nama ibu saya ${ibu}`;
  return say;
}
let result = family("duralim", "asih");
console.log(result);

function getValue(value) {
  if (value > 90) {
    return "A";
  } else if (value > 79) {
    return "B";
  } else if (value > 69) {
    return "C";
  } else {
    return "E";
  }
}
hasil = getValue(70);
console.log(hasil);

function date(date11, date22) {
  let finalValeu = date11 + date22;
  console.log(finalValeu);
}
date(100, 100);

function ikan(teri, goreng) {
  let ikan = teri + goreng;
  console.log(ikan);
}
ikan(10, 10);
*/

function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);

  if (name == "") {
    return alert("Nama Wajib Diisi");
  } else if (email == "") {
    return alert("Email Wajib Diisi");
  } else if (phone == "") {
    return alert("Email Wajib Diisi");
  } else if (subject == "") {
    return alert("Email Wajib Diisi");
  } else if (message == "") {
    alert("Email Wajib Diisi");
  }

  let emailReceiver = "rezam1281@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello bro my name ${name}${message} please contact me ${phone}`;
  a.click();
}
