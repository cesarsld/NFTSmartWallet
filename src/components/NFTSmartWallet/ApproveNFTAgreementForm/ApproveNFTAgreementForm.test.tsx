import React from "react";
import { render, act, fireEvent } from "../../../lib/test-utils";
import { ApproveNFTAgreementForm, dataTestIds } from "../ApproveNFTAgreementForm/ApproveNFTAgreementForm";

it("should approve a nft agreement", async () => {
  const approveNFTAgreement = jest.fn();
  const nftSmartWalletMvpFn = jest.fn(() => ({
    callStatic: {
      approveNFTAgreement,
    },
  }));
  const nftSmartWalletMvp = nftSmartWalletMvpFn();
  const result = render(<ApproveNFTAgreementForm nftSmartWalletMvp={nftSmartWalletMvp as any} />);
  expect(await result.getByTestId(dataTestIds.approveNFTAgreementButton)).toHaveTextContent("Approve NFT Agreement");
  await act(async () => {
    await fireEvent.change(await result.getByTestId(dataTestIds.lenderInput), { target: { value: "0x0" } });
    await fireEvent.change(await result.getByTestId(dataTestIds.nftInput), { target: { value: "0x1" } });
    await fireEvent.change(await result.getByTestId(dataTestIds.tokenIdInput), { target: { value: "0x2" } });
    await fireEvent.click(await result.getByTestId(dataTestIds.approveNFTAgreementButton));
  });
  expect(nftSmartWalletMvpFn.mock.calls.length).toEqual(1);
  expect(approveNFTAgreement.mock.calls[0]).toEqual(["0x0", "0x1", "0x2"]);
});
