"use strict";

const naruto = [
  {
    numb: 1,
    question: `What is the name of Madara's younger brother`,
    answer: "Izuna",
    options: ["Izuna", "Shisui", "Obito", "izumi"],
  },
  {
    numb: 2,
    question: `what is the four tailed beast called`,
    answer: "Son goku",
    options: ["shukaku", "Kurama", "Son goku", "Chomei"],
  },
  {
    numb: 3,
    question: `Who was known as the pervy sage`,
    answer: "Jiraya",
    options: ["Kakashi", "Jiraya", "Lady tsunade", "Nagato"],
  },
  {
    numb: 4,
    question: `Naruto became the ______ hokage`,
    answer: "Seventh",
    options: ["third", "fourth", "Seventh", "fifth"],
  },
  {
    numb: 5,
    question: `Who gave jiraya, tsunade and orochimaru the name legendary sanin`,
    answer: "Hanzo the salamander",
    options: ["Third hokage", "Hanzo the salamander", "Minato", "Danzo"],
  },
];

const kimetsu = [
  {
    numb: 1,
    question: `How many upper rank demons are there`,
    answer: "6",
    options: ["4", "5", "6", "8"],
  },
  {
    numb: 2,
    question: `A pillar of the demon slayer corps is called`,
    answer: "Hashira",
    options: ["Tsuchinoto", "Hashira", "Mizunoto", "Shinobi"],
  },
  {
    numb: 3,
    question: `What is Tanjiro's last name`,
    answer: "Kamado",
    options: ["Kamado", "Kibutsuji", "Agatsuma", "Hashibiri"],
  },
  {
    numb: 4,
    question: `Tanjiro's younger sister is called`,
    answer: "Nezuko",
    options: ["Kanae", "Nezuko", "Tamayo", "Shinobu"],
  },
  {
    numb: 5,
    question: `What type of bird is used by the demon slayer corps to pass messages`,
    answer: "Raven",
    options: ["Dove", "Eagle", "Raven", "Hawk"],
  },
];

const shingeki = [
  {
    numb: 1,
    question: "Which titan is called Shingeki No Kyojin",
    answer: "Attack Titan",
    options: ["Attack Titan", "Colossal Titan", "Armour Titan", "Beast Titan"],
  },
  {
    numb: 2,
    question: "Who amongst the below is an Ackerman",
    answer: "Levi",
    options: ["Hange", "Erwin", "Levi", "Eren"],
  },
  {
    numb: 3,
    question: "The race of human's that can turn to titans are called ____",
    answer: "Eldians",
    options: ["Orients", "Eldians", "Marleyians", "None of the Above"],
  },
  {
    numb: 4,
    question: "What is the name of eren's father",
    answer: "Grisha",
    options: ["Zeke", "Hannes", "Armin", "Grisha"],
  },
  {
    numb: 5,
    question: "How many regimnts are there in the  army of paradis island",
    answer: "3",
    options: ["3", "4", "5", "6"],
  },
];

const black = [
  {
    numb: 1,
    question: `What is the name of Asta's devil`,
    answer: "Liebe",
    options: ["liebe", "Megicula", "Lucifero", "Zagred"],
  },
  {
    numb: 2,
    question: `The magic knights are divided into how many squads`,
    answer: "9",
    options: ["7", "8", "9", "10"],
  },
  {
    numb: 3,
    question: `The captain of the crimson lions is called`,
    answer: "Fuegoleon Vermillion",
    options: [
      "Dorothy Unsworth",
      "Fuegoleon Vermillion",
      "Mereoleona Vermillion",
      "Jack The Ripper",
    ],
  },
  {
    numb: 4,
    question: `What is Asta's power`,
    answer: "Anti Magic",
    options: ["Water Magic", "Sound Magic", "Fire Magic", "Anti Magic"],
  },
  {
    numb: 5,
    question: `What does the five clover grimoire mean`,
    answer: "Demon",
    options: ["Love", "Faith", "Demon", "Fortune"],
  },
];

const quizNames = [naruto, kimetsu, shingeki, black];
const quizTitle = [
  "Naruto",
  "Kimetsu No Yaiba",
  "Shingeki No Kyojin",
  "Black Clover",
];

const selectDiv = document.querySelector(".select_div");
const selectAnimeBox = document.querySelectorAll(".select_quiz");
const quizSelectPage = document.querySelector(".quiz_select_page");
const startPage = document.querySelector(".start_page");
const quizPage = document.querySelector(".quiz_page");
const quiz = document.querySelector(".quiz");
const resultPage = document.querySelector(".results_page");
const quizScore = document.querySelector(".quiz_score");
const quizLength = document.querySelector(".quiz_length");
const quizName = document.querySelector(".quiz_name");

