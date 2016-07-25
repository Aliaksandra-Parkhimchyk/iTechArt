//2
window.addEventListener('load', function () {

    var status = 'less';

    var body = document.getElementsByTagName('body')[0];
    var element1 = document.createElement('div');
    var element2 = document.getElementsByTagName('p')[0];
    var element3 = document.createElement('button');
    body.appendChild(element1);
    element1.appendChild(element2);
    element1.appendChild(element3);

    var text = element2.innerHTML;
    var piece = element2.innerHTML = text.substr(0, 500);
    element3.innerHTML = 'Show more';

    element3.addEventListener('click', function () {

        if (status === 'less') {
            element2.innerHTML = text;
            element3.innerHTML = 'Show less';
            status = 'more';
        } else if (status === 'more') {
            element2.innerHTML = piece;
            element3.innerHTML = 'Show more';
            status = 'less'
        }
    });
});