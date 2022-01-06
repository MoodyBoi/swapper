import { SupportedChainId } from './chains';

type AddressMap = { [chainId: number]: string };

export const MULTICALL_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [SupportedChainId.RINKEBY]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [SupportedChainId.FANTOM]: '',
  [SupportedChainId.BSC]: '',
  [SupportedChainId.POLYGON]: '',
};
