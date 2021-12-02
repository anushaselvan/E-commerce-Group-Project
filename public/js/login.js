const signupFormHandler = async (event) => {
  event.preventDefault();
  try {
    const name = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (name && email && password) {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(`fetch response: ` + JSON.stringify(response));
      if (response.ok) {
        document.location.replace("/");
        alert(`Signed up`);
      } else {
        alert(response.statusText);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

const loginHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#login-email").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // document.location.replace("/");
    // console.log(`logged in`);
    alert(`logged in`);
  } else {
    alert(`sorry not logged in`);
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

document
  .querySelector(".login-form")
  .addEventListener("submit", loginHandler);
