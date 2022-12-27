
  //var web3=new Web3(window.ethereum);
var web3=new Web3("https://mainnet.infura.io/v3/264f6a80b8ee4c2b990219749f1ee85d");

		const temp = document.getElementById('message');
		const imglis=temp.getElementsByTagName('img');
		const n=imglis.length;
		console.log(n);
		for(var i=0;i<n;i++){
			if(imglis[i].src!=""){
				
                const Id=imglis[i].id;
                const alt=imglis[i].alt;
                const contractaddress=alt.split("/")[0];
                const No=alt.split("/")[1];

				await $.getJSON('https://api.etherscan.io/api?module=contract&action=getabi&address='+contractaddress+'&apikey=Z8AYYTHMIWAHYIC69HRKNUKJNECVSUVPUX', async function (data){
      				if (data.result != ''){
						setTimeout(5000);
        				const abitext=data.result;
						const abi=JSON.parse(abitext);
						const contract = new web3.eth.Contract(abi,contractaddress);
						//console.log(contract);
						var tokenMetadataURI = await contract.methods.tokenURI(No).call();
						console.log("NO."+i+":"+tokenMetadataURI);
						tokenMetadataURI=checkipfs(tokenMetadataURI);

						//後端傳送
						const add=JSON.stringify({"contract":tokenMetadataURI});
						await fetch('./imageurl',{
						method:'post',
						headers:{'Content-Type':'application/json'},
						body:add
						})
						.then(response=>response.json())
						.then(data=>{
							console.log(data.success);
							var image=checkipfs(data.image);
							document.getElementById(Id).src=image;
							document.getElementById(Id).style.display="inline";
							console.log(image);
							})
						.catch(error=>{console.log(error);})

				
    			// const tokenMetada=await fetch(tokenMetadataURI)
    			// .then(response=>response.json());
				// document.getElementById(Id).src=tokenMetada["image"];
                
      				}          
                 		});

				}
			}
		function checkipfs(ipfs){
			if(ipfs.toString().startsWith("ipfs://")){
      				ipfs= ipfs.split("ipfs://")[1];
      				ipfs = "https://ipfs.io/ipfs/"+ipfs;
      				//console.log(ipfs);
					  
    				}
					return ipfs;
		}


		
		 	