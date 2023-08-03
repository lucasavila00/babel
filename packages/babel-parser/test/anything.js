import { parse } from "../lib/index.js";

it("works1", function () {
  const code = `
a instanceof 2;
`;
  const res = parse(code, {
    errorRecovery: false,
    sourceType: "script",
  });
});
it.only("works2", function () {
  const code = `
a is 2;
  `;
  const res = parse(code, {
    errorRecovery: false,
    sourceType: "script",
  });
  console.log(res);
});
