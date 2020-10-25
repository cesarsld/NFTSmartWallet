import React from "react";
import { render, act, fireEvent } from "../../../lib/test-utils";
import { ProposeNFTAgreementForm, dataTestIds } from "../ProposeNFTAgreementForm/ProposeNFTAgreementForm";

it("should propose a nft agreement", async () => {
  const proposeNFTAgreement = jest.fn();
  const nftSmartWalletMvpFn = jest.fn(() => ({
    callStatic: {
      proposeNFTAgreement,
    },
  }));
  const nftSmartWalletMvp = nftSmartWalletMvpFn();
  const useNFTAgreement = jest.fn(() => ({
    walletAddress: "",
    proposeNFTAgreement,
  }));
  const result = render(
    <ProposeNFTAgreementForm nftSmartWalletMvp={nftSmartWalletMvp as any} useNFTAgreement={useNFTAgreement as any} />
  );
  expect(await result.getByTestId(dataTestIds.proposeNFTAgreementButton)).toHaveTextContent("Propose NFT Agreement");
  await act(async () => {
    await fireEvent.change(await result.getByTestId(dataTestIds.nftInput), { target: { value: "0x0" } });
    await fireEvent.change(await result.getByTestId(dataTestIds.tokenIdInput), { target: { value: "0x1" } });
    await fireEvent.change(await result.getByTestId(dataTestIds.borrowerInput), { target: { value: "0x2" } });
    await fireEvent.change(await result.getByTestId(dataTestIds.endDateInput), { target: { value: "1994-06-13" } });
    await fireEvent.click(await result.getByTestId(dataTestIds.proposeNFTAgreementButton));
  });
  expect(nftSmartWalletMvpFn.mock.calls.length).toEqual(1);
  expect(proposeNFTAgreement.mock.calls[0]).toEqual(["0x0", "0x1", "0x2", "1994-06-13"]);
});
