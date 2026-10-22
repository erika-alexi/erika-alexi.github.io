const themeToggle = document.getElementById('themeToggle');
function syncThemeLabel() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeToggle.textContent = dark ? 'Light mode' : 'Dark mode';
  themeToggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  document.querySelector('meta[name="theme-color"]').content = dark ? '#100e17' : '#faf8ff';
}
themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('portfolio-theme', theme); } catch (e) { /* Theme still works without storage. */ }
  syncThemeLabel();
});
syncThemeLabel();
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
function closeMenu() {
  mobileMenu.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = 'Menu';
}
menuToggle.addEventListener('click', () => {
  const open = mobileMenu.hidden;
  mobileMenu.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? 'Close' : 'Menu';
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => {
  if (!event.target.closest('.nav')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileMenu.hidden) {
    closeMenu();
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

const viewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const viewerTitle = document.getElementById('viewerTitle');
const imageStage = document.getElementById('imageStage');
const zoomToggle = document.getElementById('zoomToggle');
const viewerHint = document.getElementById('viewerHint');
const imageDownload = document.getElementById('imageDownload');
const viewerClose = document.getElementById('viewerClose');
let opener;
function resetZoom() {
  imageStage.classList.remove('actual-size');
  zoomToggle.textContent = 'Actual size';
  zoomToggle.setAttribute('aria-pressed', 'false');
  imageStage.scrollTop = 0;
  imageStage.scrollLeft = 0;
  viewerHint.textContent = 'Full image fits the screen. Use Actual size for detail. Press Esc to close.';
}
document.querySelectorAll('.image-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    opener = trigger;
    resetZoom();
    viewerTitle.textContent = trigger.dataset.title;
    viewerImage.alt = trigger.querySelector('img').alt;
    viewerImage.src = trigger.dataset.image;
    imageDownload.href = trigger.dataset.image;
    imageDownload.download = trigger.dataset.image.split('/').pop();
    closeMenu();
    document.body.classList.add('viewer-open');
    viewer.showModal();
    viewerClose.focus();
  });
});
zoomToggle.addEventListener('click', () => {
  const actual = !imageStage.classList.contains('actual-size');
  if (!actual) { resetZoom(); return; }
  imageStage.classList.add('actual-size');
  zoomToggle.textContent = 'Fit image';
  zoomToggle.setAttribute('aria-pressed', 'true');
  viewerHint.textContent = 'Actual size. Scroll or swipe to explore the image. Choose Fit image to see it all.';
  imageStage.focus();
});
viewerClose.addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => {
  if (event.target !== viewer) return;
  const box = viewer.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) viewer.close();
});
viewer.addEventListener('close', () => {
  document.body.classList.remove('viewer-open');
  viewerImage.removeAttribute('src');
  resetZoom();
  if (opener) opener.focus({ preventScroll: true });
});
viewerImage.addEventListener('error', () => {
  viewerHint.textContent = 'This image could not load. Please close the preview and try again.';
});
