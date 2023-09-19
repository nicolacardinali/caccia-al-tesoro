'use strict';

function checkAnswer(answer) {
  const userAnswer = document.getElementById('answer').value.toLowerCase();
  
  // Execute logic to verify the answer
  const videoContainer = document.querySelector('.video-container');
  const questionElement = document.querySelector('.question');

  if (userAnswer === answer) {
    videoContainer.style.display = 'block';
    questionElement.style.display = 'none';
  } else {
    alert('Risposta errata. Prova di nuovo!');
  }
}
