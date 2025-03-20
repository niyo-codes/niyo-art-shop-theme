const element = document.querySelector('div.ruffruff-author-profiles div small');

if (element) {
  setTimeout(() => {
    element.style.display = 'none';
  }, 60);
  console.log('The element exists and is hidden now!');
} else {
  console.log('The element does not exist!');
}