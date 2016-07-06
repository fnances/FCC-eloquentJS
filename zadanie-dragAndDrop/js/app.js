var app = (function () {

	var imagesContainer;
	var dropArea;
	var imagesHeader;
	var fileNumber = 0;


	function config(dropAreaID, containerID) {
		dropArea = document.getElementById(dropAreaID);
		imagesContainer = document.getElementById(containerID);
		imagesHeader = imagesContainer.querySelector('h1');

		dropArea.addEventListener("dragenter", preventDefault);
		dropArea.addEventListener("dragleave", preventDefault);
		dropArea.addEventListener("drop", dropFiles);
		dropArea.addEventListener("change", dropFiles);
	}

	function preventDefault(event) {

		event.preventDefault();
		if (event.type === "dragenter") {
			this.parentElement.classList.add("drag-over");
		}
		if (event.type === "dragleave") {
			this.parentElement.classList.remove("drag-over");
		}

	}

	function dropFiles(event) {

		event.preventDefault();
		if (event.type === "drop") {
			this.parentElement.classList.remove("drag-over");
		}

		var files = (this.files.length) ? this.files : event.dataTransfer.files;
		var imageURL;
		for (var i = 0; i < files.length; i++) {
			if (validateFiles(files[i])) {
				imageURL = URL.createObjectURL(files[i]);
				createCanvas(imageURL);
			}
		}
		imagesHeader.classList.add("show");
	}

	function validateFiles(file) {
		return file.type === "image/jpeg" || file.type === "image/png";
	}

	function createCanvas(src) {
		fileNumber++;
		var canvas = document.createElement("canvas");
		var id = "canvas" + fileNumber;
		canvas.id = id;
		canvas.width = 150;
		canvas.height = 150;
		imagesContainer.appendChild(canvas);
		canvas = document.getElementById(id);
		var image = document.createElement("img");
		image.onload = function () {
			canvas.getContext("2d").drawImage(image, 0, 0, 150, 150);
		}
		image.src = src;
		canvas.addEventListener("click", function () {
			window.open(src);
		});
	}


	return {
		config: config
	};

})();

app.config("dropArea", "imagesContainer");
