function creerQuiz(questions) {
  let index = 0;
  let score = 0;

  function poserQuestion() {
    if (index < questions.length) {
      const question = questions[index];
      const reponse = prompt(question);
      verifierReponse(reponse);
    } else {
      afficherScoreFinal();
    }
  }

  function verifierReponse(reponse) {
    const question = questions[index];
    if (reponse === question.reponse) {
      score++;
    }
    index++;
    poserQuestion();
  }

  function afficherScoreFinal() {
    alert("Score final : " + score);
  }

  return {
    poserQuestion,
    verifierReponse,
    afficherScoreFinal
  };
}

const questions = [
  { question: "Quelle est la capitale de la France ?", reponse: "Paris" },
  { question: "Quelle est la couleur du ciel ?", reponse: "Bleu" },
  { question: "Quelle est la capitale de l'Espagne ?", reponse: "Madrid" }
];

const quiz = creerQuiz(questions);
quiz.poserQuestion();

