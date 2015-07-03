var atonic = require('../lib');
var assert = require('chai').assert;

describe('default', function() {
  it('atonic("") - all maps', function() {
    assert.equal('A,a,A,a,O,oУу У у Ч ч Г г Ы ы Г г Х х Х хЕ  Е Ђ Г Є Ѕ І І Ј Љ Њ Ћ К И У Џ', atonic("Å,å,Ä,ä,Ö,öӰӱ Ӳ ӳ Ӵ ӵ Ӷ ӷ Ӹ ӹ Ӻ ӻ Ӽ ӽ Ӿ ӿЀ  Ё Ђ Ѓ Є Ѕ І Ї Ј Љ Њ Ћ Ќ Ѝ Ў Џ"));
    assert.equal('Internationalizati0n', atonic("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"));
    assert.equal('AAAAAAAECEEEEIIII-Internationaliza-ЧчГгЫыГгХхХхЕ', atonic("ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ"));
  });
  it('atonic.lowerCase("")', function() {
    assert.equal('Å,a,Ä,a,Ö,oӰу Ӳ у Ӵ ч Ӷ г', atonic.lowerCase("Å,å,Ä,ä,Ö,öӰӱ Ӳ ӳ Ӵ ӵ Ӷ ӷ"));
    assert.equal('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Internationaliza-ӴчӶгӸыӺгӼхӾхЀ', atonic.lowerCase("ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ"));
  });
  it('atonic.upperCase("")', function() {
    assert.equal('A,å,A,ä,O,öУӱ У ӳ Ч ӵ Г ӷ', atonic.upperCase("Å,å,Ä,ä,Ö,öӰӱ Ӳ ӳ Ӵ ӵ Ӷ ӷ"));
    assert.equal('AAAAAAAECEEEEIIII-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ЧӵГӷЫӹГӻХӽХӿЕ', atonic.upperCase("ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ"));
  });
  it('atonic.latin("")', function() {
    assert.equal('Internationalizati0n', atonic.latin("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"));
    assert.equal('AAAAAAAECEEEEIIII-Internationaliza', atonic.latin("ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ"));
    assert.equal('AAAAAAAECEEEEIIII-Internationaliza-ӴӵӶӷӸӹӺӻӼӽӾӿЀ', atonic.latin("ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ"));
  });
  it('atonic.latinUpperCase("")', function() {
    assert.equal('AAAAAAAECEEEEIIII', atonic.latin("ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ"));
  });
  it('atonic.cyrillyc("")', function() {
    assert.equal('ЕЕГГгҔҕЖжЗзкКк', atonic.cyrillyc("ЀЁЃҒғҔҕҖҗҘҙҝҞҟ"));
    assert.equal('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ЧчГгЫыГгХхХхЕ', atonic.cyrillyc("ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ"));
  });
});
