import { ethers } from 'ethers';
import { browser } from '$app/env';

export const provider = browser && new ethers.providers.Web3Provider(window.ethereum)

if (browser) {
// MetaMask requires requesting permission to connect users accounts
  await provider.send("eth_requestAccounts", []);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
}
export const signer = browser && provider.getSigner()
