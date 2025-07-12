const jogos = [{
        "id": 1,
        "titulo": "7 Days to Die",
        "genero": "Survival Horror, Sandbox",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/251570/header.jpg"
    },
    {
        "id": 2,
        "titulo": "Age of Empires II: Definitive Edition",
        "genero": "Estratégia em Tempo Real (RTS)",
        "plataforma": "PC, Xbox One, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/813780/header.jpg"
    },
    {
        "id": 3,
        "titulo": "Among Us",
        "genero": "Social Deduction",
        "plataforma": "PC, iOS, Android, Nintendo Switch, PlayStation 4/5, Xbox One, Xbox Series X/S",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqIGsJAt5FO4FyFelvjbpP0fmSfsBTk-zPZsQcvtWGZE5lZQkGDkMh5ADwlROIocrkR76d5sHg8FJ4ZY8lb6JQnE-UEQEexU4ENzBjvmbuNM8Bve9MC3O2a-4sJozpIopHceF-mhaGDQg/s1920/CAPA.jpg"
    },
    {
        "id": 4,
        "titulo": "Apex Legends",
        "genero": "Battle Royale, FPS",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg"
    },
    {
        "id": 5,
        "titulo": "ARK: Survival Ascended",
        "genero": "Ação-Aventura, Sobrevivência",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2399830/header.jpg"
    },
    {
        "id": 6,
        "titulo": "ARK: Survival Evolved",
        "genero": "Ação-Aventura, Sobrevivência",
        "plataforma": "PC, PlayStation 4, Xbox One, Nintendo Switch",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg"
    },
    {
        "id": 7,
        "titulo": "Backpack Battles",
        "genero": "Estratégia, Auto Battler",
        "plataforma": "PC",
        "image": "https://imgs.crazygames.com/backpack-battles_16x9/20230829041645/backpack-battles_16x9-cover?metadata=none&quality=40&width=1200&height=630&fit=crop"
    },
    {
        "id": 8,
        "titulo": "Baldur's Gate 3",
        "genero": "RPG",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg"
    },
    {
        "id": 9,
        "titulo": "Banana",
        "genero": "Clicker, Casual",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2923300/header.jpg"
    },
    {
        "id": 10,
        "titulo": "BeamNG.drive",
        "genero": "Simulação de Veículos, Sandbox",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/284160/header.jpg"
    },
    {
        "id": 11,
        "titulo": "Black Desert",
        "genero": "MMORPG",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/582660/header.jpg"
    },
    {
        "id": 12,
        "titulo": "Black Myth: Wukong",
        "genero": "RPG de Ação",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1818450/header.jpg"
    },
    {
        "id": 13,
        "titulo": "Bongo Cat",
        "genero": "Casual, Musical",
        "plataforma": "PC",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3419430/e8c9b865822618f3d3cd07757ddc60740c8e54b0/header.jpg?t=1749126376"
    },
    {
        "id": 14,
        "titulo": "CS:GO",
        "genero": "FPS",
        "plataforma": "PC",
        "image": "https://s2-ge.glbimg.com/BsRH4rij3O7pZ-gj3JCCLNFcFw0=/0x0:1100x618/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/Y/i/dULbPDQDC1fIKuUQQRug/csgo-image.jpg"
    },
    {
        "id": 15,
        "titulo": "Call of Duty®",
        "genero": "FPS",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg"
    },
    {
        "id": 16,
        "titulo": "Clair Obscur: Expedition 33",
        "genero": "RPG",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S",
        "image": "https://image.api.playstation.com/vulcan/ap/rnd/202412/1011/7764db359824f321c21c26f3bc428cbc9e7b4827f09c4a0c.jpg"
    },
    {
        "id": 17,
        "titulo": "Counter-Strike 2",
        "genero": "FPS",
        "plataforma": "PC",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861"
    },
    {
        "id": 18,
        "titulo": "Counter-Strike: Source",
        "genero": "FPS",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/240/header.jpg"
    },
    {
        "id": 19,
        "titulo": "Crosshair X",
        "genero": "Utilitário",
        "plataforma": "PC",
        "image": "https://cdn1.epicgames.com/spt-assets/bd49b69c7a9e410b83b7c553c837a00a/crosshair-x-wsei7.png"
    },
    {
        "id": 20,
        "titulo": "Crusader Kings III",
        "genero": "Grande Estratégia, RPG",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1158310/header.jpg"
    },
    {
        "id": 21,
        "titulo": "Cyberpunk 2077",
        "genero": "RPG de Ação",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg"
    },
    {
        "id": 22,
        "titulo": "DayZ",
        "genero": "Sobrevivência, Mundo Aberto",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/221100/header.jpg"
    },
    {
        "id": 23,
        "titulo": "Dead by Daylight",
        "genero": "Survival Horror Assimétrico",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg"
    },
    {
        "id": 24,
        "titulo": "Delta Force",
        "genero": "FPS",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S, iOS, Android",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2507950/header.jpg"
    },
    {
        "id": 25,
        "titulo": "Destiny 2",
        "genero": "FPS, Ação-MMO",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg"
    },
    {
        "id": 26,
        "titulo": "Don't Starve Together",
        "genero": "Sobrevivência, Aventura",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/322330/header.jpg"
    },
    {
        "id": 27,
        "titulo": "Dota 2",
        "genero": "MOBA",
        "plataforma": "PC",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/570/header.jpg?t=1748018387"
    },
    {
        "id": 28,
        "titulo": "Dune: Awakening",
        "genero": "Sobrevivência, MMO, Mundo Aberto",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1172710/header.jpg"
    },
    {
        "id": 29,
        "titulo": "EA SPORTS FC™ 25",
        "genero": "Esportes",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/FC_25_%CE%B5%CE%BE%CF%89%CF%86%CF%85%CE%BB%CE%BB%CE%BF_ultimate_edition.jpg/250px-FC_25_%CE%B5%CE%BE%CF%89%CF%86%CF%85%CE%BB%CE%BB%CE%BF_ultimate_edition.jpg"
    },
    {
        "id": 30,
        "titulo": "ELDEN RING",
        "genero": "RPG de Ação, Souls-like",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
    },
    {
        "id": 31,
        "titulo": "ELDEN RING NIGHTREIGN",
        "genero": "RPG de Ação, Souls-like",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2622380/header.jpg"
    },
    {
        "id": 32,
        "titulo": "Eternal Return",
        "genero": "MOBA, Battle Royale",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1049590/header.jpg"
    },
    {
        "id": 33,
        "titulo": "Euro Truck Simulator 2",
        "genero": "Simulação",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg"
    },
    {
        "id": 34,
        "titulo": "Europa Universalis IV",
        "genero": "Grande Estratégia",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/236850/header.jpg"
    },
    {
        "id": 35,
        "titulo": "FANTASY LIFE i: The Girl Who Steals Time",
        "genero": "RPG, Simulação de Vida",
        "plataforma": "Nintendo Switch",
        "image": "https://store-images.s-microsoft.com/image/apps.12059.14329530897753497.c96004b2-d509-440a-8704-9123fb173a75.87d76e22-707a-4de5-9057-1600f657959b?q=90&w=320&h=180"
    },
    {
        "id": 36,
        "titulo": "FIFA 25",
        "genero": "Esportes",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
        "image": "https://tm.ibxk.com.br/2024/11/21/21174535385840.jpg"
    },
    {
        "id": 37,
        "titulo": "Factorio",
        "genero": "Simulação, Estratégia",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/427520/header.jpg"
    },
    {
        "id": 38,
        "titulo": "Farming Simulator 25",
        "genero": "Simulação",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S",
        "image": "https://images.squarespace-cdn.com/content/5c95f8d416b640656eb7765a/2df2cc4f-76f1-4336-83b5-f1d64bad3d09/Farming+Simulator+25+l.jpg?format=1500w&content-type=image%2Fjpeg"
    },
    {
        "id": 39,
        "titulo": "Football Manager 2024",
        "genero": "Simulação, Esportes",
        "plataforma": "PC, PlayStation 5, Xbox One, Xbox Series X/S, Nintendo Switch",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2252570/header.jpg"
    },
    {
        "id": 40,
        "titulo": "Fortnite",
        "genero": "Battle Royale",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch, Android",
        "image": "https://f.i.uol.com.br/fotografia/2020/05/18/15898209045ec2bde8e4e25_1589820904_3x2_md.jpg"
    },
    {
        "id": 41,
        "titulo": "Forza Horizon 5",
        "genero": "Corrida, Mundo Aberto",
        "plataforma": "PC, Xbox One, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg"
    },
    {
        "id": 43,
        "titulo": "Garry's Mod",
        "genero": "Sandbox, Física",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg"
    },
    {
        "id": 44,
        "titulo": "Geometry Dash",
        "genero": "Ritmo, Plataforma",
        "plataforma": "PC, iOS, Android",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/322170/header.jpg"
    },
    {
        "id": 45,
        "titulo": "Grand Theft Auto V Enhanced",
        "genero": "Ação-Aventura, Mundo Aberto",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg?t=1741381848"
    },
    {
        "id": 47,
        "titulo": "HELLDIVERS™ 2",
        "genero": "Tiro Cooperativo em Terceira Pessoa",
        "plataforma": "PC, PlayStation 5",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg"
    },
    {
        "id": 48,
        "titulo": "Hearts of Iron IV",
        "genero": "Grande Estratégia, Guerra",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/394360/header.jpg"
    },
    {
        "id": 49,
        "titulo": "Hunt: Showdown 1896",
        "genero": "FPS, Battle Royale",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/594650/header.jpg"
    },
    {
        "id": 50,
        "titulo": "League of Legends",
        "genero": "MOBA",
        "plataforma": "PC",
        "image": "https://s2-ge.glbimg.com/fxI0yK-cdnMNI2FrieyuHcdCtkE=/0x0:984x554/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/6/Q/Fq6AMUTJKxZA7SVgIJBA/league-of-legends.jpg"
    },
    {
        "id": 51,
        "titulo": "Left 4 Dead 2",
        "genero": "FPS Cooperativo, Survival Horror",
        "plataforma": "PC, Xbox 360",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg"
    },
    {
        "id": 52,
        "titulo": "Limbus Company",
        "genero": "RPG, Estratégia",
        "plataforma": "PC, iOS, Android",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1973530/header.jpg"
    },
    {
        "id": 53,
        "titulo": "Marvel Rivals",
        "genero": "Tiro em Equipe, Ação",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S",
        "image": "https://cdn1.epicgames.com/spt-assets/eb15454c010f4a748498cd3a62096a52/marvel-rivals-wq3mr.png"
    },
    {
        "id": 54,
        "titulo": "Minecraft",
        "genero": "Sandbox, Sobrevivência",
        "plataforma": "PC, PlayStation, Xbox, Nintendo Switch, iOS, Android",
        "image": "https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png"
    },
    {
        "id": 55,
        "titulo": "Monster Hunter Wilds",
        "genero": "RPG de Ação",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnDipAwIepDsmmn-86Qx45rF5XmycSVL2tg&s"
    },
    {
        "id": 56,
        "titulo": "Monster Hunter: World",
        "genero": "RPG de Ação",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg"
    },
    {
        "id": 57,
        "titulo": "Mount & Blade II: Bannerlord",
        "genero": "RPG de Ação, Estratégia",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/261550/header.jpg"
    },
    {
        "id": 58,
        "titulo": "NARAKA: BLADEPOINT",
        "genero": "Battle Royale, Ação",
        "plataforma": "PC, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1203220/header.jpg"
    },
    {
        "id": 59,
        "titulo": "NBA 2K25",
        "genero": "Esportes",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2878980/capsule_616x353.jpg?t=1747407792"
    },
    {
        "id": 60,
        "titulo": "OBS Studio",
        "genero": "Software, Utilitário",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1905180/header.jpg"
    },
    {
        "id": 61,
        "titulo": "Once Human",
        "genero": "Sobrevivência, Mundo Aberto, MMO",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2139460/header.jpg"
    },
    {
        "id": 62,
        "titulo": "Overwatch® 2",
        "genero": "FPS, Ação em Equipe",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2357570/header.jpg"
    },
    {
        "id": 63,
        "titulo": "Oxygen Not Included",
        "genero": "Simulação, Sobrevivência",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/457140/header.jpg"
    },
    {
        "id": 64,
        "titulo": "PUBG: BATTLEGROUNDS",
        "genero": "Battle Royale",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/841ea38bc58cabb70aef65365cf50bc2d79329d9/header.jpg?t=1746590920"
    },
    {
        "id": 65,
        "titulo": "PAYDAY 2",
        "genero": "FPS Cooperativo, Ação",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/218620/header.jpg"
    },
    {
        "id": 66,
        "titulo": "Palworld",
        "genero": "Sobrevivência, Mundo Aberto, Ação",
        "plataforma": "PC, Xbox One, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg"
    },
    {
        "id": 67,
        "titulo": "Path of Exile",
        "genero": "RPG de Ação, Hack and Slash",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg"
    },
    {
        "id": 68,
        "titulo": "Path of Exile 2",
        "genero": "RPG de Ação, Hack and Slash",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2694490/capsule_616x353.jpg?t=1745801545"
    },
    {
        "id": 69,
        "titulo": "Project Zomboid",
        "genero": "Sobrevivência, RPG, Isométrico",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/header.jpg"
    },
    {
        "id": 70,
        "titulo": "R.E.P.O.",
        "genero": "Horror, Ação",
        "plataforma": "PC",
        "image": "data:image/jpeg;base64,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"
    },
    {
        "id": 71,
        "titulo": "REMATCH",
        "genero": "Ação, Multijogador",
        "plataforma": "PC",
        "image": "data:image/jpeg;base64,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"
    },
    {
        "id": 72,
        "titulo": "Red Dead Redemption 2",
        "genero": "Ação-Aventura, Mundo Aberto",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg"
    },
    {
        "id": 73,
        "titulo": "Revolution Idle",
        "genero": "Idle, Estratégia",
        "plataforma": "PC",
        "image": "data:image/png;base64,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"
    },
    {
        "id": 74,
        "titulo": "RimWorld",
        "genero": "Simulação de Colônia, Estratégia",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/294100/header.jpg"
    },
    {
        "id": 75,
        "titulo": "Rocket League",
        "genero": "Esportes, Ação",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJANR1OZtB3WTef1I80MZGu8t93BEfj5BfXg&s"
    },
    {
        "id": 76,
        "titulo": "Rust",
        "genero": "Sobrevivência, Mundo Aberto",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg"
    },
    {
        "id": 77,
        "titulo": "Russian Fishing 4",
        "genero": "Simulação, Pesca",
        "plataforma": "PC",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/766570/header.jpg?t=1725868775"
    },
    {
        "id": 78,
        "titulo": "Satisfactory",
        "genero": "Simulação, Construção, Mundo Aberto",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/526870/header.jpg"
    },
    {
        "id": 79,
        "titulo": "Shadowverse: Worlds Beyond",
        "genero": "Card Game",
        "plataforma": "PC, iOS, Android",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2584990/header.jpg"
    },
    {
        "id": 80,
        "titulo": "Sid Meier's Civilization VI",
        "genero": "Estratégia 4X",
        "plataforma": "PC, PlayStation 4, Xbox One, Nintendo Switch",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg"
    },
    {
        "id": 81,
        "titulo": "Slay the Spire",
        "genero": "Roguelike, Card Game, Estratégia",
        "plataforma": "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/646570/header.jpg"
    },
    {
        "id": 82,
        "titulo": "Soundpad",
        "genero": "Software, Utilitário",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/629520/header.jpg"
    },
    {
        "id": 83,
        "titulo": "Spacewar",
        "genero": "Arcade, Tiro",
        "plataforma": "PC",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIVFRUXFxUVFxcYFRUVFRUVFhcYFxcVFxUYHSggGB0lGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALgBEgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xABAEAABAwEEBgYIBAYBBQAAAAABAAIDEQQSITEFQVFhcYEGEyKRobEjMkJScsHR8AczYqIUgpKy4fEkFRZTY4P/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQMCBAX/xAAlEQACAgICAQQDAQEAAAAAAAAAAQIRAyESMUETMlFhBELwItH/2gAMAwEAAhEDEQA/AO+tHaidvYfJeI6fj9E7cfIr2yxtJhAPu08F470hZ2JhsLvArkiyjMJAoRnAcAiuizmYqIgJBIFIQUyfLmnVTZckWBK1OTAU4LSBhKvy6REJ6o2eGQAMLi9rr95zQ5wvtIIoXUpuVSxxh8jGnIuAPCuJ7qqpa5b73v8Aec53C8a08VjIymL5L82mrFT0lnljrhWKW9+2QHzTbD/AEUZbJGVxpND4XoyfJcppB159Bqw5lbVi0KcMk1F1Zu11R0DNC3vyrRZ5OEoae59EybQVpbiYXkbWi8O9tVmy6Jp7ArtAx7woo2yx/lyysO55+aFKQnGJYkYW4FpB3iiaVPH0htrcDN1g2SMa/wA1J/1+9hLY4Xb2F0bvDBa5v4F6a+Sq1BXG2+wu9eO0RHdSQDwUrLNZJPy7a0HZI0tPeKp+ohek/BmkJpAWu7o/I78t8cg/TI0+BxVO0aKnZ60TxyKfJMzwa8GY0dopyY0EONRROqhMGAphCc5MSYBITEdSalY0EhMkCNUyQrJoNEKIlBACoiAEEAU0MkSTapLor+oR9E6KDiz1tmravK+kjO3aG73eVV65o+QFjS3IheWdLWUtM42k+S85MszirM6rG8AplWsfqBTroOV9hqlVNSTEOqmyZFIFNcMCgCVpwCdVRRnAJ4TQy3ZTdEj/AHY3AcX0jH95PJZszqDhitFwpB8cnhG35mX9qxNLSUbTbgpPcqKx0hmgLL1spccm9o8ScPvcu1s1loM1ndGLAGwtJHaf2jw9nw81vmMDWuitGL3ZUcw7FE5u0K+yzk1NQGtFXOJo1o2knJZsmkTKSyxxmWmBmfVsY+Fubuay2kbSbGugbsTDZGq7ZtDzjF9odXYwNaPKvirQsrhm8uH6g0+IAPisOZvgYb9Hg61Vn0Xur4ro/wCALvy6kipLczQZkbVVLCtJJmXo5p1hLcqt4EhTRaRtMXqTyDcTULakaoJIAdSTgg5MbFpyWWGVsoY+gaQboDvWpms0GN21h7wr8kAEchGxv9yyQFPcWN7RK+yOzFHDca+CruKlaSMqhSmevrNDuIoe9Pm/JniU64JtVbdAx3quLTsdiO8KCWyvbjSo2jEd4T5WFMjqo3lOTJNSaEOJQBSKahAGqQKaUQtIdD0kKJKtMR9C9G3egaNi4PpwylsfvDT5rtOij/RkbCuT6fspagdrB4LzizPNbLkRsc7zUqZGKOeNj3KRdJzS7FVCqSSa2ZCSmuyKKKQAZkFIHKOLJTWeEve1gwvOa3+ogfNPpWBZt5oI2+7G2vF9ZD/eByXPuiM1oZGMqgHhm49wW1pS0hznv1EucNzdQ5Cii6H2W858xGJ7LeJxd8lnDt2Wm6R1llbTVuHAKSWQNBJIAAJJOQAGJTwKDZRcrpm0OtMwszMG4OkOxoxA8jxIV5OicIluyudpKS5UssrDWmRldtd94LtIbIyNoYwBoAwACraE6PuLGhgEbBgCdZGsDXxV2zzBgcHULnUbU6qHUuWUrOqMWRPjULmlW3DCv3j/AKKhJQIdZrR1TSW4POFdYG4rFtja9oZ6/qtGWVusVVKRwrUdy0pUZkrKBeonAFTSihoo8F09kLK1ob6OTHUPMLEYugkHo5Ph+YWCFz5PcVj0AoVT01ymMYnMkLciRzSJTSUASukDvWaDvHZPh81BJZAfUfydh4jDyT6oJp0BXnhe3MEb9XfkoqrQZKW5H74Jrrjs203tw8MltSM0UKogqy+ye64O3Hsnxw8VC9pbgQRxCpFphQ4cEk1JV4ge59FH4uG8rG/EVtJo3bWnzWj0dfSUjf5hVPxMZ+S7e4fNecuyzPKpMJZR+qveAjVC04Tv/lKVV0ro5p9hqlVAlKqaRkVU4FNRCQhsJwV/RWDnP9xj3c3Dq2nk57TyWfDkeK0LI8CN4ri5zBT9LQ4nvJb/AEom6ibj2ZWmpuzdGvD7+9a63QVj6qJjNYFT8RxPiVy9hi661NFOzGLx46h307l3EQoFTGqiKb3Rn6ft/VRk8TTbTIcyR4qt0PsF1jZH4vlIe74Sagc8+azdOD+ItUcAyc8A/C3PxveC7Sz2f0zWUoK04N/0p5GVxI67RFr6xhIHqg+WFFxUj6kneurmk6uGQjDC6Kb1y7IrzgBkfJSiis2y5YpDdq6pGpWC9pFQ3IE5nVnVVZ5QKNAywP33IOlFwjXQ0+VVRLZNvRRtMmOf2VEwFJja4lOWWMgtYwB+8fvxVWqtS4g/eSqBXxvRCemJ57Eg/SVgAroWCrZPgcueCll9xSHtDVApJFTNDClVEhBDACSVEigQKoJxQoE0AFK2U5ZjYcQoyiFpAP7H/jHe76oI0SVeQj1vRZpMeIU34ixVhjdsf5hRWdtJTwVn8QBWxh2xzD4rii9lpLR47pRtLQd7B4FRFHSb/TNP6SO4hMXUuiE+xxKCCCdmApyYiCiwFFrWiNGOMTZLw7QcQ2hrda4trXi12G5ZjMyuujb6OJuyKP8Ae3rD4vKxJ0tG4xTew6NayheB69DwAyHmrcr7oLjqBPdis/RQ7DfvWrOkfy3bxTvNPmuhaRHbezF6FQdZbZJDj1baczn41716FNCGuv62hteLsVx/4bwVinlGbn4c6/RdhA4ua46qUPECi5cj2dcUVNL2nshm03j3YKtECG3idXgMlXlaS4BXZLe5lGil0UJyqa0yrxA5Jq+kSzTaVpWZxfinCSuZpv2DgFLpSINeHAUDmh4GypKrSvrQbK4jI48FqPVszjyc4pryFgFAorQ2g3HLkntd2QOKr2uuCwXsbH5qo0qcPxHFV9qti8kMvgmhyf8AA/yXOgrorP7XwP8A7SucCzl7NQ9o4lAlEppUkbAShVFBNgKqVUkiEhDapVRTSEwESnAppRAWkBJeSTCkqAe0MZ6UbwVN00ZXRsn6QD3FUP8AqDXSMLQ7+k/Ra+njf0faG09h2eGpefB7LyVo8Htx9Iw7nBOUVvdjGd/yTyV3Lo5pKwoIVSqixUFEJlUQiwaEPaXbWsUe8am9gcGC6PBq5HRcd6eNvvSRg8C4V8F1MslQ9228e+pUpspAi0WOw3n5lWNIDsO+96r6O9RvPzVq2Nqwhdcujmh2U+gNo6qzg6jWveaFdhZJQIae8RjxxXEdEz/xm8D5ldeXi6wDYO/Jck+zsiynJFR1Vr6Ehgc175XAPbg0OBuOwIxcMQR2TyVOduCznyUcHXatBOB1hoqeetX/AB5cXZyfm43khSdFjSpa6hbkykeeqlQacQ/wWZVS2WapIdjeq012n1XYbHUPeq95ZdGfx48I8PgkiFa48FFMVJkFWmdgsnURMNTzUQCdGfmUDkq4kRyPolsnrEfpd/aVzy37K6jhwPkVgrOXTNY3/kSaQi5BSKASRKBQAEKI1QKQgVQRKAWgEiEE4BaQIcgnUSVKEe8aU0/HES2OIXqYGgpisu1aTL7LMZbtXNcMKDVsXn09vleaudqAVa0Sve0i8ThtK87HgcXcmdc8kWqijndIZM+IJybpKvV7wR5pArtXRyMKSCIQISITSiEAaPR4f8lh90Pf/Qxzh4gLefhG74T5FY3RselkOyF37nsZ5PK2Z8I3fCfJTl2Uj7QWH1G/etaDW1IG1Z1j9RqvXqUOw17l2vo44OmZHRll1kkeVySRvc5bdjn7TRWueByGf+1mWmPqrZO3VK1k7eDhdd4tKvx2FweBgddQcKLlfZ1mxI6leaxp7RWtRWuzCmIPypzVuWQtBB2FZUuG3UccMwnFtdCmr0wE0NORpj3Fb+mbHCIopYnOc514vbQG6QA4nDMUNa+S512rDOmevV51VqB16J7DmO2MdbfW72En+VU9b04tVpnFng3OM0+v7++iEvIrQ51Go58clUkqnSKF8ijZ26Hx5HkEHJwyHemFdONVE58jtgb9Vl2qIsOdfqtbrmxtL3Nvey0VoL207QFj2u0F+oN4LGVp6N406IC87Ei8jUhd3priVErscJdxQMu4pgwFEC4oAeZRv7kOtH2CmElC8UASGUbfNLrBtCgeSRRBmAToCx1g2jvTg4bQqxO5Go2LSQy1e3hJV7o2JJ39j0dOG9oBWBHQqszGRXVwZWd+NI5bTDMJBvPmq7MhwV7TTcZOfks2B1WjgF1wdxODIqbJUQmIrRgdRFMRCBG90bb2ZjvhZyPWOPjG1aVrFI3cFW6Ox+gJ2yu/axlPFzlb0g30buXmFP8AYp+oyx+ozgriq2RvYbwCuOau04ok+mNH9ZZIbY042d5s8w19VLS67gHXP6nbFKcbjh7qs9FrRGJXQT0MFoaYZAcheqGurqxNK6qqlbdGy2V74Hkl0JpX343V6uUbnNGOxzXDUufLD4OzHNeRWiTA12LJD2k4igoeNcxzOVaUxyU89pq0g5rPvUxWYNxDIlLocca45fXId9e9Osk117TvFd41jmCRzUD31xQZJTHiMgc+KHT0TcbVFm1xXHOaDWhwO0Zg8wQq7aE071YtpvBjtZaWniwin7XN7lAGUw7/AKJYo8hKbUbYTig0VNEnFK/cY6TZg3e4/dV2N8USim3RQ0tNVwaDgzDidZ7/ACVGiRKC5Hs6REJjk5yjKyAnJiSDkwYimFEphKaBBKYXIXlGVtRHRJXenhV1Kwp0MmSSokgDprNmSr4VSEUAVoLgyrZ34+jF02ztv3tr4LDsh7A5+a6PTY7Y3tC5yy5EbCR4roxew48y/wBslSRSWyQkUEqpgdf0RtlnLBDNKYnXjdJbVjg6mbtRrt3LrrX0VbIygmzxBoCNoyzC8vsmiZ5qdXE92+hA7zgu76L6Gt0BFZmsZrjPpB3ezyWePlG4u1TFPoaSEC8KgYXm4t57Oaie2q72O+RjG6m0NJHdms22aGikxb2HbW+qeLfpRVWX5Jywr9TjJGLo7Jam26NkEzg20RC7DI40ErNcMh30GO2hxoQc7SGjJIvWbUe8MW/45rMkjVNSRJXBh0pYSx7mYtLfWY/Bze7B3EYFY5cujdpW+0R2mPrmj1XVuysG5+sbis+bRtmdiy0PZufGTT+Zqi4NFeUX0ZBKQKvO0fC3O0F25kZ83UUd5owY2m8m8488hyCaxtic0hoqM89Q2f5QcaJIUV4x4qjnlLkwAVVTTMvaEYODM/iOfyCvxvDAXn2Rhvcch3+SwXuqSTmp5ZXotijqxqYSnqMqJQBKYSiU0oADnJhKTio3P3ppAJz1E5ya5yjLlRKhj7yIKiqi1yYiVSNKgDt6lY5BpE9dySakivsR2ApQKVpwVVr8lZs8L5DRjHO4AnxXnTidylWylpn2DuIXNWYdpwwHa4BeiSdFZpQ28WxgVrXtHHcPqrFi6CWZhJeXyk44m63uH1V8SajTObLuVoxbR+HVuaRdYyQEA1Y8UFdRvU8FNZvwxt7s2xM+KTHuaCvXtCys6trGClwBtCakAYDHWFfKqT4nmOjvwiOc1pHBjT5ldToz8PrJDiG1I1kAnvdVdKK6jisbTvWyRVs7wTji114GhpgRgMa9yaVi6J5o7JAKvIoNp+WSxLb0zjYbtmgvnKtAGg6q61zMkETSTaZ3SPGbWY0Oy8VNFptrcLNY3OOou+wrKCX9Rjlf9bOp6MaZtUznde0R4UbSpF76UWvNYai9I5oJ9toAFf1AnHiuAtA0jICZJGQRn2S4CnClD4o6E0vFYyXS2l1o1UxcMDUUvYVCnJWbizr7TC5nrULfeGLeez7xWNbtAxyYs7DuHZPLVyVmxdKmShxhjIx9VxoDXMjxQFuY4ktLWEZtwu8d3JT9r0UpSWzktI6LfF6zcPeGLTz1LNfGvQobcx9W1FcqHI8DrWdpDo+x+MfYOz2Ty1KkcvyQng8o4d7U0sNMlq6Q0e+L12035tPNQG3lpu3hdNBceL0dKUrtBr7pCrz8okse9mcWJtCujk0B1jGvjIaS0OLCcqitA4581iy2d0Li6VpAaK0Os6hzNE+aobxtMz9LyUAj1jF3xH6DzKyVLNJUlxzJJ71FVc12WQx6jJTyVE5yyAioyUHOUUjlpIYnvUDimvkURKqlQh5cm1TC5OZTamIVU5rStSwaIMgqHNA41KJ0dcdSUlo1OAqDz1LPON1ZriyjFA45AngFK1lNW3BaMT5IMrr2bf8AIVkvimxPYft/yl6m+tD4mTf3FJa/8BLqIpyQVOSFx+j06xaDszAC1gfsc43v8eC0waCgoBsGAWFZ7U6M1GI1t1HeNhWtBO14q08RrB2ELkUky0otEpcmEoFNqtEyaGcsILTQhdLo7SAlGxwzHzG5cmnxSFpDmmhCBnYTx3muaSQHNLTTMVFKheZWe0TaItBjeS6zOOWNBe9pv3/nvrJpZjm1e5rCM6kAcQSsLpXpfRssTo5rXAHUJaQ6+QeDamhXV+PmUbjLcX3/ANX2iWSDe12i3PomBzOvhYHlwq0kFzTjXFY8otrjdF1g/wDW0N8c/Fc70H6WOsokiuT2qPsdWYon3SaG+ayBt0VpSoXRy9LLY/8AK0cGV1yzMH7W1U5VGTSd/ZpbWyL/ALSkkxkkc7mSe9EdGYosTTjW8e4YqvNbNKSDGWCIbI2lxHN4I/as6TQcz/zLVK875MOQDQByWG2/JpJLwaxtFljqA6py7NKj+UVPeFjW/Szm+pGXDaRQeOI/pVSbo69uUsrf/q8g96p9RaYie3f/AEyU7w4ALND5Fe2aTtDsnBo3CpHPAeC0tDdMZogGy+lbtNA4cxgqkJErXFzDGWkNc6h6upyFcgd3mqdssZGY5jJJoLZ6Xo/S0Npb2HA7WnMcjms7SfR1rqlmH6Tly2Lza8+N15pIIyINF0+hunLm9m0C8PfHrDiNaE3HaDT7JQ60WU0xu+67Fv8AKdSp9K9NumbHGRSgvOGeJyx4ea39KdJ4HAMjuyEtvuLh2WMG0HNx1Bee2m0gkucQCSSm5cjNcdDHlMc5Qy29g114BUpdJbG96fFmS696he9Zz7Y466cFA51VtQ+Qs0JLQ3aqz7Qq6S0lQWOLygSgkExCRSoiAgCWC0uZiCtizadqLsjajksIhJZcU+xptHUMs4djE7P2SoHx0PabQrDhmc04Gi17NpeuDxX72oUK62Fk1z9SKPXRbT4IKtfRnR20Foe0XZMRqf8AJ2w71LDa7rr0bxUZ0IIO4hJJeZHZ6GRVo27DpJsuGTxm35jaFaSSVou0czFVBzwAScgCTwAqiktGTlLPZ5dIjrJXFkBxbEMARqLvedxw3a1s2DQFmh/LgYD7xALu85JJJ2CRphyNUkkhiqmuCSSBkbxtxCqz2YEUzGw/IpJIAh0fWEPaWiSF/wCZGRupXiKDHNZ2mNEugb1sR66ynXm+KvsvGzekknQqMC0WNrsWHPVqWTbIrmY7RwA2n6IpJQVioz3sLa4mpzO1VJBvSSVYgyu8KIhFJbMDEKIpIECiIakkgBURSSQAaJBqKSBkrYN6ZJGQcUkkDa1Y24E5lRnkkkmhE/WDcgkknzYz/9k="
    },
    {
        "id": 84,
        "titulo": "Stardew Valley",
        "genero": "Simulação de Fazenda, RPG",
        "plataforma": "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg"
    },
    {
        "id": 85,
        "titulo": "Stellar Blade™",
        "genero": "Ação-Aventura, Hack and Slash",
        "plataforma": "PlayStation 5",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3489700/header.jpg"
    },
    {
        "id": 86,
        "titulo": "Stellaris",
        "genero": "Grande Estratégia, 4X",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/281990/header.jpg"
    },
    {
        "id": 87,
        "titulo": "Street Fighter™ 6",
        "genero": "Luta",
        "plataforma": "PC, PlayStation 4/5, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg"
    },
    {
        "id": 88,
        "titulo": "THE FINALS",
        "genero": "FPS, Ação",
        "plataforma": "PC, PlayStation 5, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2073850/header.jpg"
    },
    {
        "id": 89,
        "titulo": "Team Fortress 2",
        "genero": "FPS, Ação em Equipe",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg"
    },
    {
        "id": 90,
        "titulo": "Terraria",
        "genero": "Sandbox, Aventura, Ação",
        "plataforma": "PC, PlayStation 4/5, Xbox One/Series X/S, Nintendo Switch, iOS, Android",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg"
    },
    {
        "id": 91,
        "titulo": "The Binding of Isaac: Rebirth",
        "genero": "Roguelike, Ação",
        "plataforma": "PC, PlayStation 4/5, Xbox One/Series X/S, Nintendo Switch",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/250900/header.jpg"
    },
    {
        "id": 92,
        "titulo": "The Elder Scrolls V: Skyrim Special Edition",
        "genero": "RPG de Ação, Mundo Aberto",
        "plataforma": "PC, PlayStation 4/5, Xbox One/Series X/S, Nintendo Switch",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg"
    },
    {
        "id": 93,
        "titulo": "The Sims™ 4",
        "genero": "Simulação de Vida",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg"
    },
    {
        "id": 95,
        "titulo": "The Witcher 3: Wild Hunt",
        "genero": "RPG de Ação, Mundo Aberto",
        "plataforma": "PC, PlayStation 4/5, Xbox One/Series X/S, Nintendo Switch",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg"
    },
    {
        "id": 96,
        "titulo": "Tom Clancy's Rainbow Six® Siege X",
        "genero": "FPS Tático",
        "plataforma": "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg"
    },
    {
        "id": 97,
        "titulo": "Total War: WARHAMMER III",
        "genero": "Estratégia em Tempo Real, Turnos",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1142710/header.jpg"
    },
    {
        "id": 98,
        "titulo": "Unturned",
        "genero": "Sobrevivência, Mundo Aberto",
        "plataforma": "PC, PlayStation 4, Xbox One",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/304930/header.jpg"
    },
    {
        "id": 99,
        "titulo": "VRChat",
        "genero": "Social, MMO, Realidade Virtual",
        "plataforma": "PC (VR), Oculus Quest",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/438100/header.jpg"
    },
    {
        "id": 100,
        "titulo": "VTube Studio",
        "genero": "Software, Utilitário",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1325860/header.jpg"
    },
    {
        "id": 101,
        "titulo": "Valorant",
        "genero": "FPS Tático",
        "plataforma": "PC",
        "image": "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/d0db663bf28844dcbd744935cdd8c71083e0031c-5600x3150.jpg"
    },
    {
        "id": 102,
        "titulo": "Waifu",
        "genero": "Casual",
        "plataforma": "PC",
        "image": "data:image/jpeg;base64,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"
    },
    {
        "id": 103,
        "titulo": "Wallpaper Engine",
        "genero": "Software, Utilitário",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/431960/header.jpg"
    },
    {
        "id": 104,
        "titulo": "War Thunder",
        "genero": "Ação-MMO, Simulação de Combate",
        "plataforma": "PC, PlayStation 4/5, Xbox One/Series X/S",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/236390/header.jpg"
    },
    {
        "id": 105,
        "titulo": "Warframe",
        "genero": "Ação, RPG, Tiro em Terceira Pessoa",
        "plataforma": "PC, PlayStation 4/5, Xbox One/Series X/S, Nintendo Switch",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg"
    },
    {
        "id": 106,
        "titulo": "Wuthering Waves",
        "genero": "RPG de Ação, Gacha",
        "plataforma": "PC, iOS, Android",
        "image": "data:image/webp;base64,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"
    },
    {
        "id": 107,
        "titulo": "Yu-Gi-Oh! Master Duel",
        "genero": "Card Game",
        "plataforma": "PC, PlayStation 4/5, Xbox One/Series X/S, Nintendo Switch, iOS, Android",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1449850/header.jpg"
    },
    {
        "id": 108,
        "titulo": "eFootball™",
        "genero": "Esportes",
        "plataforma": "PC, PlayStation 4/5, Xbox One/Series X/S, iOS, Android",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1665460/header.jpg"
    },
    {
        "id": 109,
        "titulo": "tModLoader",
        "genero": "Utilitário, Mod",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1281930/header.jpg"
    }
]