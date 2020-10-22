import React from "react";
import { act, fireEvent, render } from "../../lib/test-utils";
import { CreateWallet, dataTestIds } from "./CreateWallet";

describe("CreateWallet", () => {
  it("should have a button to create a wallet", async () => {
    const nftSmartWalletAuthorityFn = jest.fn(() => ({
      callStatic: {
        createWallet: () => Promise.resolve("1"),
      },
    }));
    const nftSmartWalletAuthority = nftSmartWalletAuthorityFn();
    const createWallet = jest.fn(() => {
      nftSmartWalletAuthority.callStatic.createWallet();
    });
    const useCreateWallet = jest.fn(() => ({
      walletAddress: "",
      createWallet,
    }));
    const result = render(
      <CreateWallet nftSmartWalletAuthority={nftSmartWalletAuthority as any} useCreateWallet={useCreateWallet as any} />
    );
    expect(await result.getByTestId(dataTestIds.createWalletButton)).toHaveTextContent("Create Wallet");
    await act(async () => {
      await fireEvent.click(await result.getByTestId(dataTestIds.createWalletButton));
    });
    expect(nftSmartWalletAuthorityFn.mock.calls.length).toEqual(1);

    // OMG THIS WORKS?
    expect(await result.getByTestId(dataTestIds.walletAddress)).toHaveTextContent("Created Wallet Address: 1");
  });
});
