/* Объект с изначальными значениями. Ключ - имя. Значение - ссылка */
let obj = {
	'МОЙКА И ОЧИСТКА': './catalog/moika.html',
	'рабочее место': 'ссылка2',
	'шлифовка и притирка': 'ссылка3',
	'победит-ср': 'ссылка4',
	'не победит': 'ссылка5',
};

/* Создаем два массива. В одном храним ключи. Во втором - ссылки. */
let array_with_name = Object.keys(obj);
let array_with_link = Object.values(obj);

let ul = document.getElementById('output-result');
let element = localStorage.getItem('value');

function searchWord() {
	let output = [];
	for (let value = 0; value < array_with_name.length; value++) {
		let word = array_with_name[value].indexOf(element);
		if (word !== -1) {
			output.push(array_with_link[value]);
		}
	}
	if (output.length === 0) {
		let value = '<==3';
		addValue(value);
	} else {
		separation(output)
	}
}

function addValue(value) {
	let li = document.createElement('li');
	li.innerHTML = value;
	ul.appendChild(li);
}

function separation(output){
	for (let position = 0; position < output.length; position++){
		let value = output[position];
		addValue(value);
	}
}

searchWord();

