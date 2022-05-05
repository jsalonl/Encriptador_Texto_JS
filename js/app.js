const input = document.querySelector('.input-text');
const output = document.querySelector('.output');
const btnCopy = document.querySelector('.button-copy');
const instructions = document.querySelector('.instructions');
const result = document.querySelector('.result');

function btnEncrypt(){
	const text = encrypt(input.value);
	if(text.length > 0){
		output.innerHTML = text;
		instructions.style.display = 'none';
		result.style.display = 'block';
		btnCopy.style.display = 'block';
	}
}

function btnDecrypt(){
	const text = decrypt(input.value);
	if(text.length > 0){
		output.innerHTML = text;
		instructions.style.display = 'none';
		result.style.display = 'block';
		btnCopy.style.display = 'block';
	}
}

function encrypt(text){
	let matrix = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]]
	text = text.toLowerCase();
	for(let i = 0; i < matrix.length; i++){
		if(text.includes(matrix[i][0])){
			text = text.replaceAll(matrix[i][0], matrix[i][1])
		}
	}
	return text
}

function decrypt(text){
	let matrix = [["enter", "e"], ["imes", "i"], ["ai","a"], ["ober", "o"], ["ufat", "u"]]
	text = text.toLowerCase();
	for(let i = 0; i < matrix.length; i++){
		if(text.includes(matrix[i][0])){
			text = text.replaceAll(matrix[i][0], matrix[i][1])
		}
	}
	return text
}

function copyClipboard(){
	const text = output.innerHTML;
	navigator.clipboard.writeText(text)
	.then(
		alert("Copiado al portapapeles"),
		err => alert("Error al copiar"))
}