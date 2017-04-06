"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberToString;
(function (NumberToString) {
    NumberToString[NumberToString["un"] = 1] = "un";
    NumberToString[NumberToString["deux"] = 2] = "deux";
    NumberToString[NumberToString["trois"] = 3] = "trois";
    NumberToString[NumberToString["quatre"] = 4] = "quatre";
    NumberToString[NumberToString["cinq"] = 5] = "cinq";
    NumberToString[NumberToString["six"] = 6] = "six";
    NumberToString[NumberToString["sept"] = 7] = "sept";
    NumberToString[NumberToString["huit"] = 8] = "huit";
    NumberToString[NumberToString["neuf"] = 9] = "neuf";
})(NumberToString || (NumberToString = {}));
;
function returnPeopleAndLength(peoples) {
    if (peoples === void 0) { peoples = ['Miles', 'Mick']; }
    // let result: [string, number][] = [];
    // peoples.forEach(name => {
    //  const tuple : [string, number] = [name, name.length];
    //  result.push(tuple);
    // });
    // return result;
    return peoples.map(function (name) { return [name, name.length]; });
}
exports.returnPeopleAndLength = returnPeopleAndLength;
function displayPeopleAndLength(peoples, literal) {
    returnPeopleAndLength(peoples).forEach(function (tuple) {
        var nom = tuple[0], charNumber = tuple[1];
        if (literal && charNumber <= 9) {
            console.log(nom + " contient " + NumberToString[charNumber] + " caract\u00E8res");
        }
        // v1: console.log(`${tuple[0]} contient ${tuple[1]} caractères`);
        console.log(nom + " contient " + charNumber + " caract\u00E8res");
    });
}
exports.displayPeopleAndLength = displayPeopleAndLength;
