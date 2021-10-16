

if (navigator.userAgentData.mobile == true) {

    console.log('mobile site')
    location.href = "mobile.html";

}
navigator.vibrate(3000);



let platform = navigator.platform;

platform_span.textContent = " " + platform + " " + navigator.userAgentData.platform;
let hardwareconcurrency = navigator.hardwareConcurrency;

if (hardwareconcurrency < 3) {
    hardwareconcurrency_span.textContent = " " + "так мало ядер?! " + hardwareconcurrency;
} else {
    hardwareconcurrency_span.textContent = " " + "так много ядер?! " + hardwareconcurrency;
}



let videokarta = getVideoCardInfo();



function getVideoCardInfo() {
    const gl = document.createElement('canvas').getContext('webgl');

    if (!gl) return { error: "no webgl" };

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');

    return debugInfo ? {
        vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
        renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    } : {
        error: "no WEBGL_debug_renderer_info",
    };
}
videokarta_span.textContent = videokarta.renderer;


if (screen.width != 1366 && screen.width != 1920 && screen.width != 1440 && screen.width != 1536 && screen.width != 1600) {
    monitor_span.textContent = " " + "да у тебя необычный экран, дружище! " + screen.width + " x " + screen.height + "px";
} else {
    monitor_span.textContent = " " + "у тебя очень популярное разрешение ,но значит ли это , что ты в безопасности? " + screen.width + " x " + screen.height + "px";
}


if (navigator.language == "ru") {
    language_span.textContent = " " + "да я не удивлен,что-то,что твой язык русский " + navigator.language;
} if (navigator.language == "en") {
    language_span.textContent = " " + "О,сэр да вы из Англии, или из Омереки? " + navigator.language;
}


let languages = navigator.languages;

for (i = 0; i < languages.length; i++) {
    languages_span.textContent += languages[i] + " , ";
}



other.textContent = navigator.appVersion + " " + navigator.userAgent;
if (navigator.userAgent.includes('Safari')) {
    browser.textContent = "браузер-safari";
} if (navigator.userAgent.includes('Chrome')) {
    browser.textContent = "браузер-chrome";
} if (navigator.userAgent.includes('Yandex')) {
    browser.textContent = "браузер-yandex";
} if (navigator.userAgent.includes('Edge')) {
    browser.textContent = "браузер-microsoft edge";
} if (navigator.userAgent.includes('Mozila')) {
    browser.textContent = "браузер-mozilla ";
}


