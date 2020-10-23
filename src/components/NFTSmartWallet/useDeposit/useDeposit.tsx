import React, { useState, useContext, useCallback, useEffect } from "react";
import { NftSmartWalletMvp } from "../../../types";

export const useDeposit = (nftSmartWalletMvp: NftSmartWalletMvp) => {
  const [walletAddress, setWalletAddress] = useState("");
  const { depositNFT, depositToken } = nftSmartWalletMvp.callStatic;
  return { walletAddress, depositNFT, depositToken };
};
