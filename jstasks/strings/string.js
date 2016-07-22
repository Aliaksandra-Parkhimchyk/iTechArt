var dateDisplayFormatter = {

    func1: function (str) {
        var strSplit = str.split('');
        strSplit.splice(2, 0, '-');
        strSplit.splice(5, 0, '-');
        return strSplit.join('');
    },

    func2: function (str) {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var strSplit = str.split('');
        strSplit.splice(2, 2, ' ' + months[Number(strSplit[2] + strSplit[3]) - 1] + ' ');
        return strSplit.join('');
    },

    func3: function (str, format) {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var strSplit = str.split('');
        strSplit.splice(4, 2, ' ' + months[Number(strSplit[4] + strSplit[5]) - 1] + ' ');
        strSplit.splice(0, 0, strSplit[strSplit.length - 2] + strSplit[strSplit.length - 1] + strSplit[strSplit.length - 3]);
        delete strSplit[strSplit.length - 1] + strSplit[strSplit.length - 2] + strSplit[strSplit.length - 3];
        return strSplit.join('');
    }
};

console.log(dateDisplayFormatter.func1('31102011'));
console.log(dateDisplayFormatter.func2('31102011'));
console.log(dateDisplayFormatter.func3('20130431', 'YYYYMMDD'));

var textFormatter = {

    byWord: function (str) {
        return str.replace(' ', '\n');
    },

    bySymbol: function (str, n) {
        var strSplit = str.split('');
        strSplit.splice(2, 0, '\n');
        return strSplit.join('');
    },

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