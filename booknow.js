const form = document.forms[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(this);
    for (const formElement of formData){
        console.log(formElement);
    }
    const entries = formData.entries(); //array of entries
    const data = Object.formEntries(entries);

    //send out to REST API
    fetch()
});