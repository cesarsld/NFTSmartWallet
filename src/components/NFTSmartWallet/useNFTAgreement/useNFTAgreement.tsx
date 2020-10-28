import React, { useState, useContext, useCallback, useEffect } from "react";
import { Web3Context } from "../../../lib/useWeb3/useWeb3";
import { NftSmartWalletMvp } from "../../../types";

export const useNFTAgreement = () => {
  const { nftSmartWalletMvp } = useContext(Web3Context);
  const { proposeNFTAgreement, approveNFTAgreement } = nftSmartWalletMvp[0].callStatic;
  return { proposeNFTAgreement, approveNFTAgreement };
};
