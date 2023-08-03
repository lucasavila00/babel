import { parse } from "../lib/index.js";

it("works1", function () {
  const code = `
a is [let b, let c];
`;
  const res = parse(code, {
    errorRecovery: false,
    sourceType: "script",
  });
});

/*

# Destructuring matchers:
  - [x] array + len
  - [x] array + rest
  - [x] array + let rest

  - [x] object
  - [x] object + let rest

  - [x] binding matchers

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
