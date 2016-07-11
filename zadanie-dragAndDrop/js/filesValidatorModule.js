var filesValidator = (function () {

	var allowedFileTypes = [];

	function setAllowedFileTypes(fileTypes) {
		allowedFileTypes = fileTypes;
	}

	function validateFiles(files) {
		var files = (files instanceof FileList) ? files : [].push(files);
		var allowedFiles = [];

		for (var i = 0; i < files.length; i++) {
			if (isTypeAllowed(files[i].type)) {
				allowedFiles.push(files[i]);
			}
		}

		return allowedFiles;
	}

	function isTypeAllowed(fileType) {
		return allowedFileTypes.indexOf(fileType) > -1;
	}

	return {
		setAllowedFileTypes: setAllowedFileTypes,
		validateFiles: validateFiles
	};
})();
