function toggleMenu() {
  const menuToggle = document.querySelector('.toggle');
  const sidebar = document.querySelector('.sidebar');
  menuToggle.classList.toggle('active')
  sidebar.classList.toggle('active')
}

window.onload = function() {
let timeout;
const text = document.getElementById("cursorDesign");
document.getElementById("bodyId").onscroll = function() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    document.getElementById("langIcon").style.opacity = 1;
    document.getElementById("toggle").style.opacity = 1;
  }, 1000);
  document.getElementById("langIcon").style.opacity = 0.3;
  document.getElementById("toggle").style.opacity = 0.3;
};

document.addEventListener("mousemove", function(e) {
  text.style.left = (e.pageX - 15) + 'px';
  text.style.top = (e.pageY - 25) + 'px';
});
}

