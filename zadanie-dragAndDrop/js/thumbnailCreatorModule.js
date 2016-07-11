var thumbnailsCreator = (function () {
	var thumbnailWidth;
	var thumbnailHeight;

	function setThumbnailsSize(width, height) {
		thumbnailWidth = width;
		thumbnailHeight = height;
	}

	function createCanvas(src) {
		var canvas = document.createElement("canvas");
		canvas.width = thumbnailWidth;
		canvas.height = thumbnailHeight;
		var image = document.createElement("img");
		imagesContainer.appendChild(canvas);
		image.onload = function () {
			canvas.getContext("2d").drawImage(image, 0, 0, thumbnailWidth, thumbnailHeight);
		}
		image.src = src;
		canvas.addEventListener("click", function () {
			window.open(src);
		});
	};

	function createThumbnails(urls) {
		for (var i = 0; i < urls.length; i++) {
			createCanvas(urls[i]);
		}
	}

	return {
		setThumbnailsSize: setThumbnailsSize,
		createThumbnails: createThumbnails
	};
})();