// BUTTONS
const gameBtn = document.querySelector(".ctn_btn");
const goBackBtn = document.querySelector(".back_btn");
const changeBtn = document.querySelector(".chng_btn");
const nextBtn = document.querySelector(".next_btn");
const options = document.querySelectorAll("li");
const startBtn = document.querySelector(".start_btn");
const selectBtn = document.querySelector(".select_quiz_btn");
const restartBtn = document.querySelector(".restart_btn");

let anime;
let index;
let score;

const reset = function () {
  index = 0;
  score = 0;
};

// A function for displaying questions
const showQuestion = function () {
  // empties the quiz element
  quiz.innerHTML = "";

  // Markup for the quiz element
  const markup = `
   <h2>${anime[index].question}</h2>
    <ul>
      <li>
        <p>${anime[index].options[0]}</p>
      </li>
      <li>
        <p>${anime[index].options[1]}</p>
      </li>
      <li>
        <p>${anime[index].options[2]}</p>
      </li>
      <li>
        <p>${anime[index].options[3]}</p>
      </li>
    </ul>
  `;

  // inserting the markup into the quiz element
  quiz.insertAdjacentHTML("afterbegin", markup);

  // hides the nxtBtn
  nextBtn.classList.remove("show");
};

// A function that hides and shows different pages
const hideAndShow = function (hidePage, showPage) {
  hidePage.classList.add("conceal");
  showPage.classList.remove("conceal");
};

reset();

//////////////////////////////////////////////////
// navigating to the select quiz page
gameBtn.addEventListener("click", function () {
  hideAndShow(startPage, quizSelectPage);
});
///////////////////////////////////////////////////////

/////////////////////////////////
// Returning back to the start page
goBackBtn.addEventListener("click", function () {
  hideAndShow(quizSelectPage, startPage);
});
/////////////////////////////////

///////////////////////////////////
// selecting the anime quiz
selectAnimeBox.forEach((box) =>
  box.addEventListener("click", function () {
    hideAndShow(quizSelectPage, quizPage);
    // setting the anime quiz according to selected box
    anime = quizNames[box.querySelector("span").dataset.name];
    quizName.textContent = quizTitle[box.querySelector("span").dataset.name];
    showQuestion();
  })
);
//////////////////////////////////////

/////////////////////////////////////////
changeBtn.addEventListener("click", function () {
  hideAndShow(quizPage, quizSelectPage);
  nextBtn.innerHTML = "Next";
  // resetting the index and score
  reset();
});

/////////////////////////////////////////
quiz.addEventListener("click", function (e) {
  const option = e.target.closest("li");
  if (!option) return;
  const siblings = option.closest(".quiz").querySelectorAll("li");
  const ans = option.querySelector("p").textContent;
  // console.log(siblings);
  // adding class of unclickable to all siblings to ensure options are not clicked more than once
  siblings.forEach((sib) => sib.classList.add("unclickable"));

  if (ans === anime[index].answer) {
    // adding the correct class to the selected option
    option.classList.add("correct");

    // incrementing the score
    score++;
  }
  if (ans !== anime[index].answer) {
    // adding the wrong class to the selected option
    option.classList.add("wrong");

    // adding the correct class to the correct option
    Array.from(siblings).filter((sib) => {
      if (sib.querySelector("p").textContent === anime[index].answer)
        sib.classList.add("correct");
    });
  }

  if (index === anime.length - 1) {
    nextBtn.innerHTML = "Submit";
  }
  index++;
  nextBtn.classList.add("show");
  console.log(score);
});

nextBtn.addEventListener("click", function () {
  if (index === anime.length) {
    hideAndShow(quizPage, resultPage);
    quizScore.textContent = score;
    quizLength.textContent = anime.length;
    nextBtn.innerHTML = "next";
    reset();
  }
  if (index !== anime.length) showQuestion();
});

//////////////////////////////////////////////////////////////////////
// Creating the HOVER EFFECT for the quiz boxes

// MOUSEOVER
selectDiv.addEventListener("mouseover", function (e) {
  // Selecting the "div"
  const target = e.target.closest(".select_quiz");

  if (!target) return;
  // displaying the overlay and animated span on mouseover
  const overlay = target.querySelector(".select_overlay");
  const span = overlay.querySelector("span");
  overlay.style.transform = "scale(1)";
  span.style.transform = "translateY(0)";
});

selectDiv.addEventListener("mouseout", function (e) {
  // Selecting the "div"
  const target = e.target.closest(".select_quiz");

  if (!target) return;
  // hiding the overlay and animated span on mouseout
  const overlay = target.querySelector(".select_overlay");
  const span = overlay.querySelector("span");
  overlay.style.transform = "scale(0)";
  span.style.transform = "translateY(150px)";
});

///////////////////////////////////////////////////////////////////////

startBtn.addEventListener("click", function () {
  hideAndShow(resultPage, startPage);
});

selectBtn.addEventListener("click", function () {
  hideAndShow(resultPage, quizSelectPage);
});

restartBtn.addEventListener("click", function () {
  hideAndShow(resultPage, quizPage);
  showQuestion();
});
