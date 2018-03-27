window.addEventListener('load', function () {
    highlight("die");
    highlight("console.error");
    highlight("console.info");
    highlight("console.log");
    highlight("console.warn");
    highlight("print");
    highlight("print_r");
    highlight("var_dump");
});

function highlight(text) {
    document.body.innerHTML = document.body.innerHTML.replace(
        new RegExp(text, 'gi'),
        '<b style="background-color:#ff0;font-size:100%">$&</b>'
    );
}