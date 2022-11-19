
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


 //判斷連線
  if (typeof window.ethereum !== undefined) {
    //window.web3 = new Web3(window.ethereum);
    //window.ethereum.enable();
    connect();
    }
     else {
      console.log('Please connect to MetaMask!');
    }
    

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

    try {
    // var web3 = window.web3;
    // var web3 = new Web3(web3.currentProvider);  
    var web3=new Web3(window.ethereum);
    console.log(web3);
    console.log('try ok');
    } catch (err) {
     alert("try error");
    }
    async function printPostsToConsole(){
    var coinbase = await web3.eth.getCoinbase();
    var balance = await web3.eth.getBalance(coinbase);
    $("#address").text(coinbase);
    $("#balance").text(balance);  
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
    function handleAccountsChanged(accounts) {
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
      } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        alert("account has been changed.");
        //location.reload();
        // Do any other work!
      }
      
    }

    printPostsToConsole();

//   };


