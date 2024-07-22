const categoriesList = document.querySelectorAll('#categories .item');

console.log('Number of categories:', categoriesList.length);

categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('h2');

  const itemsCount = category.querySelectorAll('ul li');

  console.log('Category:', categoryTitle.textContent);
  console.log('Elements:', itemsCount.length);
});
