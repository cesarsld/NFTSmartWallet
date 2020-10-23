import React from "react";
import { act, fireEvent, render } from "../../lib/test-utils";
import { NFTSmartWallet, dataTestIds } from "./NFTSmartWallet";

describe("NFTSmartWallet", () => {
  it.skip("should show nfts owned by the smart wallet", async () => {});
  it.skip("should show tokens owned by the smart wallet", async () => {});

  it("should be able deposit a nft", async () => {
    const depositNFTFn = jest.fn(() => ({
      callStatic: {
        depositNFT: () => Promise.resolve(),
        depositToken: () => Promise.resolve(),
      },
    }));
    const nftSmartWalletMvp = depositNFTFn();
    const depositNFT = jest.fn(() => {
      nftSmartWalletMvp.callStatic.depositNFT();
    });

    const depositToken = jest.fn(() => {
      nftSmartWalletMvp.callStatic.depositToken();
    });
    const useDeposit = jest.fn(() => ({
      walletAddress: "",
      depositNFT,
      depositToken,
    }));
    const result = render(
      <NFTSmartWallet nftSmartWalletMvp={nftSmartWalletMvp as any} useDeposit={useDeposit as any} />
    );
    expect(await result.getByTestId(dataTestIds.depositNFTButton)).toHaveTextContent("Deposit NFT");
    await act(async () => {
      await fireEvent.click(await result.getByTestId(dataTestIds.depositNFTButton));
    });
    expect(depositNFTFn.mock.calls.length).toEqual(1);
    // NOTE - No event emitted for deposit...
    // Hard to get all nfts owned by the smart wallet too
  });

  it("should deposit a token amount", async () => {
    const nftSmartWalletMvpFn = jest.fn(() => ({
      callStatic: {
        depositNFT: () => Promise.resolve(),
        depositToken: () => Promise.resolve(),
      },
    }));
    const nftSmartWalletMvp = nftSmartWalletMvpFn();
    const depositNFT = jest.fn(() => {
      nftSmartWalletMvp.callStatic.depositNFT();
    });

    const depositToken = jest.fn(() => {
      nftSmartWalletMvp.callStatic.depositToken();
    });
    const useDeposit = jest.fn(() => ({
      walletAddress: "",
      depositNFT,
      depositToken,
    }));
    const result = render(
      <NFTSmartWallet nftSmartWalletMvp={nftSmartWalletMvp as any} useDeposit={useDeposit as any} />
    );
    expect(await result.getByTestId(dataTestIds.depositTokenButton)).toHaveTextContent("Deposit Token");
    await act(async () => {
      await fireEvent.click(await result.getByTestId(dataTestIds.depositTokenButton));
    });
    expect(nftSmartWalletMvpFn.mock.calls.length).toEqual(1);
    // NOTE - No event emitted for deposit...
    // Hard to get all tokens owned by the smart wallet too
  });
});
