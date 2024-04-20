document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('.search__btn');
  const searchInput = document.querySelector('.search__input');

  searchBtn.addEventListener('click', function() {
    searchInput.classList.toggle('search__input-open')
    searchInput.focus()
  })

  document.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.search__input') && !target.closest('.search__btn')) {
      searchInput.classList.remove('search__input-open')
    }
  })
})
