import React, { Fragment, useEffect, useRef } from "react";
import { Link, Box, useTheme, Flex, Icon, Text, Stack, Divider, PseudoBox, Image, Spinner } from "@chakra-ui/core";
import NextLink from "next/link";
import { Social } from "./Social";

const Footer: React.FC<any> = () => (
  <Flex bg="footer.500" mt={"auto"} py={3} px={5} alignItems="center" justifyContent="space-between">
    <Text textTransform="uppercase" fontSize={["sm", "md"]} fontWeight="bold" color="copyright.500">
      © 2020 YGG
    </Text>
    <Link href="https://etherscan.io/token/" ml="auto" mr={2} color="white">
      YGG Etherscan
    </Link>

    <Social />
  </Flex>
);

export { Footer };
