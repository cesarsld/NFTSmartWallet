import React, { useContext } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { Web3Context, UseWeb3 } from "./useWeb3";
import { BigNumber, providers } from "ethers";

it("should set and use an address", () => {
  const wrapper = ({ children }) => <UseWeb3>{children}</UseWeb3>;
  const { result } = renderHook(() => useContext(Web3Context), { wrapper });
  act(() => {
    result.current.address[1]("0x0");
  });
  expect(result.current.address[0]).toBe("0x0");
});

it("should set and use an ethBalance", () => {
  const wrapper = ({ children }) => <UseWeb3>{children}</UseWeb3>;
  const { result } = renderHook(() => useContext(Web3Context), { wrapper });
  act(() => {
    result.current.ethBalance[1](BigNumber.from("1"));
  });
  expect(result.current.ethBalance[0]).toEqual(BigNumber.from("1"));
});

it("should set and use a signer", async () => {
  const wrapper = ({ children }) => <UseWeb3>{children}</UseWeb3>;
  const { result, waitForNextUpdate } = renderHook(() => useContext(Web3Context), { wrapper });
  const getAddress = jest.fn();
  const signerFn = jest.fn<providers.JsonRpcSigner, any>(() => ({ getAddress } as any));
  const signer = signerFn();
  await act(async () => {
    result.current.signer[1](signer);
  });
  waitForNextUpdate();
  await act(async () => {
    await result.current.signer[0].getAddress();
  });
  expect(getAddress.mock.calls.length).toBe(1);
});

it("should set and use a provider", async () => {
  const wrapper = ({ children }) => <UseWeb3>{children}</UseWeb3>;
  const { result, waitForNextUpdate } = renderHook(() => useContext(Web3Context), { wrapper });
  const getBlockNumber = jest.fn();
  const providerFn = jest.fn<providers.Web3Provider, any>(() => ({ getBlockNumber } as any));
  const provider = providerFn();
  await act(async () => {
    result.current.provider[1](provider);
  });
  waitForNextUpdate();
  await act(async () => {
    await result.current.provider[0].getBlockNumber();
  });
  expect(getBlockNumber.mock.calls.length).toBe(1);
});
