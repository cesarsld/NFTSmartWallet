import React, { useState, useContext, useCallback, useEffect } from "react";
import { Web3Context } from "../../../lib/useWeb3/useWeb3";
import { NftSmartWalletAuthority } from "../../../types";

export const useCreateWallet = () => {
  const { nftSmartWalletAuthority } = useContext(Web3Context);
  const [walletAddress, setWalletAddress] = useState("");
  const createWallet = useCallback(() => {
    const handle = async () => {
      const address = await nftSmartWalletAuthority[0].callStatic.createWallet();
      setWalletAddress(address);
    };
    handle();
    return () => {};
  }, [walletAddress]);
  return { walletAddress, createWallet };
};
