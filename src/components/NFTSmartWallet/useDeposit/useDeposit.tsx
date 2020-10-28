import React, { useState, useContext, useCallback, useEffect } from "react";
import { Web3Context } from "../../../lib/useWeb3/useWeb3";
import { NftSmartWalletMvp } from "../../../types";

export const useDeposit = () => {
  const { nftSmartWalletMvp } = useContext(Web3Context);
  console.log(nftSmartWalletMvp);
  const mvp = nftSmartWalletMvp?.[0];
  return { depositNFT: mvp?.depositNFT, depositToken: mvp?.depositToken };
};
