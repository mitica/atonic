# atonic

Remove diacritics from strings. Works for LATIN and CYRILLIC scripts.

## Usage

```
var atonic = require('atonic');

atonic('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ');
// out: AAAAAAAECEEEEIIII-Internationaliza-ЧчГгЫыГгХхХхЕ

// convert only lower case chars:
atonic.lowerCase('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ');
// out: ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Internationaliza-ӴчӶгӸыӺгӼхӾхЀ

// convert only LATIN chars:
atonic.latin('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ');
// out: AAAAAAAECEEEEIIII-Internationaliza-ӴӵӶӷӸӹӺӻӼӽӾӿЀ

// convert only CYRILLIC chars:
atonic.cyrillic('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ');
// out: ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ЧчГгЫыГгХхХхЕ

```