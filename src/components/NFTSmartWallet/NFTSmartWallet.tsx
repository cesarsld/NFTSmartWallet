import React from "react";
import { createDataTestId } from "../../lib/create-data-testid";
import { Flex, Stack, Text, Button } from "@chakra-ui/core";
import { NftSmartWalletMvp } from "../../types/NftSmartWalletMvp";
import { useDeposit } from "./useDeposit/useDeposit";

export const componentDataTestId = createDataTestId("NFTSmartWallet");

export const dataTestIds = {
  depositNFTButton: componentDataTestId("depositNFT", "button"),
  depositTokenButton: componentDataTestId("depositToken", "button"),
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

      <Button
        onClick={async () => {
          // NOTE - What to populate
          const nftAddress = "";
          const tokenId = "";
          await depositNFT(nftAddress, tokenId);
        }}
        data-testid={dataTestIds.depositNFTButton}
      >
        Deposit NFT
      </Button>
    </Stack>
  );
};

export { NFTSmartWallet };
