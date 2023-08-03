import { parse } from "../lib/index.js";

it("works1", function () {
  const code = `
a is undefined;
`;
  const res = parse(code, {
    errorRecovery: false,
    sourceType: "script",
  });
});

/*

# Destructuring matchers:
  - [ ] array + len
  - [ ] array + rest
  - [ ] array + let rest

  - [ ] object + len
  - [ ] object + rest
  - [ ] object + let rest

  - [ ] binding matchers

# Value-testing matchers:

## literal matchers
  - [x] number primitive
  - [x] string primitive
  - [x] boolean primitive
  - [x] null primitive
  - [x] undefined primitive
  - [x] bigint primitive
  - [x] NaN primitive
  - [x] unary +/-
  - [x] -0 and +0

## variable matchers
  - [ ] <plain-or-dotted-ident>
  - [ ] <plain-or-dotted-ident>(<matcher-list>)



*/
