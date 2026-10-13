const roles = [
  "Web Developer",
  "Frontend Developer",
  "Creative UI Designer",
  "JavaScript Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {

  if (charIndex < roles[roleIndex].length) {

    typing.innerHTML += roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

  } else {

    setTimeout(removeEffect, 1500);

  }
}

function removeEffect() {

  if (charIndex > 0) {

    typing.innerHTML =
      roles[roleIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(removeEffect, 50);

  } else {

    roleIndex++;

    if (roleIndex >= roles.length) {
      roleIndex = 0;
    }

    setTimeout(typeEffect, 300);
  }
}

typeEffect();