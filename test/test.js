'use strict';

var atonic = require('../lib');
var maps = require('../lib/maps');
var assert = require('chai').assert;

describe('default', function() {
	it('atonic("") - all maps', function() {
		assert.equal('A,a,A,a,O,oУу У у Ч ч Г г Ы ы Г г Х х Х хЕ  Е Ђ Г Є Ѕ І І Ј Љ Њ Ћ К И У Џ', atonic('Å,å,Ä,ä,Ö,öӰӱ Ӳ ӳ Ӵ ӵ Ӷ ӷ Ӹ ӹ Ӻ ӻ Ӽ ӽ Ӿ ӿЀ  Ё Ђ Ѓ Є Ѕ І Ї Ј Љ Њ Ћ Ќ Ѝ Ў Џ'));
		assert.equal('Internationalizati0n', atonic('Inｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ'));
		assert.equal('AAAAAAAECEEEEIIII-Internationaliza-ЧчГгЫыГгХхХхЕ', atonic('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Inｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ'));
		assert.equal('Приморскии краи', atonic('Примо́рский край'));
		//assert.equal('AAAAAAAECEEEEIIII-Internationaliza-ЧчГгЫыГгХхХхЕ', atonic('℀  ℁ ℂ ℃ ℄ ℅ ℆ ℇ ℈ ℉ ℊ ℋ ℌ ℍ ℎ ℏⅈ'));
	});
	it('atonic.lowerCase("")', function() {
		assert.equal('Å,a,Ä,a,Ö,oӰу Ӳ у Ӵ ч Ӷ г', atonic.lowerCase('Å,å,Ä,ä,Ö,öӰӱ Ӳ ӳ Ӵ ӵ Ӷ ӷ'));
		assert.equal('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Internationaliza-ӴчӶгӸыӺгӼхӾхЀ', atonic.lowerCase('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Inｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ'));
	});
	it('atonic.upperCase("")', function() {
		assert.equal('A,å,A,ä,O,öУӱ У ӳ Ч ӵ Г ӷ', atonic.upperCase('Å,å,Ä,ä,Ö,öӰӱ Ӳ ӳ Ӵ ӵ Ӷ ӷ'));
		assert.equal('AAAAAAAECEEEEIIII-Inｔèｒｎåｔïｏｎɑｌíƶａ-ЧӵГӷЫӹГӻХӽХӿЕ', atonic.upperCase('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Inｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ'));
	});
	it('atonic.latin("")', function() {
		assert.equal('Internationalizati0n', atonic.latin('Inｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ'));
		assert.equal('AAAAAAAECEEEEIIII-Internationaliza', atonic.latin('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Inｔèｒｎåｔïｏｎɑｌíƶａ'));
		assert.equal('AAAAAAAECEEEEIIII-Internationaliza-ӴӵӶӷӸӹӺӻӼӽӾӿЀ', atonic.latin('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Inｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ'));
	});
	it('atonic.latinUpperCase("")', function() {
		assert.equal('AAAAAAAECEEEEIIII', atonic.latin('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ'));
	});
	it('atonic.cyrillic("")', function() {
		assert.equal('ЕЕГГгҔҕЖжЗзкКк', atonic.cyrillic('ЀЁЃҒғҔҕҖҗҘҙҝҞҟ'));
		assert.equal('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Inｔèｒｎåｔïｏｎɑｌíƶａ-ЧчГгЫыГгХхХхЕ', atonic.cyrillic('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Inｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ'));
	});
});

describe('maps', function() {
	it('Latin', function() {
		var names = ['LATIN', 'latin'];
		names.forEach(function(name) {
			var map = maps[name];
			for (var key in map) {
				var codes = map[key];
				for (var j = 0; j < codes.length; j++) {
					var code = codes[j];
					var cd = code.charCodeAt(0);
					if (0x0400 <= cd && cd <= 0x04FF) {
						throw new Error('Cirilyc char in Latin: ' + code);
					}
				}
			}
		});
	});
});
