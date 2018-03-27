window.addEventListener('load', function () {
    initializeCSS();
    initializeSnackbar();
    findExpressions();

    setTimeout(findExpressions, 1500);

    setTimeout(function() {
        var nodesHighlighted = document.getElementsByClassName("gh-debug-finder-highlighted");

        callSnackbar("Foram encontrados " + nodesHighlighted.length + " códigos referentes à debug");
    }, 2000);
    
});

function initializeCSS() {
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = (function () {
        /*
        #snackbar {
            visibility: hidden;
            min-width: 250px;
            margin-left: -125px;
            background-color: #333;
            color: #fff;
            text-align: center;
            border-radius: 2px;
            padding: 16px;
            position: fixed;
            z-index: 1;
            left: 47%;
            bottom: 30px;
        }

        #snackbar.show {
            visibility: visible;
            -webkit - animation: fadein 0.5s, fadeout 0.5s 2.5s;
            animation: fadein 0.5s, fadeout 0.5s 2.5s;
        }

        @-webkit - keyframes fadein {
            from { bottom: 0; opacity: 0; }
            to { bottom: 30px; opacity: 1; }
        }

        @keyframes fadein {
            from { bottom: 0; opacity: 0; }
            to { bottom: 30px; opacity: 1; }
        }

        @-webkit - keyframes fadeout {
            from { bottom: 30px; opacity: 1; }
            to { bottom: 0; opacity: 0; }
        }

        @keyframes fadeout {
            from { bottom: 30px; opacity: 1; }
            to { bottom: 0; opacity: 0; }
        }
        */
    }).toString().split('\n').slice(2, -2).join('\n').trim();
    document.body.appendChild(css);
}

function initializeSnackbar() {
    var elSnackbar = document.createElement('div');
    elSnackbar.id = 'snackbar';
    document.body.appendChild(elSnackbar);
}

function highlight(text) {
    document.body.innerHTML = document.body.innerHTML.replace(
        new RegExp(text, 'gi'),
        '<span class="gh-debug-finder-highlighted" style="background-color:#ff0;font-size:100%">$&</span>'
    );
}

function findExpressions() {
    //highlight("die");
    highlight("console.error");
    highlight("console.info");
    highlight("console.log");
    highlight("console.warn");
    highlight("print_r");
    highlight("print");
    highlight("var_dump");
}

function callSnackbar(text) {
    // Get the snackbar DIV
    var elSnackbar = document.getElementById("snackbar");

    // Update snackbar message
    elSnackbar.innerHTML = text;

    // Add the "show" class to DIV
    elSnackbar.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { elSnackbar.className = elSnackbar.className.replace("show", ""); }, 10000);
}