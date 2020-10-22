import { Button, Flex, Text } from "@chakra-ui/core";
import * as React from "react";
import { createDataTestId } from "../../lib/create-data-testid";
import { NftSmartWalletAuthority } from "../../types";
import { useCreateWallet } from "./useCreateWallet/useCreateWallet";

export const componentDataTestId = createDataTestId("CreateWallet");

export const dataTestIds = {
  createWalletButton: componentDataTestId("createWallet", "button"),
};

interface IProps {
  useCreateWallet: typeof useCreateWallet;
  nftSmartWalletAuthority: NftSmartWalletAuthority;
}

const CreateWallet: React.FunctionComponent<IProps> = (props) => {
  const { walletAddress, createWallet } = useCreateWallet(props.nftSmartWalletAuthority);

  return (
    <Flex>
      <Button data-testid={dataTestIds.createWalletButton} onClick={createWallet}>
        Create Wallet
      </Button>
      {walletAddress !== "" && <Text>Created Wallet Address: {walletAddress}</Text>}
    </Flex>
  );
};

export { CreateWallet };
