import { ethers } from 'ethers';
import { browser } from '$app/env';

export const provider = new ethers.providers.Web3Provider(window.ethereum)
export const JSONRPCProvider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

if (browser) {
// MetaMask requires requesting permission to connect users accounts
  (async function() {
    await provider.send("eth_requestAccounts", [])
  })();
// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
}
export const signer = provider.getSigner()
