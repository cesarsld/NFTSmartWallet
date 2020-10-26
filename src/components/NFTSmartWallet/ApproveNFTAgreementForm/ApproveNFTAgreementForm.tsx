import React from "react";
import { useFormik } from "formik";
import { BigNumberish } from "ethers";
import { Flex, Stack, Text, Button, FormControl, FormLabel, Input } from "@chakra-ui/core";
import { NftSmartWalletMvp } from "../../../types/NftSmartWalletMvp";
import { createDataTestId } from "../../../lib/create-data-testid";
import { useNFTAgreement } from "../useNFTAgreement/useNFTAgreement";

export const componentDataTestId = createDataTestId("ApproveNFTAgreementForm");

export const dataTestIds = {
  lenderInput: componentDataTestId("lender", "input"),
  nftInput: componentDataTestId("nft", "input"),
  tokenIdInput: componentDataTestId("tokenId", "input"),
  approveNFTAgreementButton: componentDataTestId("approveNFTAgreement", "button"),
};

interface IapproveNFTAgreementFormProps {
  nftSmartWalletMvp: NftSmartWalletMvp;
}

interface IapproveNFTAgreementFormValues {
  _lender: string;
  _nft: string;
  _tokenId: BigNumberish;
}
const ApproveNFTAgreementForm: React.FC<IapproveNFTAgreementFormProps> = (props) => {
  const { approveNFTAgreement } = useNFTAgreement(props.nftSmartWalletMvp);
  const formik = useFormik<IapproveNFTAgreementFormValues>({
    initialValues: {
      _lender: "",
      _nft: "",
      _tokenId: "",
    },
    onSubmit: async (values) => {
      // console.log(JSON.stringify(values, null, 2));
      await approveNFTAgreement(values._lender, values._nft, values._tokenId);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="_lender">Lender address</FormLabel>
        <Input
          data-testid={dataTestIds.lenderInput}
          id="_lender"
          name="_lender"
          type="text"
          onChange={formik.handleChange}
          value={formik.values._lender}
        />
      </FormControl>
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
      <Button data-testid={dataTestIds.approveNFTAgreementButton} type="submit">
        Approve NFT Agreement
      </Button>
    </form>
  );
};

export { ApproveNFTAgreementForm };
