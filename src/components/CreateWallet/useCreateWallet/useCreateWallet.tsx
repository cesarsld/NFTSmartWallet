import React, { useState, useContext, useCallback, useEffect } from "react";
import { Web3Context } from "../../../lib/useWeb3/useWeb3";
import { NftSmartWalletAuthority } from "../../../types";

export const useCreateWallet = () => {
  const { nftSmartWalletAuthority } = useContext(Web3Context);
  const [walletAddress, setWalletAddress] = useState("");
  const createWallet = useCallback(() => {
    const handle = async () => {
      const address = await (await nftSmartWalletAuthority?.[0]?.createWallet()).wait();
      // setWalletAddress(address);
    };
    handle();
    return () => {};
  }, [walletAddress, nftSmartWalletAuthority[0]]);
  // 0xEcca5a87430EA654F8052434160B80057EF52dA9
  return { walletAddress, createWallet };
};
