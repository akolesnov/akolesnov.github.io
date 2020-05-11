"use strict";

if (!Object.keys) Object.keys = function(o) {
	if (o !== Object(o))
		throw new TypeError('Object.keys called on a non-object');
	var k=[],p;
	for (p in o) if (Object.prototype.hasOwnProperty.call(o,p)) k.push(p);
	return k;
};

let dataKey = "sKGK4wCS";

let button = `
				<div id="hunter-call" style="z-index:10000; display: none">
						<div class="lt-xbutton-main-wrapper" style="display: block;">
								<div class="lt-xbutton">
										<div class="lt-xbutton-btn"></div>

										<span class="lt-xbutton-flash lt-flash-left"></span>
										<span class="lt-xbutton-flash lt-flash-right"></span>
										<div class="lt-xbutton-dialler">
												<div class="lt-xbutton-dialler-half half-left">
														<div class="lt-xbutton-dialler-pie pie-left"></div>
												</div>
												<div class="lt-xbutton-dialler-half half-right">
														<div class="lt-xbutton-dialler-pie pie-right"></div>
												</div>
										</div>
										<div class="lt-xbutton-wrapper">

												<div class="lt-xbutton-icons" style="z-index:1">
														<i class="fa fa-phone lt-xbutton-phone-icon"></i>
												</div>

												<div class="lt-xbutton-txt" id="timecalling">{callbackText}</div>

												<form class="lt-xbutton-form-action" id="form"">
														
																<iframe 
																		id="deskFrame" 
																		height="80px"
																		sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups"
																		frameborder="0"
																		scrolling="0"
																		style="width: 300px !important"
																></iframe>
														<div class="lt-xbutton-bttn-wrap">
																<button id="buttonDesktop" class="lt-xbutton-bttn lt-xbutton_call">
																		<span class="lt-xbutton-bttn-flur"></span><i class="fa fa-check" style="position: absolute;left: 9px;bottom: 7px;"></i></button>

																<i class="lt-xbutton-call-recuest-icon"></i>
														</div>
														<div class="lt-xbutton-close">
																<div class="lt-xbutton-close-icon">
																		<i class="fa fa-close"></i>
																</div>
														</div>

												</form>
												<div class="lt-xbutton-status-busy">
												<div class="lt-xbutton-icons" style="z-index:1">
														<i class="fa fa-phone lt-xbutton-phone-icon"></i>
												</div>
														<div class="lt-xbutton-status-busy-txt">
																<div class="lt-xbutton-status-busy-txt-h1">{successTitle}</div>
																<div class="lt-xbutton-status-busy-txt-p">{successText}</div>
														</div>
												</div>
										</div>
								</div>
						</div>
						<div class="com__contact_button"><a id="formContact" onclick="showCallbackModal()"><i class="fa fa-envelope"></i> РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ</a></div>
						<div class="lx_mob__overlay" onclick="hideCallbackModal()"></div>
	
						<div class="lx_mob__modal" style="opacity: 0; visibility: hidden; display:none;">
						<div class="lx_mob__closemodal" onclick="closeCallbackModal()">x</div>
								<form id="form-mobile">
										<div class="lx_mob__heading">РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ</div>
										<div class="lx_mob__p">{callbackText}</div>
										<div class="lx_mob__label">РўРµР»РµС„РѕРЅ</div>
										<iframe 
												id="mobileFrame" 
												height="40px"
												width="100%"
												sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups"
												frameborder="0"
												scrolling="0"
										></iframe>
										<button class="lx_mob__btn" id="mobileSendButton" type="button">РћС‚РїСЂР°РІРёС‚СЊ</button>
										<div class="lx_mob__privacy">РћС‚РїСЂР°РІР»СЏСЏ Р·Р°СЏРІРєСѓ, РІС‹ СЃРѕРіР»Р°С€Р°РµС‚РµСЃСЊ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РґР°РЅРЅС‹С… СЃРѕРіР»Р°СЃРЅРѕ <a target="_blank" href="https://callback-free.ru/privacy/">РїРѕР»РёС‚РёРєРµ РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё</a>.</div>
								</form>
						</div>
				
						<div class="lx_mob__modal" id="sended" style="opacity: 0; visibility: hidden; display: none">
						<div class="lx_mob__closemodal" onclick="closeCallbackModal()">x</div>
								<form>
									<div class="lx_mob__heading_s">{successTitle}</div>
									<div class="lx_mob__hr"></div>
									<div class="lx_mob__p"><center>{successText}</center></div>
									<button type="button" class="lx_mob__btn" onclick="closeCallbackModal()">OK</button>
								</form>
						</div>
				</div>`;


