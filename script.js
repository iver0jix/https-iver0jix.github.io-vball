function registerUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const gender = document.getElementById("gender").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const address = document.getElementById("address").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !email || !gender || !dob || !address || !age) {
    alert("Please fill all the fields");
    return;
  }

  const output = document.getElementById("output");
  output.innerHTML = `
    <h3> You are now registered, See you!</h3>
    <h3> check your email for some announcement</h3>
   
  `;
  output.style.display = "block";

  document.getElementById("regForm").reset();
}
