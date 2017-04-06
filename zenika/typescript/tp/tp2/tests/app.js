"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var tp_1 = require("../src/tp");
var helloWorld;
ava_1.default.before(function (t) {
    helloWorld = new tp_1.HelloWorld();
});
ava_1.default('sayHello appelée sans arguments', function (t) {
    t.is(helloWorld.sayHello(), 'Hello World!');
});
ava_1.default('sayHello appelée avec un paramétre', function (t) {
    t.is(helloWorld.sayHello('Zenika'), 'Hello Zenika!');
});
