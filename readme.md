# atonic

Remove diacritics/accents from a string. Works for LATIN and CYRILLYC scripts.

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

// convert only CYRILLYC chars:
atonic.cyrillyc('ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ӴӵӶӷӸӹӺӻӼӽӾӿЀ');
// out: ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ-Iлｔèｒｎåｔïｏｎɑｌíƶａ-ЧчГгЫыГгХхХхЕ

```