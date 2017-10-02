//For the modal on the profiles page.
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//For user tick on home page
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

//For the social bar
var socialBarImages = ["images/YouTube.png", "images/Twitter.png", "images/AppStore.png"];
var socialBarUrls = ["https://www.youtube.com", "https://www.twitter.com", "https://itunes.apple.com/us/genre/ios/id36?mt=8"];

window.addEventListener("load", SetupSocialBar, false);

var bar;
var icons = [];
var hide;
var show;

function SetupSocialBar() {
	bar = document.getElementById("social-bar");
	
	//Create social icons
	for (i = 0; i < socialBarImages.length; i++) {
		newLink = document.createElement("a");
		newLink.href = socialBarUrls[i];
		newLink.target = "_blank";
	
		newIcon = document.createElement("img");
		newIcon.src = socialBarImages[i];
		newIcon.classList.add("social-bar-icon");
		
		newLink.appendChild(newIcon);
		bar.appendChild(newLink);
		
		icons.push(newIcon);
	}
	
	//Create hide button
	hide = document.createElement("button");
	hide.setAttribute("id", "social-bar-hide");
	hide.innerHTML = "hide";
	hide.addEventListener("click", HideSocialBar, false);
	bar.appendChild(hide);
	
	//Create show button
	show = document.createElement("button");
	show.setAttribute("id", "social-bar-show");
	show.innerHTML = "show";
	show.addEventListener("click", ShowSocialBar, false);
	bar.appendChild(show);
}

function HideSocialBar() {
	show.style.display = "block";
	hide.style.display = "none";

	for (i = 0; i < icons.length; i++) {
		icons[i].style.display = "none";
	}
}

function ShowSocialBar() {
	hide.style.display = "block";
	show.style.display = "none";
	
	for (i = 0; i < icons.length; i++) {
		icons[i].style.display = "block";
	}
}
