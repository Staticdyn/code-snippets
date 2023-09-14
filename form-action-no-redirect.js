// when you need a webflow native form to submit to a path without redirecting to a new page.
// this is useful for submitting to a form action URL.

document
  // replace PUT_YOUR_FORM_ID_HERE with the ID of your form
  .getElementById("PUT_YOUR_FORM_ID_HERE")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    // replace THE_CLASS_OF_THE_FORM_CONTAINER with the class of the form container,
    // the success and failure messages are inside of this container as siblings of the <form> element
    const container = form.closest(".THE_CLASS_OF_THE_FORM_CONTAINER");
    const action = form.action;
    const data = Object.fromEntries(new FormData(form));

    // send the form data to the path specified in the form's action attribute
    // paste the action URL in the form settings inside Webflow Designer.
    try {
      await fetch(action, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // success and error messages are siblings of the form element
      form.style.display = "none";
      container.querySelector(".w-form-done").style.display = "block";
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      container.querySelector(".w-form-fail").style.display = "block";
    }
  });
