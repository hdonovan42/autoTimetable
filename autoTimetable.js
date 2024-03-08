const today = new Date();
const yyyy = today.getFullYear();

//First half of url (before the date)
let url1 = "https://mytimetable.yourUNI.ac.uk/timetables?view=week&date="
//Second half of url (after the date) 
let url2 = "&timetableTypeSelected=241e4d36-93f2-4938-9e15-d4536fe3b2eb&searchText=computer%20science"
let mm = today.getMonth() + 1; // Months start at 0
let dd = today.getDate();

if (dd < 10) dd = '0' + dd; //ensures dd & mm are 2 digits
if (mm < 10) mm = '0' + mm;

const formattedDate = yyyy + '-' + mm + '-' + dd; //Saves formatted date as string

let finalURL = url1 + formattedDate + url2 //Saves final URL as a string

history.pushState({}, '', finalURL); //updates webpage with the new URL