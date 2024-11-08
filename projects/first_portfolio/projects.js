document.addEventListener('DOMContentLoaded', function(event) {
    var str = 'Homepage: My Projects';
    var text = document.querySelector('#title');
    text.innerHTML = '';

    var i = 0;
    var j = 0;

    var titleText = setInterval(function() {
        if (i == str.length) {
            clearInterval(titleText);
            setInterval(function() {
                if (j == 1) {
                    j = 0;
                    text.innerHTML = str + '|';
                }
                else {
                    j = 1;
                    text.innerHTML = str;
                }
            }, 500);
        }
        else {
            i++;
            text.innerHTML = str.slice(0, i) + '|';
        }
    }, 175);
});
