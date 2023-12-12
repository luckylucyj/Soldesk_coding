/*
    공통함수들을 모아놓음
*/

/* textarea 에 텍스트 입력 처리 */
function tv(str){
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;

    screenMessageBoxScrollToBot();
}
/* textarea 텍스트 지우기 */
function tvClear(){
    screenMessageBox.value = "";
}
function tvPlayerInfo(str){
    var screenString = screenPlayerInfo.value;
    screenPlayerInfo.value = str;
}
/* textarea 텍스트 지우기 */
function tvPlayerInfoClear(){
    screenPlayerInfo.value = "";
}
function tvGameObject(str){
    var screenString = screenGameObject.value;
    screenGameObject.value = str;
}
/* textarea 텍스트 지우기 */
function tvGameObjectClear(){
    screenGameObject.value = "";
}

function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}

function dw(s){	
	document.write(s);
}

function r(n){
	var random = Math.floor(Math.random() * n) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
	return random;
}