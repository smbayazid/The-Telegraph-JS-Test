function getFormatedPublishedDate() {
    let publishedDate = null;
	let xmlHttp = new XMLHttpRequest();
    
	const url = "https://www.telegraph.co.uk/news/2018/04/27/kim-jong-un-becomes-first-north-korean-leader-cross-south-65/";

    xmlHttp.open("GET", url, true);

    xmlHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const metas = document.getElementsByTagName('meta');

            for (let i = 0; i < metas.length; i++) {
                if (metas[i].getAttribute('name') === 'DCSext.articleFirstPublished') {
                    publishedDate = metas[i].getAttribute('content');
                }
            }

            publishedDate = publishedDate.substring(0, publishedDate.indexOf(" "));
            const dateElements = publishedDate.split("-");
            publishedDate = dateElements[2] + '-' + dateElements[1] + '-' + dateElements[0];
        }
    }

    xmlHttp.send();
    return publishedDate;
}