import test from 'ava';
import { HelloWorld } from '../src/tp';

let helloWorld : HelloWorld;

test.before(t => {
  helloWorld = new HelloWorld();
});

test('sayHello appelée sans arguments', t => {
  t.is(helloWorld.sayHello(), 'Hello World!');
});

test('sayHello appelée avec un paramétre', t => {
  t.is(helloWorld.sayHello('Zenika'), 'Hello Zenika!');
});
