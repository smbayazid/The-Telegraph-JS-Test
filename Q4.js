function setNewCookie() {
	let cookieList = null;
    let cookieExpireDay = new Date();
    cookieExpireDay.setMonth(cookieExpireDay.getMonth() + 1);
    let xmlHttp = new XMLHttpRequest();

    const url = "https://www.telegraph.co.uk/business/2018/04/27/pound-slips-six-week-low-markets-brace-growth-slowdown-uk-us/";

    xmlHttp.open("GET", url, true);

    xmlHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            cookieList = document.cookie.split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) => 
            ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

            document.cookie = "testopt" + cookieList.optimizelyenduserid;
            document.cookie = "expires=" + cookieExpireDay.toUTCString() + ";";
        }
    }
    
    xmlHttp.send();
}