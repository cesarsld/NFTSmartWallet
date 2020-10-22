import React, { Fragment, useEffect, useRef } from "react";
import { Box, Flex, Icon, Text, Stack, Divider, PseudoBox, Image, Spinner } from "@chakra-ui/core";
import { NextPage } from "next";
import { Global } from "@emotion/core";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import customTheme from "../lib/theme";
import { providers } from "ethers";

interface IProps {}

const Layout: React.FunctionComponent<IProps> = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [provider, setProvider] = React.useState<typeof providers["JsonRpcProvider"] | null>(null);
  const theme = customTheme;

  return (
    <Flex flexDirection="column" minHeight={"100vh"}>
      <Global
        styles={{
          body: {
            background: theme.colors.white,
            // color: theme.colors.white,
            fontFamily: `${theme.fonts.body}, ${theme.fonts.mono}`,
          },
        }}
      ></Global>

      <Nav provider={provider} setProvider={setProvider} />
      {children}
      <Footer></Footer>
    </Flex>
  );
};

export default Layout;
