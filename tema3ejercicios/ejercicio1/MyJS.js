function myFunction() {
	document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function myFunction2() {
    const pdemo = document.getElementById("demo");
    const pdefault = pdemo.innerText;
    pdemo.innerText = "A Paragraph"

    pdefault;
}