import React from "react";
import { useFormik } from "formik";
import { createDataTestId } from "../../lib/create-data-testid";
import { Flex, Stack, Text, Button, FormControl, FormLabel, Input } from "@chakra-ui/core";
import { NftSmartWalletMvp } from "../../types/NftSmartWalletMvp";
import { useDeposit } from "./useDeposit/useDeposit";
import { BigNumberish } from "ethers";

export const componentDataTestId = createDataTestId("NFTSmartWallet");

export const dataTestIds = {
  nftInput: componentDataTestId("nft", "input"),
  tokenIdInput: componentDataTestId("tokenId", "input"),
  depositNFTButton: componentDataTestId("depositNFT", "button"),
  depositTokenButton: componentDataTestId("depositToken", "button"),
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
      console.log(JSON.stringify(values, null, 2));
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
  // useWithdraw: typeof useWithdraw,
  // useAgreement: typeof useAgreement
}

const NFTSmartWallet: React.FunctionComponent<IProps> = (props) => {
  const { useDeposit, nftSmartWalletMvp } = props;
  const { depositNFT, depositToken } = useDeposit(nftSmartWalletMvp);

  return (
    <Stack spacing={1}>
      <Button
        onClick={async () => {
          // NOTE - What to populate
          const tokenId = "";
          const amount = "";
          await depositToken(tokenId, amount);
        }}
        data-testid={dataTestIds.depositTokenButton}
      >
        Deposit Token
      </Button>
      <DepositNFTForm depositNFT={depositNFT}></DepositNFTForm>
    </Stack>
  );
};

export { NFTSmartWallet };
