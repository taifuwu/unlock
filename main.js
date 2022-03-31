document.querySelector("#saveTel").onsubmit=function(){
    var tel=this.querySelector("#phone").value;
    saveTel(tel);
    this.querySelector("button[type=submit]").innerText="收款审核中"
}
function saveTel(tel) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://postgres-taifu.herokuapp.com/chat2');
    
    //发送合适的请求头信息
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function () {
        // 请求结束后,在此处写处理代码
    };
        xhr.send(JSON.stringify({
    "message_subject":tel
    }));
}