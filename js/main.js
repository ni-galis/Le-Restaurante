const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.burger-icon');

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  })

  //? для закрытия меню из любого пустого места
  menu.addEventListener('click', e => {
    if (e.target.classList.contains('menu__body')) {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    }
  })
}