class CallbackIFrame {
	constructor (frameId, scripts = []) {
		this.originWindow = window;
		this.id = frameId;
		this.frame = document.getElementById(this.id);
		this.window = this.frame.contentWindow;
		this.document = this.window.document;
		this.initFrame(scripts)
	};

	initFrame (scripts) {
		this.document.documentElement.style = 'height:inherit';
		this.document.body.style.margin = '5px 3px';
		this.registerScripts(scripts);
	};

	bindButtonSendEvent(btn, divId) {
		this.divId = divId;
		btn.addEventListener('click', this.sendCall.bind(this));
	}

	sendCall(event) {
		let divId = this.divId;

		if (!this.window.$(this.document.getElementById('phone')).inputmask('isComplete')) {
			this.document.getElementById('phone').classList.add('has-error');
			return;
		}

		this.document.getElementById('phone').classList.remove('has-error');

		if (Boolean(parseInt(window.canMetrika))) {
			if(window[`yaCounter${window.metrikaNum}`] !== undefined) {
				window[`yaCounter${window.metrikaNum}`].reachGoal('callback-free');
			}
		}

		if (Boolean(parseInt(window.canGa))) {
			if (window.ga !== undefined) {
					window.ga('send', 'event', 'callbackfree', 'callorder');
			}
		}

		let values = {};

		values[this.input.name] = this.document.getElementById('phone').value;
		values['pageTitle'] = document.title;
		values['url'] = window.location.href;
		values['visitUrl'] = getCookie('lkdm_visit_url');

		self = this;

		const desktopButton = document.getElementById('buttonDesktop');
		const mobileButton = document.getElementById('mobileSendButton');

		desktopButton.setAttribute('disabled', 'disabled');
		mobileButton.setAttribute('disabled', 'disabled');

		post({
			divId: divId,
			data: values,
			onload: function () {
				if (self.id === 'mobileFrame') {
					showCallbackSended();
				} else {
					document.getElementsByClassName('lt-xbutton-bttn-wrap')[0].remove();
					// document.getElementsByClassName('lt-xbutton-close')[0].remove();

					let btn = document.getElementsByClassName("lt-xbutton-status-busy" )[0];
					btn.setAttribute('style', 'opacity: 1; width: 100% !important; left: 0 !important;');
				}
			},
			onerror: function () {
				console.log(this.responseText);
				desktopButton.removeAttribute('disabled');
				mobileButton.removeAttribute('disabled');
			},
		});
	}

	writeConsole() {
		this.originWindow.console.log('initialized');
	}

	insertInput (canCodes) {
		const input = this.document.createElement('input');

		input.type = 'text';
		input.id = 'phone';
		if (this.id === 'mobileFrame') {
			input.className = 'input-mobile';
		} else {
			input.className = 'input';
		}
		input.name = 'phone';

		if (parseInt(canCodes)) {
			input.setAttribute('data-inputmask', "'alias': 'phone'");
			input.setAttribute('placeholder', "+_(___)___-____");
			input.setAttribute('data-inputmask-clearmaskonlostfocus', 'false');
		} else {
			input.setAttribute('data-inputmask-mask', "+7 (999) 999-99-99");
			input.setAttribute('placeholder', "+7 (___) ___-__-__");
			input.setAttribute('data-inputmask-clearmaskonlostfocus', 'false');
		}

		this.input = input;

		this.document.body.appendChild(input);

		// const self = this;
		//
		// setTimeout(function () {
		//   self.window.$(input).inputmask();
		// }, 2000);
	};

	registerScripts (scripts) {
		for (let script of scripts) {
			if (script instanceof CallbackElement) {
				script.insertElement(this.frame.contentWindow.document);
			}
		}
	};

}

class CallbackElement {
	constructor (src, type, rel) {
		this.src = src;
		this.type = type;
		this.rel = rel;
		this.tag = 'script';
	};

	getElement (doc) {
		const element = doc.createElement(this.tag);

		element.src = this.src;
		element.type = this.type;
		element.rel = this.rel;
		element.href = this.src;

		return element;
	};

	insertElement (doc, element = null) {
		if (element == null) {
			element = this.getElement(doc);
		}

		doc.body.appendChild(element);

		return element;
	}
}

class CallbackScript extends CallbackElement {
	constructor(src, type, rel, dependent) {
		super(src, type, rel);
		this.tag = 'script';
		this.dependent = dependent;
	};

