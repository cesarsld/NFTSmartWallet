import React, { Fragment, useContext, useEffect, useRef } from "react";
import {
  Button,
  Heading,
  Link,
  Box,
  useTheme,
  Flex,
  Icon,
  Text,
  Stack,
  Divider,
  PseudoBox,
  Image,
  Spinner,
} from "@chakra-ui/core";
import NextLink from "next/link";
import { providers, ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { truncateEtherValue } from "../lib/truncate-ether-value";
import { NftSmartWalletAuthorityFactory, NftSmartWalletMvpFactory } from "../types";
import { formatEther } from "ethers/lib/utils";
import { Web3Context } from "../lib/useWeb3/useWeb3";

const MenuItems: React.FC<{ href: string }> = ({ children, href }) => (
  <NextLink href={href}>
    <Link href={href} mr={[3, 6]} display="block" fontSize={["sm", "md"]} fontFamily="mono">
      {children}
    </Link>
  </NextLink>
);

const handleWeb3Click = async (params: any) => {
  const {
    setIsConnected,
    setProvider,
    setEthBalance,
    setAddress,
    setNftSmartWalletMvp,
    setNftSmartWalletAuthority,
  } = params;
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "c6b047a0e8a14a96ac331a47ec96c508", // required
      },
    },
  };
  const web3Modal = new Web3Modal({
    network: "rinkeby", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });

  const provider = await web3Modal.connect();
  const web3Provider = new providers.Web3Provider(provider);
  const signer = await web3Provider.getSigner();
  const address = await signer.getAddress();
  const ethBalance = await signer.getBalance();

  const nftSmartWalletAuthorityAddress = "0xa0a55d607d442e7acc22c541389c13a551f27266";
  const lendingRegistryAddress = "0xaa0f11b3013849bf69c9bbd3e866511fe1793b69";
  const nftSmartWalletAuthority = await NftSmartWalletAuthorityFactory.connect(nftSmartWalletAuthorityAddress, signer);

  setProvider(web3Provider);
  setEthBalance(ethBalance);
  setAddress(address);
  setNftSmartWalletAuthority(nftSmartWalletAuthority);
  setIsConnected(true);
};

const Nav: React.FC<any> = (props) => {
  const [show, setShow] = React.useState(false);
  const theme = useTheme();
  const [isConnected, setIsConnected] = React.useState<boolean>(false);
  const { provider, signer, address, ethBalance, nftSmartWalletMvp, nftSmartWalletAuthority } = useContext(Web3Context);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      py={3}
      px={[4, 8]}
      bg="white"
      boxShadow={"0 4px 8px 0 rgba(0,0,0,0.2);"}
      {...props}
    >
      <Flex align="center" mr={5} cursor="pointer" justifyContent="center" alignItems="center" height="10px">
        <NextLink href="/">
          <Text textAlign="center" width={38} mr={2}>
            ♡
          </Text>
        </NextLink>
      </Flex>

      <Flex alignItems="center" flexGrow={1}>
        <MenuItems href={"/dashboard"}>Dashboard</MenuItems>
        <MenuItems href={"/analytics"}>Analytics</MenuItems>

        {isConnected ? (
          <Flex ml="auto" flexDirection="row">
            <Text>Address: {address}</Text>
            <Text>Eth Balance: {formatEther(ethBalance[0])}</Text>
          </Flex>
        ) : (
          <Button
            size={"sm"}
            ml={"auto"}
            bg="transparent"
            border="1px"
            onClick={() => {
              handleWeb3Click({
                setIsConnected,
                setProvider: provider[1],
                setEthBalance: ethBalance[1],
                setAddress: address[1],
                setNftSmartWalletAuthority: nftSmartWalletAuthority[1],
              });
            }}
          >
            {isConnected ? "Wallet" : "Connect"}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export { Nav };
