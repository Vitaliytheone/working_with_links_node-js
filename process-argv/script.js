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

console.log(process.argv);

const alias = process.argv[2];

console.log(links[alias]);
