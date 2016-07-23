var dateDisplayFormatter = {

    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    func1: function (str) {
        var strSplit = str.split('');
        strSplit.splice(2, 0, '-');
        strSplit.splice(5, 0, '-');
        return strSplit.join('');
    },

    func2: function (str) {
        var strSplit = str.split('');
        strSplit.splice(2, 2, ' ' + this.months[Number(strSplit[2] + strSplit[3]) - 1] + ' ');
        return strSplit.join('');
    },

    func3: function (str, fromFormat) {
        var strSplit = str.split('');
        strSplit.splice(4, 2, ' ' + this.months[Number(strSplit[4] + strSplit[5]) - 1] + ' ');
        strSplit.splice(0, 0, strSplit[strSplit.length - 2] + strSplit[strSplit.length - 1] + strSplit[strSplit.length - 3]);
        delete strSplit[strSplit.length - 1];
        delete strSplit[strSplit.length - 2];
        delete strSplit[strSplit.length - 3];
        return strSplit.join('');
    },

    func4: function (str, fromFormat, toFormat) {
        var strSplit = str.split('');
        strSplit.splice(0, 0, strSplit[strSplit.length - 2] + strSplit[strSplit.length - 1]);
        strSplit.splice(0, 0, strSplit[strSplit.length - 4] + strSplit[strSplit.length - 3]);
        delete strSplit[strSplit.length - 1];
        delete strSplit[strSplit.length - 2];
        delete strSplit[strSplit.length - 3];
        delete strSplit[strSplit.length - 4];
        strSplit.splice(1, 0, '-');
        strSplit.splice(3, 0, '-');
        return strSplit.join('');
    },

    func5: function (str, fromFormat) {
        return new Date().getFullYear() - str.split('-')[0] + ' years ago';
    }
};

console.log(dateDisplayFormatter.func1('31102011'));
console.log(dateDisplayFormatter.func2('31102011'));
console.log(dateDisplayFormatter.func3('20130431', 'YYYYMMDD'));
console.log(dateDisplayFormatter.func4('20130431', 'YYYYMMDD', 'MM-DD-YYYY'));
console.log(dateDisplayFormatter.func5('2013-04-31', 'YYYY-MM-DD'));


var textFormatter = {

    /*
     Тут бы нужно было чтобы строка разбивалась на строки по N символов, но с учетом слов,
     тоесть если достигнут порог в N символов, тогда следующее слово было уже на новой строке
      */
    byWord: function (str) {
        return str.replace(' ', '\n');
    },

    // Тут бы нужно было чтобы строка разбивалась на строки по N символов
    bySymbol: function (str, n) {
        var strSplit = str.split('');
        strSplit.splice(2, 0, '\n');
        return strSplit.join('');
    },

    // Тут можно без учета уже ограничения на N символов, просто чтобы быстрее сделать.
    bySentence: function (str) {
        var strSplit = str.split('.');
        var a = '';
        for (var i = 0; i < strSplit.length - 1; i += 1) {
            a += strSplit[i] + '.' + '\n';
        }
        return a;
    },

    byNo: function (str) {
        return str;
    }
};

console.log(textFormatter.byWord('abc def'));
console.log(textFormatter.bySymbol('abcdef', 2));
console.log(textFormatter.bySentence('Abc.Def.'));
console.log(textFormatter.byNo('abcdef'));

var stringCalculator = {

    // тут бы наверное лучше заменить Number() на parseInt(), как думаешь почему?

    addition: function (str1, str2) {
        return parseInt(str1) + parseInt(str2);
    },

    subtraction: function (str1, str2) {
        return parseInt(str1) - parseInt(str2);
    },

    multiplication: function (str1, str2) {
        return parseInt(str1) * parseInt(str2);
    },

    division: function (str1, str2) {
        return parseInt(str1) / parseInt(str2);
    }
};

console.log(stringCalculator.addition('123', '456'));
console.log(stringCalculator.subtraction('123', '456'));
console.log(stringCalculator.multiplication('123', '456'));
console.log(stringCalculator.division('123', '456'));