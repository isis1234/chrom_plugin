let explorer_search = {
  btc: "https://www.blockchain.com/search?search=",
  btc_testnet: "https://www.blockchain.com/search?search=",
  omni: "https://omniexplorer.info/search/",
  eth: "https://etherscan.io/search?f=0&q=",
  eth_ropsten: "https://ropsten.etherscan.io/search?f=0&q=",
  eth_rinkeby: "https://rinkeby.etherscan.io/search?f=0&q="
}  

let explorer_OnClick = (ele, tab) => {
  console.log(ele)
  let url = explorer_search[ele.menuItemId]

  // var query = word.selectionText;
  chrome.tabs.create({url: `${url}${ele.selectionText}`});
}

function createMenus() {  
  let root = chrome.contextMenus.create({  
    "title": "Address Viewer",  
    "contexts": ['all']
  })

  let btc_explorer = chrome.contextMenus.create({ 
    "id": "btc",
    "title": "Blockchain Explorer",  
    "type": "normal",  
    "contexts": ['all'],  
    "parentId": root,  
    "onclick": explorer_OnClick
  })

  let omni_explorer = chrome.contextMenus.create({ 
    "id": "omni",
    "title": "OMNI Explorer",  
    "type": "normal",  
    "contexts": ['all'],  
    "parentId": root,  
    "onclick": explorer_OnClick
  })

  let eth_explorer = chrome.contextMenus.create({ 
    "id": "eth",
    "title": "Etherscan",  
    "type": "normal",  
    "contexts": ['all'],  
    "parentId": root,  
    "onclick": explorer_OnClick
  })

  let separator = chrome.contextMenus.create({  
    "title": "Child 2",  
    "type": "separator",  
    "contexts": ['all'],  
    "parentId": root  
  })

  let btc_testnet_explorer = chrome.contextMenus.create({  
    "id": "btc_testnet",
    "title": "Blockchain Explorer (Testnet)",  
    "type": "normal",  
    "contexts": ['all'],  
    "parentId": root,  
    "onclick": explorer_OnClick  
  })

  let eth_ropsten_explorer = chrome.contextMenus.create({  
    "id": "eth_ropsten",
    "title": "Etherscan (Ropsten)",  
    "type": "normal",  
    "contexts": ['all'],  
    "parentId": root,  
    "onclick": explorer_OnClick  
  })

  let eth_rinkeby_explorer = chrome.contextMenus.create({  
    "id": "eth_rinkeby",
    "title": "Etherscan (Rinkeby)",  
    "type": "normal",  
    "contexts": ['all'],  
    "parentId": root,  
    "onclick": explorer_OnClick  
  })

  // Action Step:
  root
  btc_explorer
  omni_explorer
  eth_explorer
  separator 
  btc_testnet_explorer
  eth_ropsten_explorer
  eth_rinkeby_explorer
}

createMenus(); 