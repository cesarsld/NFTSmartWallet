import React, { Fragment, useEffect, useRef } from "react";
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

const MenuItems: React.FC<{ href: string }> = ({ children, href }) => (
  <NextLink href={href}>
    <Link href={href} mr={[3, 6]} display="block" fontSize={["sm", "md"]} fontFamily="mono">
      {children}
    </Link>
  </NextLink>
);

const handleWeb3Click = async (params: any) => {
  const { setIsConnected, setProvider, setEthBalance, setAddress } = params;
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "c6b047a0e8a14a96ac331a47ec96c508", // required
      },
    },
  };
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });

  const provider = await web3Modal.connect();
  const web3Provider = new providers.Web3Provider(provider);
  const signer = await web3Provider.getSigner();
  const address = await signer.getAddress();
  const ethBalance = await signer.getBalance();

  // const nftSmartWalletMvp = await new NftSmartWalletMvpFactory(signer).deploy("", "", "");

  setProvider(web3Provider);
  setEthBalance(ethBalance);
  setAddress(address);
  setIsConnected(true);
};

const Nav: React.FC<any> = (props) => {
  const { provider, setProvider } = props;
  const [show, setShow] = React.useState(false);
  const theme = useTheme();
  const [isConnected, setIsConnected] = React.useState<boolean>(false);
  const [ethBalance, setEthBalance] = React.useState<number>(0);
  const [address, setAddress] = React.useState("");

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
            <Text>Eth Balance: {formatEther(ethBalance)}</Text>
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
                setProvider,
                setEthBalance,
                setAddress,
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
