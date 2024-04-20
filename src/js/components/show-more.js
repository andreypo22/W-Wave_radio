const podcastsBtn = document.querySelector('.podcasts__btn-content');
const podcastsItemLength = document.querySelectorAll('.podcasts__item').length;
const mQuery = window.matchMedia('(min-width: 576px)')
let items = 4;

podcastsBtn.addEventListener('click', () => {
  setTimeout(() => {
    items += 4;
    const array = Array.from(document.querySelector('.podcasts__list').children);

    const visItems = array.slice(0, items);

    visItems.forEach(el => el.style.display = 'block');

    if (visItems.length === podcastsItemLength) {
      podcastsBtn.style.display = 'none';
    }
  }, 200)
});

