import React from "react";
import { render } from "../lib/test-utils";

it("lol", () => {
  const result = render(<div data-testid="lol">hey</div>);
  expect(result.getByTestId("lol")).toHaveTextContent("hey");
});
