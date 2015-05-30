function check(tab_id, data, tab)
{
	chrome.pageAction.show(tab_id);
}

chrome.tabs.onUpdated.addListener(check);

