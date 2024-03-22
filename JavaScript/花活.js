function B() {
    var nw = window.open('https://www.bilibili.com');
    nw.close();
}

function bye() {
    alert("那就，再见了");
    window.close();
}

function t() {
    document.write("你确定？");
    // alert("你确定？")

}

function T() {
    setTimeout("t()", 2000);

}

function Q() {
    document.write("五秒后显示答案");
    var t_1 = setTimeout('A()', 5000);
    // clearTimeout(t_1)
}
function A() { document.write(" 答案是钝角"); }

function get() {
    var H = innerHeight;
    var W = innerWidth;
}