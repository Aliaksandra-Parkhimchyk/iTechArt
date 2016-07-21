var dateDisplayFormatter = {

    func1: function (str) {
        var strSplit = str.split('');
        strSplit.splice(2, 0, '-');
        strSplit.splice(5, 0, '-');
        return strSplit.join('');
    }
};

console.log(dateDisplayFormatter.func1('31102011'));

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
        for(var i = 0; i < strSplit.length - 1; i += 1) {
            a += strSplit[i]  + '.' + '\n';
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
        return Number(str1) + Number(str2);
    },

    subtraction: function (str1, str2) {
        return Number(str1) - Number(str2);
    },

    multiplication: function (str1, str2) {
        return Number(str1) * Number(str2);
    },

    division: function (str1, str2) {
        return Number(str1) / Number(str2);
    }
};

console.log(stringCalculator.addition('123', '456'));
console.log(stringCalculator.subtraction('123', '456'));
console.log(stringCalculator.multiplication('123', '456'));
console.log(stringCalculator.division('123', '456'));