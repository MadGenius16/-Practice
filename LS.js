const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const name = form.querySelector('input')

function formSubmitHandler(evt){
  evt.preventDefault()
  const text = textarea.value;
  const name = form.elements.name.value
  const data =JSON.stringify({text, name})
  localStorage.setItem(STORAGE_KEY, data)
}

form.addEventListener("submit", formSubmitHandler)

const jsn = localStorage.getItem(STORAGE_KEY) ?? "";
try {
  const data = JSON.parse(jsn);
console.log(data);
textarea.value = data.text;
form.elements.name.value = data.name
}
catch {
  console.log("Fill please all fields");
}