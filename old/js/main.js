/* ひまわりカンパニー：さりげない動きのための小さなスクリプト */
(function () {
  // 1. スクロールしたらヘッダーの下に細い線を出す
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 2. スマホの MENU ボタンでメニューを開け閉めする
  var button = document.querySelector('.menu-button');
  var nav = document.getElementById('global-nav');
  function setMenu(open) {
    if (!button || !nav) return;
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }
  if (button && nav) {
    button.addEventListener('click', function () {
      setMenu(button.getAttribute('aria-expanded') !== 'true');
    });
    // メニューの項目を押したら閉じる
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  // 3. 画面に入った写真や文字を、ふわっと表示する
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
