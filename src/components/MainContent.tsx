import React, { Fragment, useEffect, useRef } from "react";
import { BigNumber, ethers } from "ethers";
import moment from "moment";
import { Box, useTheme, Flex, Icon, Text, Stack, Divider, PseudoBox, Image, Spinner, Heading } from "@chakra-ui/core";
import { Global } from "@emotion/core";
import { NextPage } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import Layout from "../Layout";

const MainContent: React.FC = () => (
  <Flex flexDirection="column" alignItems="center">
    <Flex textAlign="center" flexDirection="column" alignItems="center">
      {/* <Image style={{ filter: "invert(100%)" }} src="/main-head-black.png"></Image> */}
      <Text textAlign="center" width={38} mr={2}>
        ♡
      </Text>
      <Heading mt={4} size="2xl">
        Hello
      </Heading>
      <Heading mt={2} size="lg">
        <i>World</i>
      </Heading>
    </Flex>
    <Divider mt={4} orientation="horizontal" bg="blackAlpha.500" height="1px" width="80px"></Divider>
    <Flex textAlign="center" px={2} flexDirection="column" alignItems="center">
      <Text fontSize="lg">Hello</Text>
    </Flex>
    <Divider orientation="horizontal" bg="blackAlpha.500" height="1px" width="80px"></Divider>
    <Flex textAlign="center" mt={6} px={2} flexDirection="column" alignItems="center">
      <Text>Hello.</Text>
      <Text>World. </Text>
    </Flex>
    <Stack spacing={1} textAlign="center" mt={4} px={2} flexDirection="column" alignItems="center">
      <Text>Hello.</Text>
      <Text>World.</Text>
    </Stack>
  </Flex>
);

export { MainContent };
