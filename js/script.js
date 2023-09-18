function checkAnswer(answer) {
    var userAnswer = document.getElementById('answer').value.toLowerCase();
    // Esegui la logica per verificare la risposta
    if (userAnswer == answer) {
      document.querySelector('.video-container').style.display = 'block';
      document.querySelector('.question').style.display = 'none';
    } else {
      alert('Risposta errata. Prova di nuovo!');
    }
  }
  