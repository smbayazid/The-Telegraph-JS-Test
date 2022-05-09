function getFilteredKeywords() {
	let keywords = null;
    let keywordsList = [];
    let filteredKeywords = [];

    let xmlHttp = new XMLHttpRequest();

    const url = "https://www.telegraph.co.uk/news/2018/04/27/prince-louis-arthur-charles-new-royal-baby-name-announced-duke/";

    xmlHttp.open("GET", url, true);

    xmlHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const metas = document.getElementsByTagName('meta');

            for (let i = 0; i < metas.length; i++) {
                if (metas[i].getAttribute('name') === 'keywords') {
                    keywords = metas[i].getAttribute('content');
                }
            }

            keywordsList = keywords.split(",");

            for (let i = 0; i < keywordsList.length; i++){
                if(keywordsList[i].includes('Prince') || keywordsList[i].includes('prince')) {
                    filteredKeywords.push(keywordsList[i]);
                }
            }
        }
    }

    xmlHttp.send();
    return filteredKeywords;
}