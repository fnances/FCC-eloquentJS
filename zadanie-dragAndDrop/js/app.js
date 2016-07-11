var imageProcessingApp = (function () {

	var imagesContainer;
	var dropArea;
	var inputFile;
	var imagesHeader;

	function config(dropAreaID, inputID, containerID) {
		dropArea = document.getElementById(dropAreaID);
		inputFile = document.getElementById(inputID);
		imagesContainer = document.getElementById(containerID);
		imagesHeader = imagesContainer.querySelector('h1');

		dropArea.addEventListener("dragover", onDragOver);
		dropArea.addEventListener("dragleave", onDragLeave);
		dropArea.addEventListener("dragenter", onDragEnter);
		dropArea.addEventListener("drop", onDrop);
		inputFile.addEventListener("change", onInputUse);
	}

	function onDragOver(event) {
		event.preventDefault();
	}

	function onDragEnter(event) {
		event.preventDefault();
		dropArea.classList.add("drag-over");
	}

	function onDragLeave(event) {
		event.preventDefault();
		dropArea.classList.remove("drag-over");
	}

	function onDrop(event) {
		event.preventDefault();
		dropArea.classList.remove("drag-over");
		var files = event.dataTransfer.files;
		processFiles(files);
		imagesHeader.classList.add("show");
	}

	function onInputUse(files) {
		var files = this.files;
		processFiles(files);
	}

	function processFiles(files) {
		var validatedFiles = filesValidator.validateFiles(files);
		var url;
		var imagesURLs = [];

		for (var i = 0; i < validatedFiles.length; i++) {
			url = URL.createObjectURL(validatedFiles[i]);
			imagesURLs.push(url);
		}

		thumbnailsCreator.createThumbnails(imagesURLs);
	}

	return {
		config: config
	};
})();

thumbnailsCreator.setThumbnailsSize(150, 150);
filesValidator.setAllowedFileTypes(["image/jpeg", "image/png"]);
imageProcessingApp.config("dropArea", "inputFile", "imagesContainer");
