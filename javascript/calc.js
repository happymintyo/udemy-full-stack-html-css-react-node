var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var result = document.getElementById('result');
var form = document.getElementById('xispercentofy');

form.addEventListener('submit', function(event) {
    if (!this.num1.value || !this.num2.value) {
        alert('missing value!');
    } else {
        var x = parseFloat(this.num1.value);
        var y = parseFloat(this.num2.value);

        result.innerText = Math.round((x/y)*100).toFixed(2) + '%';
        event.preventDefault();
    }
});