function getArticleId() {
    let articleId = null;
	let xmlHttp = new XMLHttpRequest();
    
	const url = "https://www.telegraph.co.uk/news/2018/04/27/kim-jong-un-becomes-first-north-korean-leader-cross-south-65/";

    xmlHttp.open("GET", url, true);

    xmlHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const metas = document.getElementsByTagName('meta');

            for (let i = 0; i < metas.length; i++) {
                if (metas[i].getAttribute('name') === 'DCSext.articleFirstPublished') {
                    articleId = metas[i].getAttribute('content');
                }
            }
        }
    }

    xmlHttp.send();
    return articleId;
}