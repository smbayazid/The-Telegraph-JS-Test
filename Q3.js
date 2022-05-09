function getPremiumStatus() {
	let isPremium = null;
    let xmlHttp = new XMLHttpRequest();

    const url = "https://www.telegraph.co.uk/business/2018/04/27/pound-slips-six-week-low-markets-brace-growth-slowdown-uk-us/";

    xmlHttp.open("GET", url, true);

    xmlHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const metas = document.getElementsByTagName('meta');

            for (let i = 0; i < metas.length; i++) {
                if (metas[i].getAttribute('name') === 'tmg.premium.state') {
                    isPremium = metas[i].getAttribute('content');
                }
            }
        }
    }

    xmlHttp.send();
    return isPremium;
}