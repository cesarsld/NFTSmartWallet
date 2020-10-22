import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { render, RenderResult, RenderOptions } from "@testing-library/react";
import { ThemeProvider, theme } from "@chakra-ui/core";

const AllTheProviders: React.FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render, renderHook };
