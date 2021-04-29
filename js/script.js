document.getElementById("searchInput").addEventListener("focus", () => document.getElementById("searchbtn").style.padding = "6px 8px");
document.getElementById("searchInput").addEventListener("focusout", () => document.getElementById("searchbtn").style.padding = "4px 8px");

window.addEventListener('load', () => {
    // add job modal
    let modal = document.getElementById("contactModal");
    let contactBtn = document.getElementById("contactBtn");
    let closeBtn = document.getElementById("closeBtn");

    contactBtn.addEventListener("click", () => {
        document.getElementsByClassName("navbar-toggler")[0].click();
        modal.style.display = "block"
    });
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => {
        if (e.target == modal)
            modal.style.display = "none";
    });
});