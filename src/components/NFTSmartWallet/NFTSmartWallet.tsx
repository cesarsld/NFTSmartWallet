import React from "react";
import { useFormik } from "formik";
import { BigNumberish } from "ethers";
import { Flex, Stack, Text, Button, FormControl, FormLabel, Input } from "@chakra-ui/core";
import { createDataTestId } from "../../lib/create-data-testid";
import { NftSmartWalletMvp } from "../../types/NftSmartWalletMvp";
import { useDeposit } from "./useDeposit/useDeposit";
import { useNFTAgreement } from "./useNFTAgreement/useNFTAgreement";
import { ProposeNFTAgreementForm } from "./ProposeNFTAgreementForm/ProposeNFTAgreementForm";

export const componentDataTestId = createDataTestId("NFTSmartWallet");

export const dataTestIds = {
  nftInput: componentDataTestId("nft", "input"),
  tokenIdInput: componentDataTestId("tokenId", "input"),
  tokenInput: componentDataTestId("token", "input"),
  amountInput: componentDataTestId("amount", "input"),
  depositNFTButton: componentDataTestId("depositNFT", "button"),
  depositTokenButton: componentDataTestId("depositToken", "button"),
};

interface IDepositTokenFormProps {
  depositToken: NftSmartWalletMvp["callStatic"]["depositToken"];
}

interface IDepositTokenFormValues {
  _token: string;
  _amount: BigNumberish;
}
const DepositTokenForm: React.FC<IDepositTokenFormProps> = (props) => {
  const formik = useFormik<IDepositTokenFormValues>({
    initialValues: {
      _token: "",
      _amount: "",
    },
    onSubmit: async (values) => {
      // console.log(JSON.stringify(values, null, 2));
      await props.depositToken(values._token, values._amount);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="_token">Token address</FormLabel>
        <Input
          data-testid={dataTestIds.tokenInput}
          id="_token"
          name="_token"
          type="text"
          onChange={formik.handleChange}
          value={formik.values._token}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <Input
          data-testid={dataTestIds.amountInput}
          id="_amount"
          name="_amount"
          type="number"
          onChange={formik.handleChange}
          value={formik.values._amount.toString()}
        />
      </FormControl>
      <Button data-testid={dataTestIds.depositTokenButton} type="submit">
        Deposit Token
      </Button>
    </form>
  );
};

interface IDepositNFTFormProps {
  depositNFT: NftSmartWalletMvp["callStatic"]["depositNFT"];
}

interface IDepositNFTFormValues {
  _nft: string;
  _tokenId: BigNumberish;
}
const DepositNFTForm: React.FC<IDepositNFTFormProps> = (props) => {
  const formik = useFormik<IDepositNFTFormValues>({
    initialValues: {
      _nft: "",
      _tokenId: "",
    },
    onSubmit: async (values) => {
      // console.log(JSON.stringify(values, null, 2));
      await props.depositNFT(values._nft, values._tokenId);
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
        <FormLabel htmlFor="_tokenId">Token ID</FormLabel>
        <Input
          data-testid={dataTestIds.tokenIdInput}
          id="_tokenId"
          name="_tokenId"
          type="_tokenId"
          onChange={formik.handleChange}
          value={formik.values._tokenId.toString()}
        />
      </FormControl>
      <Button data-testid={dataTestIds.depositNFTButton} type="submit">
        Deposit NFT
      </Button>
    </form>
  );
};

interface IProps {
  nftSmartWalletMvp: NftSmartWalletMvp;
  useDeposit: typeof useDeposit;
  useNFTAgreement: typeof useNFTAgreement;
  // useWithdraw: typeof useWithdraw,
}

const NFTSmartWallet: React.FunctionComponent<IProps> = (props) => {
  const { useDeposit, useNFTAgreement, nftSmartWalletMvp } = props;
  const { proposeNFTAgreement } = useNFTAgreement(nftSmartWalletMvp);
  const { depositNFT, depositToken } = useDeposit(nftSmartWalletMvp);

  return (
    <Stack spacing={1}>
      <DepositTokenForm depositToken={depositToken}></DepositTokenForm>
      <DepositNFTForm depositNFT={depositNFT}></DepositNFTForm>
      <ProposeNFTAgreementForm nftSmartWalletMvp={nftSmartWalletMvp}></ProposeNFTAgreementForm>
    </Stack>
  );
};

export { NFTSmartWallet };
