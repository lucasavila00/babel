import { parse } from "../lib/index.js";

it("works1", function () {
  const code = `
a is 2;
`;
  const res = parse(code, {
    errorRecovery: false,
    sourceType: "script",
  });
});
it("works2", function () {
  const code = `
a is 2 or 3;
  `;
  const res = parse(code, {
    errorRecovery: false,
    sourceType: "script",
  });
  console.log(res);
});

it("works3", function () {
  const code = `
  a is 2 or (3 and 4);
    `;
  const res = parse(code, {
    errorRecovery: false,
    sourceType: "script",
  });
  console.log(res);
});

it.only("works4", function () {
  const code = `
a is not 2;
      `;
  const res = parse(code, {
    errorRecovery: false,
    sourceType: "script",
  });
  console.log(res);
});
