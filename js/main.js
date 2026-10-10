/* ひまわりカンパニー：さりげない動きのための小さなスクリプト */
(function () {
  // 1. スクロールしたらヘッダーを白い帯に切り替える
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 2. 画面に入った写真や文字を、ふわっと表示する
  var targets = document.querySelectorAll('.reveal, .reveal-photo');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
  targets.forEach(function (el) { observer.observe(el); });
})();
