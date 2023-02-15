
  const provider = await detectEthereumProvider();

  if (provider) {
    // From now on, this should always be true:
    // provider === window.ethereum
    
    console.log("Provider存在"); // initialize your app
    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?');
    }
  } else {
    console.log('Please install MetaMask!');
  }


 //連線metamask
  // if (typeof window.ethereum !== undefined) {
  //   //window.web3 = new Web3(window.ethereum);
  //   //window.ethereum.enable();
  //   connect();
  //   }
  //    else {
  //     console.log('Please connect to MetaMask.');
  //   }
    connect();

    let currentAccount = null;
ethereum
  .request({ method: 'eth_accounts' })
  .then(handleAccountsChanged)
  .catch((err) => {
    // Some unexpected error.
    // For backwards compatibility reasons, if no accounts are available,
    // eth_accounts will return an empty array.
    console.error(err);
  });

  ethereum.on('accountsChanged', handleAccountsChanged);

  //
    try {
    var web3=new Web3(window.ethereum);
    console.log('try ok');
    } catch (err) {
     alert("try error");
    }

    
    function connect(){
      ethereum
      .request({
        method: 'eth_requestAccounts'})
      .then((result) => {
        console.log('成功');
            })
      .catch((err) => {
        console.log("失敗");
        console.error(err);
            });
    }
    
    
    const contractaddress = document.getElementById("contractaddress").textContent;
    //取得合約abi
    $.getJSON('https://api.etherscan.io/api?module=contract&action=getabi&address='+contractaddress+'&apikey=Z8AYYTHMIWAHYIC69HRKNUKJNECVSUVPUX', function (data) {
      if (data.result != ''){
        $('#abi').text(data.result);
      } else {
          console.log("Error" );
      }            
  });
    printPostsToConsole();

    const abitext = document.getElementById("abi").textContent;
    const abi = JSON.parse(abitext);
    const No = document.getElementById("No").textContent;
    const contract = new web3.eth.Contract(abi,contractaddress);
    const tokenID = await contract.methods.tokenByIndex(No).call();

    //處理ipfs開頭網址
    let tokenMetadataURI = await contract.methods.tokenURI(tokenID).call();
    if(tokenMetadataURI.toString().startsWith("ipfs://")){
      tokenMetadataURI= tokenMetadataURI.split("ipfs://");
      tokenMetadataURI = "https://ipfs.io/ipfs/"+tokenMetadataURI;
      console.log("ifhappend");
    }
    console.log(tokenMetadataURI);
    const tokenMetada=await fetch(tokenMetadataURI)
    .then(response=>response.json());
    document.getElementById("first").src=tokenMetada["image"];

    



//Coinbase function
async function printPostsToConsole(){
  var coinbase = await web3.eth.getCoinbase();
  var balance = await web3.eth.getBalance(coinbase);
  $("#address").text(coinbase);
  $("#balance").text(balance);  
}


function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log('Please connect to MetaMask!');
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    alert("Reload account");
    //location.reload();
    // Do any other work!
  }
  
}