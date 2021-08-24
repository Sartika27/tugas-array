
let pekerjaan = ["web developer", " system analyst", " database administrator", " hardware engineer" , "software developer"];
console.log("Jumlah Pekerjaan IT : " + pekerjaan.length);
console.log("Nama Pekerjaan Bidang IT : " + pekerjaan);

document.getElementById("jumlahPekerjaanIT").innerHTML = pekerjaan.length;
document.getElementById("namaPekerjaanIT").innerHTML = pekerjaan;

let tim = ["Sartika", " Nana", " Lia", " Mahesa", " Haryo", " Amalia"];
const tim1 = tim.slice(0, 3);
const tim2 = tim.slice(3, 6);

console.log(tim1, tim2);

document.getElementById("lengkap").innerHTML = tim;
document.getElementById("tim1").innerHTML = tim1;
document.getElementById("tim2").innerHTML = tim2;


let data = [3, 5, 7, 9, 11];
let hasil = data.map((number) => {
  return number * 5;
});

console.log(data);
console.log(hasil);

document.getElementById("satuArray").innerHTML = data;
document.getElementById("baruArray").innerHTML = hasil;


let schedule1 = ["Matematika", " Inggris", " Coding"];
let schedule2 = ["Bahasa Indonesia", " Jepang", " Coding"];

function checkSchedule(schedule1, schedule2) {
  return schedule1.some((periksa) => schedule2.includes(periksa));
}

console.log(checkSchedule(schedule1, schedule2));

document.getElementById("scheduleDayOne").innerHTML = schedule1;
document.getElementById("scheduleDayTwo").innerHTML = schedule2;
document.getElementById("sameSchedule").innerHTML = checkSchedule(schedule1, schedule2);


let twitter = [];
function uploadTweet() {
let tweet = document.getElementById("words").value;
twitter.push(tweet)

document.getElementById("yourTweet").innerHTML = twitter;
}


