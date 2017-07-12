function button(id) {
    var value = document.getElementById(id).value;
    document.getElementById('display').value += value;
}

document.getElementById("clr").onclick = function(){
    document.getElementById("display").value = "";
}

document.getElementById("div").onclick = function(){
    document.getElementById("display").value += "/";
}



document.getElementById("eval").onclick = function(){
    document.getElementById("display").value = eval(document.getElementById('display').value);
}

it("calculate(12 + 34) = 46", function() {
  assert.equal(calculator.calculate("12 + 34"), 46);
});

it("calculate(34 - 12) = 22", function() {
  assert.equal(calculator.calculate("34 - 12"), 22);
});

it("calculate(2 * 3) = 6", function() {
  calculator.addMethod("*", function(A, B) {
    return A * B;
  });
  assert.equal(calculator.calculate("2 * 3"), 6);
});

it("calculate(2 ** 3) = 8", function() {
  calculator.addMethod("**", function(A, B) {
    return Math.pow(A, B);
  });
});

function proverka(input) {
    input.value = input.value.replace(/[^\d+]/igm, '');
};
