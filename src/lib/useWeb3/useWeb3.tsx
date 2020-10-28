import { BigNumber, providers } from "ethers";
import React, { createContext, useState, useContext, useCallback, useEffect, Dispatch, SetStateAction } from "react";
import { NftSmartWalletMvp, NftSmartWalletAuthority } from "../../types";

type UseStateReturnType<S> = [S, Dispatch<SetStateAction<S>>];
type Web3Provider = typeof providers["Web3Provider"];

interface IWeb3Context {
  provider: UseStateReturnType<providers.Web3Provider>;
  signer: UseStateReturnType<providers.JsonRpcSigner>;
  address: UseStateReturnType<string>;
  ethBalance: UseStateReturnType<BigNumber>;
  nftSmartWalletMvp: UseStateReturnType<NftSmartWalletMvp>;
  nftSmartWalletAuthority: UseStateReturnType<NftSmartWalletAuthority>;
}

export const Web3Context = createContext<Partial<IWeb3Context>>({});

export const UseWeb3: React.FC = ({ children }) => {
  const provider = useState<providers.Web3Provider>(null);
  const signer = useState<providers.JsonRpcSigner>(null);
  const address = useState<string>("");
  const ethBalance = useState<BigNumber>(BigNumber.from(0));
  const nftSmartWalletMvp = useState<NftSmartWalletMvp>(null);
  const nftSmartWalletAuthority = useState<NftSmartWalletAuthority>(null);

  return (
    <Web3Context.Provider
      value={{
        provider,
        signer,
        address,
        ethBalance,
        nftSmartWalletMvp,
        nftSmartWalletAuthority,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

/*
function MyProvider({children}) {
   const [state, setState] = useState(0);
   const provided = useMemo(() => ({
       value: state,
       setValue: (value) => setState(value)
   }, [value]);
   return <MyContext.Provider value={provided}>{children}</MyContext.Provider>;
}
*/
