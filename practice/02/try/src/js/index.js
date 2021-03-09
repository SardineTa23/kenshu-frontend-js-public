document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('#button');

  btn.addEventListener('click', () => {
      const attribute = btn.getAttribute('data-type');
      const classes = btn.classList;
      document.querySelector('.text--type').textContent = attribute;
      document.querySelector('.text--class').textContent = classes;
  });
});