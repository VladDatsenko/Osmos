// Вспомогательная функция установки обработчика события
function addHandler(event, handler){
    if (document.attachEvent) {
        document.attachEvent('on' + event, handler);
    }
    else if (document.addEventListener) {
        document.addEventListener(event, handler, false);
    }
}
 
// Вспомогательная функция принудительного снятия выделения
function killSelection(){
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    }
    else if (document.selection && document.selection.clear) {
      document.selection.clear();
    }
}
 
// Функция обработчика нажатия клавиш
function noSelectionEvent(event) {
    var event = event || window.event;
 
    // При нажатии на Ctrl+A и Ctrl+U убрать выделение
    // и подавить всплытие события
    var key = event.keyCode || event.which;
    if (event.ctrlKey && (key == 65 || key == 85)) {
        killSelection();
        if (event.preventDefault) { event.preventDefault(); }
        else { event.returnValue = false; }
        return false;
    }
}
 
// Установить обработчики клавиатуры
addHandler('keydown', noSelectionEvent);
addHandler('keyup', noSelectionEvent);