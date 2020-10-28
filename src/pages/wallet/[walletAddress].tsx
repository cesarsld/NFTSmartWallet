import { Button, Flex, Stack, Text } from "@chakra-ui/core";
import * as React from "react";
import { createDataTestId } from "../../lib/create-data-testid";
import { NftSmartWalletAuthority, NftSmartWalletMvpFactory } from "../../types";
import { useNFTAgreement } from "../../components/NFTSmartWallet/useNFTAgreement/useNFTAgreement";
import { useDeposit } from "../../components/NFTSmartWallet/useDeposit/useDeposit";
import { NFTSmartWallet } from "../../components/NFTSmartWallet/NFTSmartWallet";
import { Web3Context } from "../../lib/useWeb3/useWeb3";
import Layout from "../../Layout";

export const componentDataTestId = createDataTestId("CreateWallet");

export const dataTestIds = {
  createWalletButton: componentDataTestId("createWallet", "button"),
  walletAddress: componentDataTestId("walletAddress", "text"),
};

interface IProps {
  walletAddress: string;
}

const WalletPage: React.FunctionComponent<IProps> = (props) => {
  // const { signer, nftSmartWalletMvp } = React.useContext(Web3Context);

  // React.useEffect(() => {
  //   console.log(signer[0]);
  //   const handle = async () => {
  //     const mvp = await NftSmartWalletMvpFactory.connect(props.walletAddress, signer[0]);
  //     nftSmartWalletMvp[1](mvp);
  //   };
  //   handle();
  // }, [signer[0]]);

  return (
    <Layout>
      <Stack px={6} py={[6, 10]} alignItems="center" direction={"column"} spacing={5}>
        <Text>NFT Smart Wallet address: {props.walletAddress}</Text>
        <NFTSmartWallet walletAddress={props.walletAddress}></NFTSmartWallet>
      </Stack>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return { props: { walletAddress: context.params.walletAddress } };
}

export default WalletPage;
