document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".guests__content").forEach(item => {
    let btns = item.querySelectorAll(".accordion__content-btn");
    let articles = item.querySelectorAll(".guest-content");
    btns.forEach(el => {
      el.addEventListener("click", function(e) {
        let path = e.currentTarget.dataset.path;
        let tabCont = item.querySelector(`[data-target='${path}']`);
        articles.forEach(el => {
          el.classList.remove("guest-content--active");
        });
        btns.forEach(el => {
          el.classList.remove("accordion__content-btn--active");
        });
        tabCont.classList.add("guest-content--active");
        this.classList.add("accordion__content-btn--active");
      });
    });
    let rightHead = item.querySelectorAll(".accordion__control");
  });
});