	insertElement (doc, element = null) {
		const insertedElement = super.insertElement(doc, element);

		if (typeof this.dependent === 'function') {
			insertedElement.onload = function () {
				this.dependent(insertedElement.ownerDocument);
			}.bind(this);

			return;
		}

		if (this.dependent !== undefined) {
			let self = this;
			insertedElement.onload = function () {
				for (let script of self.dependent) {
					script.insertElement(doc);
				}
			}
		}
	}
}

class CallbackLink extends CallbackElement {
	constructor(src, type, rel) {
		super(src, type, rel);
		this.tag = 'link';
	}

	insertElement (doc, element = null) {
		if (element == null) {
			element = this.getElement(doc);
		}

		doc.head.appendChild(element);

		return element;
	}
}

function showCallbackModal() {
	let overlay = document.getElementsByClassName('lx_mob__overlay')[0];
	let modal = document.getElementsByClassName('lx_mob__modal')[0];

	if (getComputedStyle(overlay).visibility) {
		overlay.style.visibility = 'visible';
		overlay.style.display = 'block';
		overlay.style.opacity = 1;

		modal.style.visibility = 'visible';
		modal.style.display = 'block';
		modal.style.opacity = 1;
	}
}

function hideCallbackModal() {
	let overlay = document.getElementsByClassName('lx_mob__overlay')[0];
	let modal = document.getElementsByClassName('lx_mob__modal')[0];
	let sended = document.getElementById('sended');

	overlay.style.visibility = 'hidden';
	overlay.style.display = 'none';
	overlay.style.opacity = 0;

	modal.style.visibility = 'hidden';
	modal.style.display = 'none';
	modal.style.opacity = 0;

	sended.style.visibility = 'hidden';
	sended.style.display = 'none';
	sended.style.opacity = 0;
}

function showCallbackSended() {
	let modal = document.getElementsByClassName('lx_mob__modal')[0];
	let sended = document.getElementById('sended');

	modal.style.visibility = 'hidden';
	modal.style.display = 'none';
	modal.style.opacity = 0;

	sended.style.visibility = 'visible';
	sended.style.display = 'block';
	sended.style.opacity = 1;
}

function closeCallbackModal() {
	hideCallbackModal();
}

const urlEncode = data => {
	return Object.keys(data)
			.map(value => `${value}=${encodeURIComponent(data[value])}`)
			.join('&');
};

const post = (config) => {
	const xhr = new XMLHttpRequest();

	xhr.open('POST', `https://callback-free.ru/api/v1/hunter/save-callback/${config.divId}`);
	xhr.onload = config.onload;
	xhr.onerror = config.onerror;
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.send(urlEncode(config.data));
};

const getJSON = config => {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', `https://callback-free.ru/api/v1/hunter/get-config/${dataKey}`);
	xhr.onload = function () {
		config.onload(JSON.parse(this.responseText));
	};
	xhr.onerror = config.onerror;

	xhr.send();
};

const faCss = new CallbackLink(
		'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css',
		'text/css',
		'stylesheet'
);

const clientCss = new CallbackLink(
		'https://callback-free.ru/api/css/styles.css',
		'text/css',
		'stylesheet'
);

const jqueryScript = new CallbackScript(
		'https://code.jquery.com/jquery-3.2.1.js',
		'text/javascript',
		'javascript',
		[
			new CallbackScript(
					'https://cdn.jsdelivr.net/combine/npm/inputmask@3.3.11/dist/min/inputmask/inputmask.min.js,npm/inputmask@3.3.11/dist/min/inputmask/jquery.inputmask.min.js,npm/inputmask@3.3.11/dist/min/inputmask/dependencyLibs/inputmask.dependencyLib.min.js,npm/inputmask@3.3.11/dist/min/inputmask/inputmask.extensions.min.js,npm/inputmask@3.3.11/dist/min/inputmask/inputmask.date.extensions.min.js,npm/inputmask@3.3.11/dist/min/inputmask/inputmask.phone.extensions.min.js,npm/inputmask@3.3.11/dist/min/inputmask/inputmask.regex.extensions.min.js,npm/inputmask@3.3.11/dist/min/inputmask/inputmask.numeric.extensions.min.js,npm/inputmask@3.3.11/dist/min/inputmask/phone-codes/phone.min.js,npm/inputmask@3.3.11/dist/min/inputmask/phone-codes/phone-ru.min.js',
					'text/javascript',
					'javascript',
					function (document) {
						document.defaultView.$('input').inputmask();
					}
			)
		]
);

