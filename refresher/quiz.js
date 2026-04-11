(function () {
  document.querySelectorAll('.quiz-table').forEach(function (table) {
    var type = table.dataset.quizType || 'default';
    var btn = document.createElement('button');
    btn.className = 'quiz-toggle';
    btn.textContent = 'Quiz mode';

    if (type === 'F') {
      var state = 0;
      btn.addEventListener('click', function () {
        state = (state + 1) % 3;
        table.classList.remove('quiz-hard', 'quiz-hint');
        if (state === 1) {
          table.classList.add('quiz-hard');
          btn.textContent = 'Hard mode — click for hint';
          btn.classList.add('active');
        } else if (state === 2) {
          table.classList.add('quiz-hint');
          btn.textContent = 'Hint mode — click to reveal';
        } else {
          btn.textContent = 'Quiz mode';
          btn.classList.remove('active');
        }
      });
    } else {
      btn.addEventListener('click', function () {
        table.classList.toggle('quiz-active');
        var on = table.classList.contains('quiz-active');
        btn.textContent = on ? 'Reveal answers' : 'Quiz mode';
        btn.classList.toggle('active', on);
      });
    }

    table.parentNode.insertBefore(btn, table);
  });
})();
