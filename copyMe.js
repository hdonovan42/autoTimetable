const today = new Date();
const yyyy = today.getFullYear();
let url1 = "full URL before the date here"
let url2 = "full URL after the date here"
let mm = today.getMonth() + 1; // Months start at 0
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedDate = yyyy + '-' + mm + '-' + dd;

let finalURL = url1 + formattedDate + url2

history.pushState({}, '', finalURL);