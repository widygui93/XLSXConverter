function handleFileAsync() {
	const inputElement = document.getElementById('file-input');
	const file = inputElement.files[0];
	
	file.arrayBuffer()
	.then((result) => {
		let data = new Uint8Array(result);
		let workbook = XLSX.read(data, {type:"array"});
		XLSX.writeFile(workbook, "data.csv");
	})
	
}

const convertInput = document.getElementById('convert-input');
convertInput.addEventListener('click', handleFileAsync, false);
