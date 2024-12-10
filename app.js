

function m1() {
  const n = + document.getElementById("inputValue").value;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum -= 1 / i;
    } else {
      sum += 1 / i;
    }
  }
  document.getElementById("output").innerHTML = `Yig'indi: ${sum}`;
}

function m2() {
  const n = +document.getElementById("inputValue2-1").value;
  let sum = 0;
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
    sum += fact;
  }

  document.getElementById("output2").innerHTML = `Faktoriyalar soni: ${sum}`;
}

function m3() {
  const n = +document.getElementById("inputValue33").value;
  let k = 0;
  while ((k + 1) ** 2 <= n) {
    k++;
  }
  document.getElementById(
    "output3"
  ).innerHTML = `Kvadrati ${n} dan katta bo'lmagan eng katta k soni: ${k}`;
}

function m4() {
  const n = +document.getElementById("inputValue4").value;
  let k = 1;

  while (k ** 2 <= n) {
    k++;
  }
  document.getElementById(
    "output4"
  ).innerHTML = `Kvadrati ${n} dan katta bo'lgan eng kichik k soni: ${k}`;
}

function m5() {
  const n = +document.getElementById("inputValue5-1").value;
  let count = 0;
  for (let i = 1; i <= n; i += 2) {
    count++;
  }
  document.getElementById(
    "output5"
  ).innerHTML = `${n} gacha bo'lgan toq sonlar soni: ${count} ta`;
}

// SOME FUNCTION -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const moonIcon = document.querySelector(".moon-icon");
const body = document.body;

if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "dark");
  body.classList.add("dark");
} else {
  body.classList.add(localStorage.getItem("mode"));
}

moonIcon.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("mode", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }

  if (body.classList.contains("dark")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  } else {
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  }
});
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 550);
});
AOS.init({
  duration: 1700,
  once: true,
});
