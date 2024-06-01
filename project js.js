// Create a variable to hold your NFTs
const NFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, address, profile, company) {
  const NFT = {
    name: name,
    address: address,
    profile: profile,
    company: company,
  };
  NFTs.push(NFT);
  console.log("Minted - " + name);
}

// Create a "loop" that will go through the "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("Name: " + NFTs[i].name);
    console.log("Address: " + NFTs[i].address);
    console.log("Profile: " + NFTs[i].profile);
    console.log("Company: " + NFTs[i].company);
    console.log("-------------------------");
  }
}

// This function prints the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total NFTs minted: " + NFTs.length);
}

// Call your functions below this line
mintNFT("David Ranjan", "Delhi", "Cyber", "Blue Star");
mintNFT("Lavanya", "California", "Software Eng", "Cisco");
mintNFT("Prince Kumar", "New York", "Junior Eng", "Square");

// List all NFTs and print the total supply
listNFTs();
getTotalSupply();
