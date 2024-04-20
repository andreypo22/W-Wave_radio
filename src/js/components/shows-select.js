if (document.querySelector('.shows-select')) {
  const defaultSelect = () => {
    const element = document.querySelector('.shows-select');
    const choices = new Choices(element, {
      allowHTML: true,
      position: 'bottom',
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      duplicateItemsAllowed: false,
      silent: false,
    });
  };

  defaultSelect();
}