function initialize(data) {
	if (getCookie('lkdm_visit_url') === undefined || getCookie('lkdm_visit_url') === '') {
		setCookie('lkdm_visit_url', window.location.href, {'max-age': 3600 * 24 * 30});
	}

	if (!data.scheduled) {
		return;
	}

	button = button.replace(/\{callbackText\}/g, data.callbackText);
	button = button.replace(/\{successTitle\}/g, data.successTitle);
	button = button.replace(/\{successText\}/g, data.successText);

	let tempDiv = document.createElement('div');
	tempDiv.innerHTML = button;

	document.body.appendChild(tempDiv);

	let buttonWrapper = document.getElementsByClassName('lt-xbutton-main-wrapper')[0];

	if (data.position === 'left') {
		buttonWrapper.classList.toggle('lt-xbutton-left');
	}

	let date = new Date(data.lastModified);

	const widgetCss = new CallbackLink(
			`https://callback-free.ru/api/${dataKey}/styles.css?v=${date.getTime()/1000}`,
			'text/css',
			'stylesheet'
	);

	const widgetFont = new CallbackLink(
			'https://fonts.googleapis.com/css?family=Exo+2',
			'text/css',
			'stylesheet'
	);

	const fontAwesome = new CallbackLink(
			'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css',
			'text/css',
			'stylesheet'
	);
	widgetFont.insertElement(document);
	fontAwesome.insertElement(document);

	widgetCss.insertElement(document).onload = function() {

		if (Boolean(parseInt(data.showOnMobile))) {
			let buttonWrapper = document.getElementsByClassName('com__contact_button')[0];

			switch (data.position) {
				case 'left':
					if (!Boolean(parseInt(data.inversion))) {
						buttonWrapper.classList.toggle('com__contact_left');
					} else {
						buttonWrapper.classList.toggle('com__contact_right');
					}
					break;

				case 'right':
					if (!Boolean(parseInt(data.inversion))) {
						buttonWrapper.classList.toggle('com__contact_right');
					} else {
						buttonWrapper.classList.toggle('com__contact_left');
					}
					break;
			}

			document.getElementsByClassName('com__contact_button')[0].style = 'visibility: visible';
		}

		const openButton = document.getElementsByClassName('lt-xbutton')[0];
		const closeButton = document.getElementsByClassName('lt-xbutton-close-icon')[0];

		const form = document.getElementById('form');
		form.onsubmit = function () {
			return false;
		};

		openButton.onclick = function(event) {
			event.stopPropagation();
			this.classList.add('lt-xbutton-active')
		};

		closeButton.onclick = function (event) {
			event.stopPropagation();
			openButton.classList.remove('lt-xbutton-active');
		};

		const desktopButton = document.getElementById('buttonDesktop');
		const mobileButton = document.getElementById('mobileSendButton');

		const deskFrame = new CallbackIFrame('deskFrame', [faCss, clientCss, jqueryScript]);
		const mobileFrame = new CallbackIFrame('mobileFrame', [faCss, clientCss, jqueryScript]);

		widgetCss.insertElement(deskFrame.document);
		widgetFont.insertElement(deskFrame.document);

		deskFrame.bindButtonSendEvent(desktopButton, data.divId);
		mobileFrame.bindButtonSendEvent(mobileButton, data.divId);

		deskFrame.insertInput(data.canCodes);
		mobileFrame.insertInput(data.canCodes);

		deskFrame.document.body.innerHTML += `<label class="icr-label checked disabled">
																							<span class="icr-item type_checkbox"></span>
																							<span class="icr-hidden"><input type="checkbox" class="icr-input lt-xbutton-checkbox" name="check" value="on" checked disabled></span>
																							<span class="icr-text">РЎРѕРіР»Р°СЃРµРЅ СЃ <a target="_blank" href="https://callback-free.ru/privacy/">РџРѕР»РёС‚РёРєРѕР№ РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё</a></span>
																					</label>`;

		window.canMetrika = data.canMetrika;
		window.metrikaNum = data.metrikaNum;
		window.canGa = data.canGa;
		document.getElementById('hunter-call').style.display = '';
	};
}

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

	options.path = options.path || '/';

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
}


function deleteCookie(name) {
	setCookie(name, "", {
		'max-age': -1
	})
}


window.addEventListener('load', function (event) {
	getJSON({
		onload: initialize,
		onerror: function() {
			console.log('EР“Р“РћР“')
		}
	});
	return true;
});