import { renderHook, act } from "@testing-library/react-hooks";
import { BigNumberish } from "ethers";
import { NftSmartWalletAuthority } from "../../../types";
import { useDeposit } from "./useDeposit";

describe("useDeposit", () => {
  it.skip("should show nfts for the nft smart wallet", async () => {
    const nftSmartWalletAuthority = jest.fn();
    const { result, waitForNextUpdate } = renderHook(() => useDeposit(nftSmartWalletAuthority as any));
    expect(result.current.walletAddress).toBe("");
  });

  it("should be able to deposit a nft into your smart contract wallet", async () => {
    const nftSmartWalletMvp = jest.fn(() => ({
      callStatic: {
        depositNFT: (_nft: string, _tokenId: string) => Promise.resolve("1"),
      },
    }));
    const { result, waitForNextUpdate } = renderHook(() => useDeposit(nftSmartWalletMvp() as any));
    await act(async () => {
      await result.current.depositNFT("x", "x");
    });
    expect(nftSmartWalletMvp.mock.calls.length).toEqual(1);
  });

  it("should be able to deposit a token into your smart contract wallet", async () => {
    const nftSmartWalletMvp = jest.fn(() => ({
      callStatic: {
        depositToken: (_token: string, _amount: BigNumberish) => Promise.resolve("1"),
      },
    }));
    const { result, waitForNextUpdate } = renderHook(() => useDeposit(nftSmartWalletMvp() as any));
    await act(async () => {
      await result.current.depositToken("x", "100000000000");
    });
    expect(nftSmartWalletMvp.mock.calls.length).toEqual(1);
  });
});
