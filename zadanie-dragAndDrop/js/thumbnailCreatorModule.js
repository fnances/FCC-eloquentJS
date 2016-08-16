var thumbnailsCreator = (function () {
	var thumbnailWidth;
	var thumbnailHeight;
	var canvasBG;

	function setThumbnailsSize(width, height) {
		thumbnailWidth = width;
		thumbnailHeight = height;
	}

	function createCanvas(src) {
		var canvas = document.createElement("canvas");
		canvas.style.background
		canvas.width = thumbnailWidth;
		canvas.height = thumbnailHeight;
		var image = document.createElement("img");
		imagesContainer.appendChild(canvas);
		image.onload = resizeAndRender.bind(canvas, image);
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

	function setCanvasBackground(color) {
		canvasBG = color;
	}

	function resizeAndRender(image) {
		var context = this.getContext("2d");
		var ratioWidth = thumbnailWidth / image.width;
		var ratioHeight = thumbnailHeight / image.height;
		var ratio = Math.min(ratioHeight, ratioWidth);
		var centerX = (thumbnailWidth - image.width * ratio) / 2;
		var centerY = (thumbnailHeight - image.height * ratio) / 2;
		context.fillStyle = canvasBG;
		context.fillRect(0, 0, thumbnailWidth, thumbnailHeight);
		context.drawImage(image, 0, 0, image.width, image.height,
			centerX, centerY, image.width * ratio, image.height * ratio);

	}

	return {
		setCanvasBackground: setCanvasBackground,
		setThumbnailsSize: setThumbnailsSize,
		createThumbnails: createThumbnails
	};
})();
