document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('#faq dt');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling; // dtの次の要素はdd
      const icon = this.querySelector('i');

      // 現在開いている他のFAQを閉じる (オプション: 不要なら削除)
      faqQuestions.forEach(otherQuestion => {
        if (otherQuestion !== this && otherQuestion.classList.contains('active')) {
          otherQuestion.classList.remove('active');
          otherQuestion.nextElementSibling.classList.remove('active');
          otherQuestion.querySelector('i').classList.remove('active');
        }
      });

      // クリックされたFAQの開閉を切り替える
      this.classList.toggle('active');
      answer.classList.toggle('active');
      icon.classList.toggle('active');
    });
  });
});
