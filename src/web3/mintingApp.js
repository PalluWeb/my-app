
import { getContractInstance } from "../web3/web3ProviderMethods";
import {convertWeiToEther} from "../utils/currencyMethods"

export const setMerkleRoot = async (merkleRoot, adminWalletAddress) => {
  const MintingAppContract = await getContractInstance('Minting App');
  const merkleResponse = await MintingAppContract.methods
    .setMerkleRoot(merkleRoot)
    .send({ from: adminWalletAddress });
  if (!merkleResponse.status) throw new Error(merkleResponse.error);
  return merkleResponse;
};

export const approveJTRtoken= async(spender, nftCost, address)=>{
 // debugger; // eslint-disable-line no-debugger
  const JTRtokenContract = await getContractInstance();
  const response =  await JTRtokenContract.methods
             .approve(spender, nftCost)
             .send({from: address})
  return response;
}



export const buyNFT = async (
  proof,
  selectedQuantity,
  userAddress,
) => {
  console.log(proof,
    selectedQuantity,
    userAddress)
  const MintingAppContract = await getContractInstance(
    'Minting App'
  );

 // console.log(MintingAppContract.methods, '---MintingAppContract');
//  const getMarkerRoot = await MintingAppContract.methods;
 // console.log(getMarkerRoot, '--getMarkerRoot');
  const result = await MintingAppContract.methods
    .buyNFT(proof, selectedQuantity)
    .send({ from: userAddress });
  return result;
};




export const setRestriction = async( address)=>{
  const MintingAppContract = await getContractInstance('Minting App');
  const setRestrictionResponse = await MintingAppContract.methods
  .setRestriction()
  .send({from: address})
  return setRestrictionResponse;
}

export const setMaxSupplyNFT = async(address, value)=>{
 // debugger; // eslint-disable-line no-debugger
  const MintingAppContract  = await getContractInstance("Minting App");
  const res = await MintingAppContract.methods
                    .setMaxSupply(value)
                    .send({from: address})

   return res;

}

export const setCostNFT = async(address, value)=>{
  const MintingAppContract = await getContractInstance('Minting App');
  const res = await MintingAppContract.methods
                      .setCost(value)
                      .send({from: address})
   return res;
}

export const setUserLimit = async(address, value)=>{
  const MintingAppContract = await getContractInstance('Minting App');
  const res = await MintingAppContract.methods
                      .setmaxUserLimit(value)
                      .send({from: address})
   return res;
}

export const getMintingCost = async () => {
  const MintingAppContract = await getContractInstance('Minting App');
  const getMintingCostResponse = await MintingAppContract.methods.getMintingCost().call()
  const result = await convertWeiToEther(getMintingCostResponse)
  return result;

};
export const getOwner = async()=>{
  const MintingAppContract = await getContractInstance('Minting App');
  const getOwnerResponse = await MintingAppContract.methods
                   .owner()
                   .call()  
  return getOwnerResponse;
   

}

export const getUserMaxLimit= async()=>{
  const MintingAppContract = await getContractInstance('Minting App');
  const getUserMaxLimitResponse = await MintingAppContract.methods
                       .maxUserLimit()
                       .call()
   return getUserMaxLimitResponse;
  
}

