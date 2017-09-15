var users = 1761835;

window.addEventListener("load", setUpPage, false);

function setUpPage() {
    tickUsers();

    window.setInterval(tickUsers, 1000);
}

function tickUsers() {
    users += 1;
    document.getElementById("home-user-count").innerHTML = users.toLocaleString();
}
