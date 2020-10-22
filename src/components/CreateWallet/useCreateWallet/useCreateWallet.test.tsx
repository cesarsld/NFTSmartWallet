import { renderHook, act } from "@testing-library/react-hooks";
import { NftSmartWalletAuthority } from "../../../types";
import { useCreateWallet } from "./useCreateWallet";

describe("useCreateWallet", () => {
  it("should have empty address by default", async () => {
    const nftSmartWalletAuthority = jest.fn();
    const { result, waitForNextUpdate } = renderHook(() => useCreateWallet(nftSmartWalletAuthority as any));
    expect(result.current.walletAddress).toBe("");
  });

  it("should be able to create a wallet for you", async () => {
    const nftSmartWalletAuthority = jest.fn(() => ({
      callStatic: {
        createWallet: () => Promise.resolve("1"),
      },
    }));
    const { result, waitForNextUpdate } = renderHook(() => useCreateWallet(nftSmartWalletAuthority() as any));
    await act(async () => {
      await result.current.createWallet();
    });
    expect(result.current.walletAddress).toBe("1");
  });
});
