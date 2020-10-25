import { renderHook, act } from "@testing-library/react-hooks";
import { BigNumberish } from "ethers";
import { NftSmartWalletAuthority } from "../../../types";
import { useNFTAgreement } from "./useNFTAgreement";

describe("useNFTAgreement", () => {
  it.skip("should show nft agreement history for the nft smart wallet", async () => {});

  it("should be able to propose a NFT agreement to a borrower with an end date", async () => {
    const proposeNFTAgreement = jest.fn(
      (_nft: string, _tokenId: BigNumberish, _borrower: string, _endDate: BigNumberish) => Promise.resolve()
    );

    const nftSmartWalletMvp = jest.fn(() => ({
      callStatic: {
        proposeNFTAgreement,
      },
    }));
    const { result, waitForNextUpdate } = renderHook(() => useNFTAgreement(nftSmartWalletMvp() as any));
    await act(async () => {
      await result.current.proposeNFTAgreement("0x0", "0x1", "0x2", "1994-06-13");
    });
    expect(proposeNFTAgreement.mock.calls[0]).toEqual(["0x0", "0x1", "0x2", "1994-06-13"]);
    expect(nftSmartWalletMvp.mock.calls.length).toEqual(1);
  });
});
