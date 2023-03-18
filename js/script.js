function handleSubmit() {
  //lay gia tri input email
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errEmail = document.getElementById("error-email");
  //dieu kien de thanh 1 email
  const checkMail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  console.log("check email value", emailValue);
  //dung match check email
  const check = emailValue.match(checkMail);

  //get a element contain user
  const sectioncontent = document.querySelector(".section-content");

  const submitcontrol = document.querySelector(".submit-email");
  if (check) {
    sectioncontent.classList.remove("hidden");
    submitcontrol.style.display = "none";
    errEmail.innerHTML = "";
  } else {
    errEmail.innerHTML = "Input again pls ";
  }
}

function handleOnmouseOver(element) {
  const wiewMore = element.querySelector(".wiew-more");
  wiewMore.style.display = "inline-block";
}
function handleOnmouseOut(element) {
  const wiewMore = element.querySelector(".wiew-more");
  wiewMore.style.display = "none";
}

const sectioncontent = document.querySelectorAll(".bottom");
const btntext = document.querySelectorAll(".wiew-more");

for (let i = 0; i < sectioncontent.length; i++) {
  btntext[i].addEventListener("click", function () {
    if (btntext[i].innerHTML == "View less") {
      sectioncontent[i].classList.add("hidden");
      btntext[i].innerHTML = "View more";
    } else {
      sectioncontent[i].classList.remove("hidden");
      btntext[i].innerHTML = "View less";
    }
  });
}
