/* Объект с изначальными значениями. Ключ - имя. Значение - ссылка */
let obj = {
	'МОЙКА И ОЧИСТКА': './catalog/moika.html',
	'РАЗБОРКА И СБОРКА': './catalog/razbor-sbor.html',
	'МЕХАНИЧЕСКАЯ ОБРАБОТКА': './catalog/meh-obrabotka.html',
	'ШЛИФОВКА И ПРИТИРКА': './catalog/schlif-pritirka.html',
	'ИСПЫТАТЕЛЬНОЕ ОБОРУДОВАНИЕ': './catalog/ispyt-oborud.html',
	'ИСТОЧНИКИ ДАВЛЕНИЯ': './catalog/istoch-davlen.html',
	'ВСПОМОГАТЕЛЬНОЕ ОБОРУДОВАНИЕ': './catalog/vspom-oborud.html',
	'ПЕРЕДВИЖНЫЕ МАСТЕРСКИЕ': './catalog/peredvij-master.html',
	'СТЕНДЫ ДЛЯ ИСПЫТАНИЙ И НАСТРОЙКИ ПРЕДОХРАНИТЕЛЬНЫХ КЛАПАНОВ ПОБЕДИТ-С-1': './catalog/isp-oborudovanie/pobedit-s-1.html',
	'ВЕРТИКАЛЬНЫЕ СТЕНДЫ ДЛЯ ГИДРАВЛИЧЕСКИХ И ПНЕВМАТИЧЕСКИХ ИСПЫТАНИЙ ТРУБОПРОВОДНОЙ АРМАТУРЫ ПОБЕДИТ-С-2': './catalog/isp-oborudovanie/pobedit-s-2.html',
	'ГОРИЗОНТАЛЬНЫЕ СТЕНДЫ ДЛЯ ГИДРАВЛИЧЕСКИХ И ПНЕВМАТИЧЕСКИХ ИСПЫТАНИЙ ТРУБОПРОВОДНОЙ АРМАТУРЫ ПОБЕДИТ-С-3': './catalog/isp-oborudovanie/pobedit-s-3.html',
	'СТЕНДЫ ДЛЯ ИСПЫТАНИЙ УСТЬЕВОГО И ПРОТИВОВЫБРОСОВОГО ОБОРУДОВАНИЯ ПОБЕДИТ-С-1-425': './catalog/isp-oborudovanie/pobedit-s-1-425.html',
	'СТАНЦИИ ПНЕВМОГИДРАВЛИЧЕСКИЕ ПОБЕДИТ-СПГ': './catalog/istochniki-davleniya/pobedit-spg.html',
	'СТАНОК ДЛЯ ВЫРЕЗКИ ПРОКЛАДОК ПОБЕДИТ-СВП-1': './catalog/meh-obrabotka/pobedit-svp-1.html',
	'СТАНОК ДЛЯ ВЫРЕЗКИ ПРОКЛАДОК ПОБЕДИТ-СВП-2': './catalog/meh-obrabotka/pobedit-svp-2.html',
	'СПЕЦИАЛИЗИРОВАННЫЙ РАСТОЧНОЙ СТАНОК ДЛЯ МЕХАНИЧЕСКОЙ ОБРАБОТКИ ДЕТАЛЕЙ ТРУБОПРОВОДНОЙ АРМАТУРЫ ПОБЕДИТ-СР': './catalog/meh-obrabotka/pobedit-sr.html',
	'УСТАНОВКА ДЛЯ МОЙКИ И ОЧИСТКИ ДЕТАЛЕЙ ТРУБОПРОВОДНОЙ АРМАТУРЫ ПОБЕДИТ-МО': './catalog/moika-ochistka/pobedit-mo.html',
	'МОБИЛЬНАЯ МАСТЕРСКАЯ ДЛЯ РЕМОНТА И ОБСЛУЖИВАНИЯ ТРУБОПРОВОДНОЙ АРМАТУРЫ ПОБЕДИТ-ПМ': './catalog/peredvijnye-masterskie/pobedit-pm.html',
	'РАБОЧЕЕ МЕСТО ДЛЯ РАЗБОРКИ И СБОРКИ ТРУБОПРОВОДНОЙ АРМАТУРЫ ПОБЕДИТ-РМ-1': './catalog/razborka-sborka/pobedit-rm-1.html',
	'РАБОЧЕЕ МЕСТО ДЛЯ РАЗБОРКИ И СБОРКИ ТРУБОПРОВОДНОЙ АРМАТУРЫ ПОБЕДИТ-РМ-2': './catalog/razborka-sborka/pobedit-rm-2.html',
	'РАБОЧЕЕ МЕСТО ДЛЯ РАЗБОРКИ И СБОРКИ ПРЕДОХРАНИТЕЛЬНЫХ КЛАПАНОВ ПОБЕДИТ-РМ-ППК': './catalog/razborka-sborka/pobedit-rm-ppk.html',
	'РАБОЧЕЕ МЕСТО ДЛЯ РАЗБОРКИ И СБОРКИ УСТЬЕВОЙ АРМАТУРЫ ТИПА АФК, АНК ПОБЕДИТ-РМ-АФК': './catalog/razborka-sborka/pobedit-rm-afk.html',
	'СТАНОК ПЕРЕНОСНОЙ ДЛЯ ШЛИФОВАНИЯ И ПРИТИРКИ УПЛОТНИТЕЛЬНЫХ ПОВЕРХНОСТЕЙ КЛИНОВЫХ ЗАДВИЖЕК ПОБЕДИТ-СПМ-1': './catalog/shlifovka-pritirka/pobedit-spm-1.html',
	'СТАНОК ПЕРЕНОСНОЙ ДЛЯ РЕМОНТА ЗАПОРНЫХ ВЕНТИЛЕЙ БЕЗ УДАЛЕНИЯ ИХ ИЗ ТРУБОПРОВОДА ПОБЕДИТ-СПМ-2-В': './catalog/shlifovka-pritirka/pobedit-spm-2-v.html',
	'СТАНОК ПЕРЕНОСНОЙ ДЛЯ РЕМОНТА ЗАПОРНЫХ ВЕНТИЛЕЙ БЕЗ УДАЛЕНИЯ ИХ ИЗ ТРУБОПРОВОДА ПОБЕДИТ-СПМ-2-К': './catalog/shlifovka-pritirka/pobedit-spm-2-k.html',
	'СТАНОК ДЛЯ ПРИТИРКИ ПЛОСКИХ УПЛОТНИТЕЛЬНЫХ ПОБЕДИТ-СПД ПОВЕРХНОСТЕЙ ПОБЕДИТ-СПД': './catalog/shlifovka-pritirka/pobedit-spd.html',
	'УСТАНОВКИ КОМПРЕССОРНЫЕ ПОБЕДИТ-КС': './catalog/vspom-oborudovanie/pobedit-ks.html',
	'УСТАНОВКИ ОБОРОТНОГО ВОДОСНАБЖЕНИЯ ПОБЕДИТ-УОВ': './catalog/vspom-oborudovanie/pobedit-uov.html',
	'БРОНЕОГРАЖДЕНИЕ ПОБЕДИТ-БО': './catalog/vspom-oborudovanie/pobedit-bo.htm',
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
			// output.push(array_with_link[value]);
			output.push(array_with_name[value]);
		}
	}
	if (output.length === 0) {
		let value = 'По вашему запросу ничего не найдено';
		addValue(value);
	} else {
		separation(output)
	}
}

function addValue(value) {
	let a = document.createElement('a');
	let li = document.createElement('li');
	a.innerHTML = value;
	a.setAttribute('href', obj[value]);
	ul.appendChild(li);
	li.appendChild(a);
	if (value === 'По вашему запросу ничего не найдено') {
		a.removeAttribute('href');
	}
}

function separation(output){
	for (let position = 0; position < output.length; position++){
		let value = output[position];
		addValue(value);
	}
}

searchWord();

