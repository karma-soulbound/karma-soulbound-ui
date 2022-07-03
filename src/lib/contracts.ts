import { ethers } from 'ethers';
import { provider, signer } from '$lib/wallet';
import abi from "./abi.json";

const daiAddress = "0x44ba4bd1a03bb1b5b8782cdd120d3bad10211597";

export const contracts = new ethers.Contract(daiAddress, JSON.stringify(abi), signer);
// contracts.connect(signer)