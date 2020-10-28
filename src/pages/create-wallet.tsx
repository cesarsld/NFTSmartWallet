import React, { Fragment, useEffect, useRef } from "react";
import { BigNumber, ethers } from "ethers";
import moment from "moment";
import {
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
  Heading,
  Button,
} from "@chakra-ui/core";
import { Global } from "@emotion/core";
import { NextPage } from "next";
import NextLink from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import Layout from "../Layout";
import { CreateWallet } from "../components/CreateWallet/CreateWallet";
import { MainContent } from "../components/MainContent";

const CreateWalletPage: NextPage = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const theme = useTheme();
  // React.useEffect(() => {
  //   const timeout = setTimeout(() => setIsLoading(false), 1000);

  //   return () => {
  //     clearInterval(timeout);
  //   };
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Layout>
      <Stack px={6} py={[6, 10]} alignItems="center" direction={"column"} spacing={5}>
        <CreateWallet></CreateWallet>
      </Stack>
    </Layout>
  );
};

export default CreateWalletPage;
