// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const low = require('lowdb')
const Memory = require('lowdb/adapters/Memory')

const adapter = new Memory()
const db = low(adapter)

const data = {
  "artists": [
    {
      "name": "Blackpink",
      "description": "Blackpink is a South Korean girl group formed by YG Entertainment, consisting of members Jisoo, Jennie, Rosé, and Lisa.",
      "yearsactive": 2016,
      "id": 1
    },
    {
      "name": "Day6",
      "description": "Day6 is a South Korean pop rock band under the label JYP Entertainment. The group debuted on September 7, 2015, with EP The Day, which peaked at No.2 on Billboard's World Album Chart a week following its release. The band consists of five members: Sungjin, Jae, Young K, Wonpil, and Dowoon.",
      "yearsactive": 2015,
      "id": 2
    },
    {
      "name": "GOT7",
      "description": "Got7 is a South Korean boy band formed by JYP Entertainment. The group is composed of seven members: Jay B, Mark, Jackson, Jinyoung, Youngjae, BamBam, and Yugyeom.",
      "yearsactive": 2014,
      "id": 3
    },
    {
      "name": "Stray Kids",
      "description": "Stray Kids is a South Korean boy band formed by JYP Entertainment through the 2017 reality show of the same name. The group is currently composed of eight members: Bang Chan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin, and I.N.",
      "yearsactive": 2017,
      "id": 4
    },
    {
      "name": "iKON",
      "description": "iKon, stylized as iKON, is a South Korean boy band formed in 2015 by YG Entertainment, consisting of six members: Bobby, Jinhwan, Ju-ne, Yunhyeong, Donghyuk and Chanwoo.",
      "yearsactive": 2015,
      "id": 5
    }
  ],
  "songs": [
    {
      "videourl": "https://www.youtube.com/watch?v=0AUFyFEt35g",
      "name": "BOSS",
      "artist": "NCT",
      "genre": "K-POP",
      "id": 2
    },
    {
      "videourl": "https://www.youtube.com/watch?v=CWUGikRxGQs",
      "name": "Sweet Chaos",
      "artist": "Day6",
      "genre": "KOREAN ROCK",
      "id": 3
    },
    {
      "videourl": "https://www.youtube.com/watch?v=MBdVXkSdhwU",
      "name": "DNA",
      "artist": "BTS",
      "genre": "K-POP",
      "id": 4
    },
    {
      "videourl": "https://www.youtube.com/watch?v=VpaUh_BGqE0",
      "name": "Rooftop",
      "artist": "N.Flying",
      "genre": "KOREAN ROCK",
      "id": 5
    },
    {
      "videourl": "https://www.youtube.com/watch?v=2dEeiY_w3xE",
      "name": "Day & Night [스타트업 OST Part.2 (START-UP OST Part.2)]",
      "artist": "정승환",
      "genre": "KOREAN BALLAD",
      "id": 6
    },
    {
      "videourl": "https://www.youtube.com/watch?v=N5ShoQimivM",
      "name": "Sweet Night [이태원 클라쓰 OST Part.12(ITAEWON CLASS OST Part.12)]",
      "artist": "V (BTS)",
      "genre": "KOREAN BALLAD",
      "id": 7
    },
    {
      "videourl": "https://www.youtube.com/watch?v=ioNng23DkIM",
      "name": "How you like that",
      "artist": "BLACKPINK",
      "genre": "K-POP",
      "id": 8
    },
    {
      "videourl": "https://www.youtube.com/watch?v=4LPmBiFkoBk",
      "name": "Try again",
      "artist": "디어 (d.ear) X 재현",
      "genre": "K-POP",
      "id": 9
    },
    {
      "videourl": "https://www.youtube.com/watch?v=kT3Swso1is0",
      "name": "아 진짜요. (Oh really.)",
      "artist": "N.Flying",
      "genre": "KOREAN ROCK",
      "id": 10
    },
    {
      "videourl": "https://www.youtube.com/watch?v=Nu2yQ1zYDYU",
      "name": "Shine(빛나리)",
      "artist": "PENTAGON",
      "genre": "K-POP",
      "id": 11
    },
    {
      "videourl": "https://www.youtube.com/watch?v=UuV2BmJ1p_I",
      "name": "Any song(아무노래)",
      "artist": "ZICO",
      "genre": "K-HIP HOP",
      "id": 12
    }
  ]
}

// charge les données dans la base en mémoire
db.defaults(data).write()

// crée le routeur JSON Server avec les données en mémoire
const router = jsonServer.router(db)

const port = process.env.PORT || 3000
server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
});