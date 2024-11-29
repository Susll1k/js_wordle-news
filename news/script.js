const apiKey = "2b92ed5b45054e598fca25187176feec";

const feed = document.getElementById("feed");
const discription = document.querySelector(".discription");

const inputSearch = document.querySelector("input[placeholder]");
const searchBtn = document.querySelector("button");

/**
 * {
	"0": {
		"source": {
			"id": "wired",
			"name": "Wired"
		},
		"author": "Joel Khalili",
		"title": "As Trump Takes a Victory Lap, the Crypto Faithful Kiss the Ring",
		"description": "The crypto industry is celebrating the return of Donald Trump to the White House in anticipation of an easier ride under his regime.",
		"url": "https://www.wired.com/story/trump-crypto-support/",
		"urlToImage": "https://media.wired.com/photos/672bda0a90a94384370310f4/191:100/w_1280,c_limit/business_crypto_faithful_trump.jpg",
		"publishedAt": "2024-11-06T21:11:39Z",
		"content": "On the campaign trail, Trump went out of his way to court their favor. In July, speaking to thousands of bitcoiners at a conference in Nashville, Tennessee, Trump duly sang from the bitcoin hymn shee… [+2014 chars]"
	}
}
 */

searchBtn.addEventListener("click", async () => {
  const q = inputSearch.value;
  feed.innerText=''
  if (q.length === 0) {
    return;
  }

  const news = await searchNews(q);

  news.articles?.forEach((element) => {
    const title = element.title;
    const image = element.urlToImage;

    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.style.width = "300px";

    const card = document.createElement("div");

    card.append(img);

    img.addEventListener("click", () => {
      discription.innerText=''

      const img2 = document.createElement("img");
      img2.setAttribute("src", element.urlToImage);
      img2.style.width = "1000px";

      const title2 = document.createElement("h1");
      title2.innerText = element.title;

      const disc = document.createElement("h2");
      disc.innerText = element.description;

      const a2 = document.createElement("a");
      a2.innerText = 'Источник'
      a2.href = element.url;
      discription.append(img2,title2,disc,a2)

      // location.href = element.url;
    });

    feed.append(card);
  });
});

const searchNews = async (query) => {
  const url = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${query}`;

  try {
    const response = await fetch(url).then((rs) => rs.json());
    return response;
  } catch (error) {
    console.error(error);
  }
};
