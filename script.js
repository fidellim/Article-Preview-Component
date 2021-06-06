const shareButton = document.querySelector(".share-button");
const shareImg = document.querySelector(".svg-share");
const shareContainer = document.querySelector(".share-container");

shareButton.addEventListener("click", () => {
	console.log(getComputedStyle(shareImg).filter);

	shareContainer.style.visibility =
		getComputedStyle(shareContainer).visibility === "hidden"
			? "visible"
			: "hidden";

	shareImg.style.filter =
		getComputedStyle(shareImg).filter === "none"
			? "brightness(0) invert(1)"
			: "none";

	shareButton.style.backgroundColor =
		getComputedStyle(shareButton).backgroundColor === "rgb(236, 242, 248)"
			? "rgb(158, 175, 194)"
			: "rgb(236, 242, 248)";
});
