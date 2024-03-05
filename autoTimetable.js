const today = new Date();
const yyyy = today.getFullYear();
let url1 = "https://mytimetable.swan.ac.uk/timetables?view=week&date="
let url2 = "&timetableTypeSelected=241e4d36-93f2-4938-9e15-d4536fe3b2eb&searchText=computer%20science&selections=241e4d36-93f2-4938-9e15-d4536fe3b2eb__fa824663-edaa-c7d8-c779-dd76b096df4f"
let mm = today.getMonth() + 1; // Months start at 0
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedDate = yyyy + '-' + mm + '-' + dd;

let finalURL = url1 + formattedDate + url2

history.pushState({}, '', finalURL);