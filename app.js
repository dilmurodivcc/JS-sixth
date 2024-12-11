function Triangle() {
  const side = +document.getElementById("inputValue").value;
  const p = 3 * side;
  const s = (1.732 / 4) * (side * side);
  document.getElementById("output").innerHTML = `
      Perimetr: ${p}sm <br>
      Yuza: ${s.toFixed(2)}sm^2
  `;
}





function InvertDigit() {
  const a = +document.getElementById("numA").value;
  const b = +document.getElementById("numB").value;
  const c = +document.getElementById("numC").value;
  const reverse = (n) => {
    return parseInt(n.toString().split("").reverse().join(""));
  }
  document.getElementById(
    "output2"
  ).innerHTML = `Teskari raqamla: <br> a = ${reverse(a)}, b = ${reverse(b)}, c = ${reverse(c)}`;
}






function DigitCountSum() {
  const a = +document.getElementById("A").value;
  const b = +document.getElementById("B").value;
  const c = +document.getElementById("C").value;
  const count = (n) => {
    return n.toString().length;
  };
  const calculateSum = (n) => {
    const str = n.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i]);
    }
    return sum;
  };
  document.getElementById(
    "output3"
  ).innerHTML = `A soni: Raqamlar soni - ${count(
    a
  )}, <br> Raqamlar yig'indisi - ${calculateSum(a)}.<br> 
  B soni: Raqamlar soni - ${count(
    b
  )}, <br> Raqamlar yig'indisi - ${calculateSum(b)}.<br> 
  C soni: Raqamlar soni - ${count(
    c
  )}, <br> Raqamlar yig'indisi - ${calculateSum(c)}.`;
}
function m5() {
  const num1 = +document.getElementById("num1").value;
  const num2 = +document.getElementById("num2").value;
  const num3 = +document.getElementById("num3").value;
  const even = (K) => {
    if (K % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };
  document.getElementById("output5").innerHTML = `1 - son: ${even(num1)} <br>
                 2 - son: ${even(num2)} <br>
                 3 - son: ${even(num3)}`;
}
function IsPowerN() {
  const n = +document.getElementById("n").value;
  const k1 = +document.getElementById("k1").value;
  const k2 = +document.getElementById("k2").value;
  const k3 = +document.getElementById("k3").value;
  const k4 = +document.getElementById("k4").value;
  const k5 = +document.getElementById("k5").value;
  let result = 0;
  const check = (k, n) => {
    while (k > 1) {
      if (k % n !== 0) {
        return false;
      }
      k = k / n;
    }
    return k === 1;
  };
  const K = [k1, k2, k3, k4, k5];
  for (let i = 0; i < K.length; i++) {
    if (check(K[i], n)) {
      result++;
    }
  }
  document.getElementById(
    "output6"
  ).innerHTML = `Ning darajasi bo'lgan sonlar soni: ${result}`;
}

function IncTime() {
  const h = +document.getElementById("H").value;
  const m = +document.getElementById("M").value;
  const s = +document.getElementById("S").value;
  const t = +document.getElementById("T").value;
  let totalS = s + t;
  let tS = totalS % 60;
  let totalM = m + Math.floor(totalS / 60);
  let tM = totalM % 60;
  let tH = h + Math.floor(totalM / 60);
  document.getElementById("output7").innerHTML = `
  ${t} sekund qo'shilganidan keyin: <br>
  ${tH} soat ${tM} minut ${tS} sekund.`;
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
