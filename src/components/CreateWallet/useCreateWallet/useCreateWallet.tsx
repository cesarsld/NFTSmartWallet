import React, { useState, useContext, useCallback, useEffect } from "react";
import { NftSmartWalletAuthority } from "../../../types";

export const useCreateWallet = (nftSmartWalletAuthority: NftSmartWalletAuthority) => {
  const [walletAddress, setWalletAddress] = useState("");
  const createWallet = useCallback(() => {
    const handle = async () => {
      const address = await nftSmartWalletAuthority.callStatic.createWallet();
      setWalletAddress(address);
    };
    handle();
    return () => {};
  }, [walletAddress]);
  return { walletAddress, createWallet };
};
