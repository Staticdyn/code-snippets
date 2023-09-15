//select all forms on page
allForms = document.querySelectorAll("form");

//loop through forms and add event listener to each one to prevent default form submission
allForms.forEach((form) => {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {};
    const inputs = form.elements;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].type !== "submit") {
        formData[inputs[i].name] = inputs[i].value;
      }
    }

    // send formData to webhook URL
    // replace https://eoioeaihfju69dq.m.pipedream.net with your own webhook URL
    fetch("https://eoioeaihfju69dq.m.pipedream.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // uncomment the code below to see the response from the webhook (if nessesary)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", formData);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  });
});
