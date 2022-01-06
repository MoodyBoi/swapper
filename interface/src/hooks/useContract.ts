import { useMemo } from 'react'
import { Contract } from '@ethersproject/contracts'
import useActiveWeb3React from './useActiveWeb3React'
import { getContract } from 'utils'
import { MULTICALL_ADDRESS } from 'constants/contracts'
import MulticallABI from 'abis/multicall2.json'

// returns null on errors
export default function useContract<T extends Contract = Contract>(
    addressOrAddressMap: string | { [chainId: number]: string } | undefined,
    ABI: any,
    withSignerIfPossible = true
  ): T | null {
    const { library, account, chainId } = useActiveWeb3React()
  
    return useMemo(() => {
      if (!addressOrAddressMap || !ABI || !library || !chainId) return null
      let address: string | undefined
      if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
      else address = addressOrAddressMap[chainId]
      if (!address) return null
      try {
        return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
      } catch (error) {
        console.error('Failed to get contract', error)
        return null
      }
    }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]) as T
  }

  export function useInterfaceMulticall() {
    return useContract(MULTICALL_ADDRESS, MulticallABI, false) 
  }