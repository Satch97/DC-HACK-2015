function mySubmitFunction() {
  var formSubmission = {
    "title": "",
    "event": "",
    "InternalNotes": "",
    "active" : ""
  };
  formSubmission.title = document.getElementById('title').value;
  formSubmission.problem= document.getElementById('problem').value;
  formSubmission.event = document.getElementById('event').checked;
  formSubmission.active = document.getElementById('active').checked;
  alert(formSubmission.event); 
};
function picSubmitFunction() {
  var picSubmission = document.getElementById('picture');
console.log(Object.keys(picSubmission));
};



