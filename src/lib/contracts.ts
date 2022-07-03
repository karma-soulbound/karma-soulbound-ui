import { ethers } from 'ethers';
import { provider, signer } from '$lib/wallet';
import abi from "./abi.json";

const daiAddress = "0x9d8eaa583ca78896eee2d5967b1825c8efd4ce20";

export const contracts = new ethers.Contract(daiAddress, JSON.stringify(abi), signer);
// contracts.connect(signer)