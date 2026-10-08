'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {

  const obj1 = { name: John };
  let obj2 = { name: John };

  obj1.name = NotJohn;
  obj2.name = NotJohn;

  obj2 = { name: Richard };
  // obj1 reassignment will cause error because of const
};

module.exports = { fn };
