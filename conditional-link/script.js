const links =
    process.env.LINKS_TYPE === "prod"
        ? {
              link1: "https://yandex.ru/",
              link2: "https://www.google.com/",
              link3: "https://www.spotify.com/",
          }
        : {
              link1: "https://www.youtube.com/",
              link2: "https://www.imdb.com/",
              link3: "https://www.yahoo.com/",
          };

const alias = "link1";

console.log(process.env.LINKS_TYPE);
console.log(links[alias]);
