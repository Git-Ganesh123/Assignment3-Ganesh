var menuBtn = document.getElementById('menuBtn');
var closeBtn = document.getElementById('closeBtn');
var fullMenu = document.getElementById('fullMenu');

if (menuBtn) {
  menuBtn.addEventListener('click', function() {
    fullMenu.classList.add('open');
  });
}
if (closeBtn) {
  closeBtn.addEventListener('click', function() {
    fullMenu.classList.remove('open');
  });
}

if (fullMenu) {
  fullMenu.addEventListener('click', function(e) {
    if (e.target === fullMenu) {
      fullMenu.classList.remove('open');
    }
  });
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && fullMenu) {
    fullMenu.classList.remove('open');
  }
});