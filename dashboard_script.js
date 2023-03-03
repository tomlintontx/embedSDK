// this code goes in a dashboard script. It should be in a plugin in the end
const domObserver = new MutationObserver((_mutationList, observer) => {
    const targetNode = $('.control-freak')[0]
  
    if (targetNode) {
		
      	targetNode.click()
		
    }
});

// wait for the advanced widget creation button to show up then click it
domObserver.observe(document.body, { childList: true, subtree: true });