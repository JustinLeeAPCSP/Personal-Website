function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active')
    sidebar.classList.toggle('active')
}

window.onload = function() {
    let timeout;

    document.getElementById("bodyId").onscroll = function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            document.getElementById("langIcon").style.opacity = 1;
            document.getElementById("toggle").style.opacity = 1;
        }, 1000);
      document.getElementById("langIcon").style.opacity = 0.3;
      document.getElementById("toggle").style.opacity = 0.3;
    };
  }
  