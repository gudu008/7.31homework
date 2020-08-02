function RenovationProcess() {
    var body=document.querySelectorAll(".RenovationProcessImg");
    for (var i=0;i<body.length;i++){
        body[i].onmouseover=function () {
            body[i].background="#3ec9ad";
        }
    }
}
RenovationProcess();