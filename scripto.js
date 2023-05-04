function somarNum(){
    var num1 = Number(document.getElementById("input1").value);
    var num2 = Number(document.getElementById("input2").value);

    var resultadoSoma = num1 + num2;

    document.getElementById("input_result").value = resultadoSoma;
}
 
function subNum(){
    var num1 = Number(document.getElementById("input1").value);
    var num2 = Number(document.getElementById("input2").value);

    var resultadoSub = num1 - num2;

    document.getElementById("input_result").value = resultadoSub;
}

function multNum(){
    var num1 = Number(document.getElementById("input1").value);
    var num2 = Number(document.getElementById("input2").value);

    var resultadoMult = num1 * num2;

    document.getElementById("input_result").value = resultadoMult;
}

function divNum(){
    var num1 = Number(document.getElementById("input1").value);
    var num2 = Number(document.getElementById("input2").value);

    var resultadoDiv = num1 / num2;

    document.getElementById("input_result").value = resultadoDiv;
}

function limparInputs(){
    input1.value = "";
    input2.value = "";
    input_result.value = "";
}