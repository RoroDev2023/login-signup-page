let a = 1;
const btn = document.getElementById("signInBtn");
btn.addEventListener('click', () => {
  const title = document.getElementById("title1");
  const removeName = document.getElementById("remove_name");
  const name1 = document.getElementById("name1");
  const first = document.getElementById("first");
  const removeCheckbox = document.getElementById("remove_checkbox");
  const question = document.getElementById("question");
  const signUpBtn = document.getElementById("signup");
  const btn = document.querySelector("#signInBtn")
  if (a === 1) {
    title.innerHTML = "Log In";
    removeName.style.display = "none";
    name1.style.display = "none";
    first.style.display = "none";
    removeCheckbox.style.display = "none";
    question.firstChild.textContent = "Don't have an account?";
    btn.innerHTML = "Sign Up";
    signUpBtn.innerHTML = "Log In";
    question.style.marginTop = "35px";
    signUpBtn.style.marginTop = "45px";
    return a = 0;

  } else if (a === 0) {
    // Apply the effects
    title.innerHTML = "Get Started Now";
    removeName.style.display = "block";
    name1.style.display = "block";
    first.style.display = "inline";
    removeCheckbox.style.display = "block";
    question.firstChild.textContent = "Have an account?";
    btn.innerHTML = "Sign in";
    signUpBtn.innerHTML = "Sign Up";
    question.style.marginTop = "23px";
    signUpBtn.style.marginTop = "35px";
    return a = 1;

  }
})