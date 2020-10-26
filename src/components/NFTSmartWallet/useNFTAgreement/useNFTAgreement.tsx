import React, { useState, useContext, useCallback, useEffect } from "react";
import { NftSmartWalletMvp } from "../../../types";

export const useNFTAgreement = (nftSmartWalletMvp: NftSmartWalletMvp) => {
  const { proposeNFTAgreement, approveNFTAgreement } = nftSmartWalletMvp.callStatic;
  return { proposeNFTAgreement, approveNFTAgreement };
};
