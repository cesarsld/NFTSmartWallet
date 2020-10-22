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
import { HowStakingWorks } from "../components/HowStakingWorks";
import { MainContent } from "../components/MainContent";

const IndexPage: NextPage = () => {
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
        <MainContent></MainContent>
        {/* 
        <Divider mt={8} orientation="horizontal" bg="blackAlpha.500" height="1px" width="80px"></Divider>
        <HowStakingWorks></HowStakingWorks>
        <Divider my={8} orientation="horizontal" bg="blackAlpha.500" height="1px" width="80px"></Divider>
        <Heading py={4}>Roadmap</Heading>
        <Image src="/roadmap-grey.png" width={["100%", "70%"]}></Image>
        <Flex mt={3}>
          <NextLink href={"/litepaper.pdf"}>
            <Button size="lg" variantColor="background">
              Learn more
            </Button>
          </NextLink>
        </Flex> */}
      </Stack>
    </Layout>
  );
};

export default IndexPage;
