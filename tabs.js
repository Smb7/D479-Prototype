// Experience Tabs — switches between Food, Entertainment, Sightseeing grids
const tabBtns    = document.querySelectorAll('.tab-btn');
const tabPanels  = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });

    tabPanels.forEach(panel => panel.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.getElementById('tab-' + target).classList.add('active');
  });
});
