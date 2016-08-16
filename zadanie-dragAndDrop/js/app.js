var imageProcessingApp = (function () {

	var imagesContainer;
	var dropArea;
	var inputFile;
	var imagesHeader;

	function config(configs) {
		dropArea = document.getElementById(configs.dropAreaID);
		inputFile = document.getElementById(configs.inputID);
		imagesContainer = document.getElementById(configs.containerID);

		thumbnailsCreator.setCanvasBackground(configs.thumbnailBackground);
		thumbnailsCreator.setThumbnailsSize(configs.thumbnailWidth, configs.thumbnailHeight);
		filesValidator.setAllowedFileTypes(configs.allowedFileTypes);

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

	function onInputUse() {
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

var config = {
	dropAreaID: "dropArea",
	inputID: "inputFile",
	containerID: "imagesContainer",
	thumbnailBackground: "red",
	thumbnailWidth: 150,
	thumbnailHeight: 150,
	allowedFileTypes: ["image/png", "image/jpeg"]
};

imageProcessingApp.config(config);
