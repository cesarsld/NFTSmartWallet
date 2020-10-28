import React from "react";
import { useFormik } from "formik";
import { BigNumberish } from "ethers";
import { Flex, Stack, Text, Button, FormControl, FormLabel, Input } from "@chakra-ui/core";
import { NftSmartWalletMvp } from "../../../types/NftSmartWalletMvp";
import { createDataTestId } from "../../../lib/create-data-testid";
import { useNFTAgreement } from "../useNFTAgreement/useNFTAgreement";

export const componentDataTestId = createDataTestId("ProposeNFTAgreementForm");

export const dataTestIds = {
  nftInput: componentDataTestId("nft", "input"),
  tokenIdInput: componentDataTestId("tokenId", "input"),
  borrowerInput: componentDataTestId("borrower", "input"),
  endDateInput: componentDataTestId("endDate", "input"),
  proposeNFTAgreementButton: componentDataTestId("proposeNFTAgreement", "button"),
};

interface IProposeNFTAgreementFormProps {}

interface IProposeNFTAgreementFormValues {
  _nft: string;
  _tokenId: BigNumberish;
  _borrower: string;
  _endDate: BigNumberish;
}
const ProposeNFTAgreementForm: React.FC<IProposeNFTAgreementFormProps> = (props) => {
  const { proposeNFTAgreement } = useNFTAgreement();
  const formik = useFormik<IProposeNFTAgreementFormValues>({
    initialValues: {
      _nft: "",
      _tokenId: "",
      _borrower: "",
      _endDate: "",
    },
    onSubmit: async (values) => {
      // console.log(JSON.stringify(values, null, 2));
      await proposeNFTAgreement(values._nft, values._tokenId, values._borrower, values._endDate);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="_nft">NFT address</FormLabel>
        <Input
          data-testid={dataTestIds.nftInput}
          id="_nft"
          name="_nft"
          type="text"
          onChange={formik.handleChange}
          value={formik.values._nft}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="_tokenId">Token address</FormLabel>
        <Input
          data-testid={dataTestIds.tokenIdInput}
          id="_tokenId"
          name="_tokenId"
          type="text"
          onChange={formik.handleChange}
          value={formik.values._tokenId.toString()}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="_borrower">Borrower</FormLabel>
        <Input
          data-testid={dataTestIds.borrowerInput}
          id="_borrower"
          name="_borrower"
          type="text"
          onChange={formik.handleChange}
          value={formik.values._borrower.toString()}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="_endDate">End Date</FormLabel>
        <Input
          data-testid={dataTestIds.endDateInput}
          id="_endDate"
          name="_endDate"
          type="date"
          onChange={formik.handleChange}
          value={formik.values._endDate.toString()}
        />
      </FormControl>{" "}
      <Button data-testid={dataTestIds.proposeNFTAgreementButton} type="submit">
        Propose NFT Agreement
      </Button>
    </form>
  );
};

export { ProposeNFTAgreementForm };
