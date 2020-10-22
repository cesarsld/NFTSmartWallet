import React, { Fragment, useEffect, useRef } from "react";
import { Link, Box, useTheme, Flex, Icon, Text, Stack, Divider, PseudoBox, Image, Spinner } from "@chakra-ui/core";
import NextLink from "next/link";
import { FaDiscord, FaTwitter, FaEnvelope, FaTelegram } from "react-icons/fa";

const Social: React.FC<any> = () => (
  <Stack
    spacing={2}
    direction="row"
    bg="Social.500"
    mt={"auto"}
    py={3}
    px={5}
    alignItems="center"
    justifyContent="space-between"
  >
    <Link target="_blank" href="https://twitter.com/ygg">
      <FaTwitter color="white"></FaTwitter>
    </Link>
    <Link target="_blank" href="https://discord.gg/ygg">
      <FaDiscord color="white" />
    </Link>
    <Link target="_blank" href="https://t.me/ygg">
      <FaTelegram color="white" />
    </Link>
  </Stack>
);

export { Social };
