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
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2622740/header.jpg"
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
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/789570/header.jpg"
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
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2635290/header.jpg"
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
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2585230/header.jpg"
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
        "id": 42,
        "titulo": "GTA V",
        "genero": "Ação-Aventura, Mundo Aberto",
        "plataforma": "PC, PlayStation 3/4/5, Xbox 360/One/Series X/S",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfvvcR-PugQkws511jSaFFxMO78UbCGIftw&s"
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
        "id": 46,
        "titulo": "Grand Theft Auto V Legacy",
        "genero": "Ação-Aventura, Mundo Aberto",
        "plataforma": "PC, PlayStation 3/4, Xbox 360/One",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg?t=1741120008"
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
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2619720/header.jpg"
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
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2479260/header.jpg"
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
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2750690/header.jpg"
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
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2692230/header.jpg"
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
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhMWFRUVFRcVFxcVFRYVFRUYFRUXFxcVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKoBKQMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABHEAABAwEGAgcDCAgFAwUAAAABAAIRAwQFEiExQQZRBxMiYXGBkaHR8BQyQlKSscHhFiNDU3KCk9IVM1Ri8TTCwxdEY6Ky/8QAGwEAAwEBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA0EQACAgECAwUGBgIDAQAAAAAAAQIRAxIhBDFBBRNRYaEiMnGBkeEUFbHB0fBC8SNSYhb/2gAMAwEAAhEDEQA/APDgqS23AcKq8RCChXewxrRXJ6V1EIrNqmMcLRwqNiCElHekAIultzAE1f0AcJNKrCxQmsctqCwBSUmpANX11UA2lXCaa0vbb+2FFwgDmVq+HUKbaexNu9iskhcylobo1kn1LBWcTmT55x4KGoJeZNMsz025nVawi3SS5kyJMgOmfcqxYJNPTu/0E+VMyKlUOPYhrW7AxPf3KXb2UeQVUbZWLSQ4EAQ0z4qO55t9SqUi8W5z5BcQHHMDZVjiltFb/oHdrmiVotAjKSO8AH/hZz1Sts0fLYtsltIY8AkNOZHhse5TmxRUI6epi3Jy3JWeq52uTTnM5pxdw00VK+hK0WimcIk4mneMJ8FElLY0gidO0lwDnaDQDmsNFypGkpGTSqh8AtGs5a+BUPFKLuw71mYx85AABpnkfApd3JcxS4hFz3Oa/GGw06gH7k4wvmOGTYKri8xJkjKM4A+NlOSKjKuiNdWxkmwU4azPESCYaYEbEpTzLRTLjLYG3TikwZnKdPYuXLmrkaarRlf4eTrPLKdFl3sao0jE29k4ZqvgtpuPe4YQR5lc8stuilpXM29PhGpGeAHvccvQFc8stBasyKPCL8zjYZ1mT+ClzvqNzXgP9Dj9an7fcnr/APQd4vA+dIyX2Tg0tzxL3IqE/EYFNve0AI6gNVSoQiplz5jGnbW4DC1gr2lt1ExErOTb2AJRqbhXQBJVvsMcKnFVzECStqgLDkI3P3LTItMUr570G6YUnAZ+xNxjLC3dPwJknyAVFNRlBJc7G7Y8fNZqCcty1KkSLydSt3Jye3QLpbjc8RAWDlcnp2s0bWmiyzU8WUwBr3qtejZPZ8wVyRKq0RkdO5T31rS9itKqy6lSkAAEnXXbwSm6e+2xUYxaJ1WCYBgDPw/JRGSe17CnBXsQc0AQHGPDI+aXeNCUETL8gByzjJNzpIbiimnrOsJuVq+dEpbmTRJdAGpSxbuipLbc2TyGAR87Q55hF4tN2NRb2aKnPcCdTGfNZPJEfcpmVQqvdmXaCI9yieeL36msMBs7JZX4ZBGuk5/8LnlnWmjTuOpubvu+o89kEuPLVcOTNB+8arEkdjdvCoAmsYy+a3XzOg9q4p5urF8De2Sy0qQhjAI31PqVzSzt2VpZf1qxWXxHpE13JZqb6DoA8lQsjbFSJSeavvJCpHyWv0G21TZ4wAJwhq6iGSle1AJN0uQwIScaAbStISjVSEwJUNoAlVqVtLqAFQ7XssYBNNJUISOfwGSY0n40Q3fxFt1JMdGYzVJY9D1cwkr2IzzT1eyvABAqYzpUAJNgMBEWuoMm1bRi5RdCZKeW2iw0aafU0U21uW2d45xzUpxXNWWpUi8PBGflCTemWqPqRrJULQQYAy0O5PiVWecckNo0/EadE3vaHGRl3Z+1Ywi6V9B6uoUnCSARpvv7kppNjWR9TKFZpYG4YO50KlRq2/kVq3orkA+SbTUWmaqSJ07S0aA+O6lpp30LUosnSoTLiSfL7ylaqpC1bmdZbO0wQ4Zag7rOThpbLXNG4sN24jzJXBkztJto64pHX3Jw6Ttlz171wy4hOL33Kckjq7FY20mw32arz8mVtk8y/GSufW5PmOqJBqjqFk0ObaoQ8KN+YEoV6lQiMqLkM+Tl+j1tZ4YkgJEJpi2EUMYkgGAnW1gBSASAGFSSYBKSYAkBLHlA81pOUNKUV8ya3tkVmUCd9ABIBhUq5iCUatqGCmwJJurAJSWwFjXxMJdRDbUKG7VDL6tWQO7cqVESvqM1AT9xSpDVpGc63gjMbZ5aqsnduKUVuEI09zKdXDmYg0BwyPf3zuuZxd87Ne9XIw2OzzVVsaRkbix1gKRadzrssZJt7k6k5F92MbOZ9FjkUVBuXPodUYuXI7fhG4i843khg1PP/aPjJeVmzK9jra0peJ3hIaAGwABAjZcOW1yZKXiV4lxyZY2tWbqwsuC01Vy2JJYVLWwWTwoaaQrIkJDBAz5LK/RzwwBVRlpdgEosBKQBADlO9qASQAgBhUnQAUgBFgCABAAEVtYAkA4Q5dABADATT8QHCkBwkA1TewDS2oZIKWxkgpGWNT1b2MyKdQgROSVX7QaVZZSJmUpTt2aKN7GwsrXHdcs5pG0MVnYcLXM6q9onLUnYDc/G8LzuJzWuZ2wjpVnpLWtY0MYIa0QPx814eWbNEurItK5XK9xsvaVUpbUQXAKOYiwJiJtCaAm5VbZKIkIa8BhCnYZ8kL9GPEBAAgAQAIAcIASABAAgAQA5TddABIBJtsCQRW1iAhIY5VzaluhAVD8hgECJABHxDcmMMfjBSFuSaBz9hTTBtkw1vMeh96TVOhXImGt5j0clsO5eH6E2tZzHo73pUO5/2h02jOdNsj+CizQupU2zqPQ+9JlRs2tO76JP+e0D+B5HtK5HlyJe76nascG/e9Dd3fdFIkAVmu8GELk4jM49PU6MeGN+96HpVx3e2hSgDN2ZOngO7f1Xi5syb9o2rfYzMS4pTVVQ6IWi0sptxPIA9p8BuVOPFOctKRPM0dq4ndMU2ho5uzPpoF6GPgYpe0ytBVZr9r4wS/I7QAPRay4XHpdITijq7qtnWNz1ET4mV5+THokQ0Z4WZIwU4tLcASdAEpUFHyQv0Y8QEACABADCarqAEqp1ewhKBjIQAJgCQBCEAFNuwBIBtK0hPT0ExFQ3bGSCcXuICFA0ATAYCErAaQDCQE2hHyGSAUjsk1BRa0qpNTlsqBIuYsaNImwsYBhc+RujeFHdcJWIYmlwyBk98bQvL4rKtFVv4nZBHeOcvCybqzZGLaLWGCdeXeeSjHhcmNnOWg1Kz9CToAJ9gXqwUMUQujZWDhhxzqOwj6rYLvXQe1YZOOX+CslzN9Zbls7NGA/xEu9hyXM+KyvmyHbNixjR80AeAA+5ROSk7sVFgWYgQA0AJFjPklfox4YIAEACABADCpJVuASiMtLtACLt2wBSAwVdx3sQlAwQAApqTQDCqNb2JhKlOuQ6BCa1WwAlDduxIaQxoYDUgMIAmFSm0mhlgGSlt6aGqJBqhjRNoQr6FF9MJVuWmbS7mZhc+XS4ttm+NdD1XhKyAUMbtSTh8AAPvn0XzfGT3O+KNtK8ueRvY25GMbuxmXnsjQDVdCyuOPYzb32NlZLO1ghrQOfM+a5ZzlLmyWa2++LbJZZFWqC8fs6fbqeBAyb/ADELt4fs7iMy1Rjt4vZff5GUssY7dThry6U67iRZ6DGDY1SXu+y0gD1K9nB2FD/OTb8tv5MZcRPoqNQzpFvIOxdawj6ppMw+zP2rpfZPCNVpfxt3/BHe5PE7rhDpGZaHClaWto1DAa4E9U8n6OfzHHYEkHnOS8njOypYoueN2vVfyjWGXpI7wFeQb0SKBCToD5JX6KeIOEAb+y8HWuoJawRtLhn4Lhn2jgg6bO9dm56ul9S6nwLbT9BonSXgTPJRLtTh11f0F+XZvL6kmcB2wuw/qwQJg1ADHPwR+bcOt96+APs7MvD6mDfHDFps4xVGdn6zSHNHcY081vh47DndQe/gzHLwuXErktjTQuroc4kAdTdvAVsrU2VWdVheA5s1BMETmNl5uXtXh8U3CV2vI64cFlnFSXJjq9H1uDsOBp8HghC7W4Zq7f0K/AZvL6ib0f28/s2/bCH2twy5v0D8Bm8vqD+ALcNWN/qNR+a8N4v6MX4DN4L6nOVqDmOLXagkHxBhejGSkrRyyi4umVgK1VqyTNsl21Komm2QDHJZZsuLHKrNMeGc1aNhR4StbiB1YBInNwGXPwXNLtDBFXfobLgsz6GYOArbBOGnAznrGwsfzbhrq39CvwGbw9RV+Bbc1pcKbXwJhj2uJ8Bv4Jx7U4Zy0uVfFClwOaKujnHMI1EL0E0+RyNA0Hkkwo6C6eELbXZjp0hhOhe4NnvAOZHeuPL2nw+BuEnv8Lo6IcHkyLUlsZj+AreNWU/Ko1Yx7Y4Rvdv6Gn5fm/rI/oZbj+zZll89uSufavCuVp+gLs/N4L6mHeNxWmjHWU4ByBbBbPiN/Faw43Fm9x8iMnDTxK5Lb6mEacZbrRSsn2atGfd1OSMgfJRKSUb6+BpGNna3Zd1PIlon0heHxXEZNT6HpYYRrkd5Z6QbSY0CIaD65n7yvLy3I0jzBi46T26lSL5AEnz5Ad6UoNJb7mVnm3FHF9atiZQcaVAZY2ktqVe/FqxvIDMjU5wPpOC7MhiSllVy8Oi/l/1eJjK5b8kcT1WkDVexqM9Pkbq4+HHVu0QcOwGrtZPhlqtscbVs5c2VRemPMza/CTXDsS0jaZ+9aOCexis0ubOZt1hdRfheJB9CFlOLR0Y5qR6t0bcUOqj5NXcXPaJpPOr2gZtcd3DWdSO8En5ftPg1D/lgtuq8H4/D9/idmPbZnfryaNBwnYj5IX6IeITY+Dok1Y06OyPH7jgmhlTzaG1XMzgiSWiTkdF5K7IUbanz8UmejPtFz5x9TYt6Vngz8lZ/UMa/wrn/ACGLVd4/p9xvtF17vqVXl0nOrMwOswHaDpFU4mlpBBYcPZMhVh7EWKWpT9P133Ilx1qnH1KLb0iOqUXUTZ8nNLSXVS5xnc9nMjVaQ7HUcqya915fccuP1RcdPqcS587L26enyPObIhykdnR2XjCqykyk1uENES1xaTnPLJefLs+EsjyN235HcuOaxqGn1N9ZulF7QAbM10ACTUM5c+yuOfYkZP36+X3L/MNq0+v2Mg9LlXay0x/OZ+5Zf/Pw65H9BfmD/wCvqYdPpKIaQbNilxcSazjmdYluQ7gtp9jKTT1+iHHtDTyj6nE2y0Y3ufEYnExMxJJXsQhpSRwSnqbZSFoo3sRZvLn4i+TsLRSDjJIcXaEgDSO5cfEcH3k7cjrw8V3cao3Fi6QalNoaKWKABLqhJIAy1afjzXHl7Jjkd6vQ2hx+mNafX7GU/pMeWlpoAgiP8znlnDc1j+SRTTU/T7mi7S/8ev2IXd0iupNA6jHBJl1Y78hhyWmXsRZX7/0X3J/MK5R9TnL1vNleq+qaeDG4uwtcCBJkgSF3YcEsUFBO625HHOanK3+pVRr0WkHC4/zgKpQyPa/QlaV/s7Gt0h4uriz4RTIIa2rhBgQASBpGy8tdkON3Ld+XzO78ba91beZlO6TDH/TCcv2o/tWb7B0unN/T7lLjnfur6mHaekFzhh6jCNMquenPDr3rSPY0YvVrv5A+P6afUptnGTalJ1I2fJw+capc6ZkOPZzK6uH4LuZ6tV/L05ky4tSho07fE55lVk5sJ/n/ACXY0tPmcvs+HqbK7CzECARy7QWOWE449Vr9zaLi5Kju7paMIJmPXmvC4mORw11sejHpR2dq5Dw9F5ud18B4yli5JbboqRg8TOIsdoP/AMceTiGn2Erp4CClxELfWzKTPNb6p/q6RAhrhrscyMvu8l9bhjPdizO0qMM0x1hjZmXpr96S3ir8SZbNvwR7FZrqw2WKUB2ABvdDYbny0Xp10PCs4fgq5bd8rPyhjwwYsZceySdMB3z5bLKCd7nTl0adhdKVgax1MgQZIjLYDPLvIRm5fMXDLdmhuN5pOpVxkabw7y0cPMSPNeZniskZQ8VR6sYXGz3SmV8eimTko2FsfJQX6OeGZdioNc4AiZQB9L0OjG52tDn2VmgnFUqjMxr24HJAFd5dG1zYCBZm03OIDXNfUccR0EY8x3IAx7o6L7uYHddZGPzkHHVGRygDHI0Gu5KANbx/wzcVjsj3mzUxVc0tpNbVqYsZBh0Y9BqfBAHgFUN2CAFSpyUAey8KdGdnrWejUfRkvYx7nF7/AKR2aHDMZ9xyQB0lLoxuxgPW2cHMhoD6uWepdiz0PqgCwdHV0f6Ub/tK238+qdAeQdJNx0LLbHU6DMDMLXAS4xibJzJKael2hHHuScrdsY2iUN3uB6N0c8N2K1ACvRe92MiQajW4Q0HMtMakhIDv7R0e3QAcNl7WgmpWIJnSC8T+YTQGI3gq6Rl8jxuxRDatU4SQBD4dkRrA55ahOhWWV+Crpa1z3WRtNsSS+rWAbAnd+XmikFnjXEZsxtNT5MzDSxHAAXRAyykznr5qRmNd1FjqjQ4SCRIzzz7kKrA9e6QeELrs1lqGlZ8NUBha7rKhwy9o0LiDlKb3YuR42WhQyjKslAEiRkiW2wJq9z27iXga7KViqVaVnDajaJdPWVZDg0GcJdCbiqsFJ8keKOYPaoosybG8gyDHolSkmm6RrGTR1dzW+oSAXZcob7l4vFY4aaS/U78M5Pmz062aleBlTcqOnHyKoXNkg4OmxtkLZTY6k9lQwxzS0ncToQNzMLfgMWbLnjHBG5Xt9/BeLMc2WGOLnN0kef2myhlLA/tAEnSAF+q8L2Rjww153qfOv8V/P6eR89xPauTNLu8Gy5X1f7L+7mmrWeAKmfhtnsvmpLVFvoz6Fx0UdlwdxsKLRSrAuaBDXDN7Rs0j6Q2ldGPOkqkefm4Nt6sf0OgvTj+yhmKlic4fRwlmf+4kQB6rR54JczGPDZW6qjza+LwrW6rjdpo0DJrRyE9+pPdpC5cmRvdndhwadl9TLtVnGCjZ6ZxOqOa08gXQMvAZk+5crmopzfTc7p7Rr5HsNLSF8fZkycp2xHyYF+jnhmXY/nBAH0dx5XwXZWa4a0WxuJlo1PdHf+DEfP8Ac97VLNVbWouwvY7ECI58tD4JDPpfhDiajellkhpOHBXpEAjPWQdWO2PiNQgDxDpO4CNgq9ZSBdZqhOA6lh3puPMbHcd4KAONu6569d+CiwvdEwCBkCBuRzCxzcRjwx1ZHSLhinN1FGRbrlr2Z7W16eAmCBiacpjVpKWHisWZXjlY54p4/eVH0zwXTaLss8QCbOAR9YlhAz2MrczPCLX0eXw10fJnjFkP11Lu5VE09qAqb0cXyZizPyyP66ll4/rEgI1ujG+AMTrKfE1qB/8AIgDmmXVWNXqQwmpiwYZE4piNY1UzyxxxcpOkVGLk6Rl27h+1UGh1WkWNJiSWnMgmMjkYBWOPjMGV6ccrf98i54MkFckeu9DVnebMS0MnrXQSHEyG0++AM+U8o1XSnsZM8w45LhbrSC8kitUE5iSHkExOWYSA57rHDc+pTUq3ARJOpJ8TKQGxuy4rTXBdRpF4aQDBblOmRK58vFYsLqcqs1hgyT3irLrJZX06zW1G4SCJBjeDseS1jljNXF2iJQlF00e9dI9xVbRZXChLnmIYMAL+22TJjQTv9FWyTyIdG97H/wBm7+pRH/elQFtm4DvPEAbI7LX9ZRIHiQ9XJt9BbHt/FbIuytiADvk556lsGJPfCht0NI+erHdlWs4ikzER3tH/AOiuXLnx495ujeGOc/dRO02CrReGVGlroBiWnXwnkVMM2LNHVjdr5lvHPG6kjd3PMgfj+S5eIhaOjDJHp4r4wCvm88ado74MjUrBolx/PwS4Hs/Px+dYsS36vol4v+79DLiuJhw+PXP7t+CNVanuqZnTYbDL7+9fq3ZfZfD9nY9GJbv3pPm/4Xgv1e58XxXG5OJlcuXRdF/LNTa7OHOa0iQciDuM5CrtjP3PA5Z+VfXb9y+zYa+KgvO/puZ1bhMwHUKpZkOw8Y2+/wBQdV+aw7ZlVZI35rb05P0Ptdupr38DVjlNPbMOdHoWrofa3DpJq7+X8iai+ZOh0f1Ae0+nH8zvZhH3rOXbEOaT9F+4eybOnwP2cJrkDk2nAy/mWM+2JSfu+v2HqS5G0uPhWhZ3dZLqlQAw+oQcM5HA0ZN8czmc1y8Tx2TNHTyXgv79iW+rOgBXCJjxIA+Tl+kHhFlKpBBiUAdnfnHnX0X0RSwB/J06AZZ7SJTsVHF40hm74U4oq2Gu2tSzjJzJhr27sd3H2GDsgD0e/emKzWmz1aD7HU/WMLQXPYcLo7LtNjB8kNdAPP8AhbicWOsavV4paWgSBElpn/6+1cHH8A+JxqF1vZ08NnjilbVkuKuKRa6jH4C3CIgmd5yS4DgPw0XFuy+K4mOaqVUdlcfS3ToWajR6iqTSaBiD2QSJzgjLI/GS9BHGTr9MpcSeqfO0lmRgRt3FAGCel60mZxQREANbB5yOWUfinsIvb0vvg4mOcThGZbEDXzgn4yRYUcNYb7DLULQWkgVeswggH52KJXNxGF5ccoJ1aZrimoSTZtuLeMm2tga2m5kOBzIOgfy1Pb9i4eA7NfDSbbv+r+Dr4ji45IaUjfcDdKNKwWbqHWVzzjLsYqNGoAAwlvdzXqpUcBw9/wB6C0WitXDS0VKj3hpMkB7y4Ce6VTvnQupqipGSaUxWdXwrxYLJTqMwFxqFsEECMM+9ebxnZn4qcWnyO3huLjiTtM196XgatU1Q0icPsaG/guzBwrxQUH0ObNxMck2z0K4emHqmBtosvWVGgN6xtQNLgPrtc3XvG+y3Mkzc/wDrjQj/AKJ/L/NZ/aitrsdkaXTPQJj5HUidTWZ47NO6tY5STcVZMpUuRoONuk2rbGdRTpdTTObu3ie4A5A5AAaGO5ZJalszSUXF+0qOe4Z4jNleXYMYIgiYXncd2f8AiVpUqo6MHELHzVhfV9/KKvWBuE4Q2JB0nPRbcHwkeFxKKdysM+ZZZXRZdVeHTl6pZsUphDJR6bdLgaLXzrIPcQfgrwMvDzlmWKCuUtl8/wC/I9COWMYOcnSRVhNR2fkOS/Q+y+zsfZ/D93DdveT8X/C6fdnx/H8ZLisup8lyXgv5fX+DLtNIMbhGupK7otydnI5UqOOvy8HUqjMAaSScnAkQBOxG5C8vt6CycMsTdW+nl/Uev2JC8speC/X/AEbGhxNaMhhpej/7l8LLsfD0k/T+D6tRbNjZr8rn5zKY+0B7XKH2Pi6SfoV3e3My6t9VBoxju8OMJPseMf8AN/QFjsDfdYZmmzD/ABOHkD+SH2TCtpP6A8fmW0+JqZyFOpi5DB9+LNc77JzeKr5/wT3bJP4gj9i/zIHvTXZM+s16j7pi/wAfd+4P2x7k/wApf/dfQO5Z82r7M+eBADQAkACABAAm2AJACABAElT5iEUn4DAIToAhIBhOhAUNvkwGk6vYYJCJNVwTbVATx/EBJ/EVBKTqxk5Rab2HVGZd1cMdiLQ6PonQzzXRiUHilcmnXQxzQc46U68yD6kkn4hcitI3bb5k2FMRk0XJ1HT5gbq7JJCcYamTKVI9NueyObRAdli7UcgQNe85exelwnB48eTvq9qq+X3ODieKm4aL2uzc2OyhoxFds526OCKpamau8q2q3xxpGN27ORoU2V7XheRDac5mIxkifIMHqvJ7Z5xj4L9f9H0XZKcYSkur/T/ZXwdRqWitUbTcD1YILyJBzIBbnnMSvnp+we7HPsbO5beKtubRe3BUYXB4A7MtGHKfXzUTVLV0LnnTjpNtxtZn2cCs0/qnOaHtgDC7MB89+TfTymL1IMWZRdM2/Ct1l4NWsI7DcDeQfmSZ+kRGmiT3i/Izy522kuRzF1Pcaxp06eNzHljjBwNwuLQXkbZeZ80/M6ZZoqCvm0b+/rrdZ2Cs94e0PAeAzAIdkCO0d49VKe5GHPqlpNH/AI1S5exUdmlHhK9Y+VBAAgATAEgBAAgATXPcBlHXYBJAMJp1yASQDBVJpdAApNUA2oW24AkAwFUY20IZUsByqlNvmFDCnoMmwprS0759BNWWhsyVLVbDjXKwb4pp7D2LGBEb5JC2LQFMrvcaozbKwTqtIJEtne8F3SHvxOzaztHLXkD8bFd+HFVHFlmd/Z2YnTsu1vSjzpPXIuvCrDYU4o27IyvoclfFpgFd8VSIgmeV35SeLQ/Hvm3cFpyEeh8wV8vPjFxDlnhye39+W59XjwPBFY3zM7hbiapYnPdTaHYxuSAPQZrhlhWSrdHQpUIcQ1PlTrWAA9xBIBIGTWjIn+EIeNadIKW5ur64+q2yzOslSk0daWNx4vmxUa6YgZy0brOGDRLVZTmmqPZrJe1IYml7A1sMkuaADsMzquXVtSXND07nO9GNNoZbqjji668KsEGRhY8RB5SStpyW0fJGaT5/E2nSm/Bdloc3VgY4T3VWfmlGMdaj5hHI4e0jz/8AQq0f6hn2PzWlxNPxmQ8bXoHnAgBp0AkgBAAgAQAIAEwBIBhAAgAAQAIAbVSaV2gBSAIAaAGEgGEwJNVRTvYRkMk9kJ5JR6Im0t2BhZluuhJpVp20iTJptS0+1Qb1Zt7taJC6oY0mYzk6PVrho9XZm7F/bPnk32R6r0scVexwZXsbqy2hoanODbOXUkjX3haplb44UZPd2cnbquJ3hn8FeV29xvccP3UX7U9vgur/AGXzPb7G4PvcveSW0f16fTn9DItfDLbVZ4MNqtl1Nx072n/aYHgQCvz/AA8fPDlr/Hqv3+KPqs2JSXmcA+5KjXmm4YXg4YOx+N19JDNCUNUd75M4u6fUlftxPsr2tc4OD24muAgGMiI7pHqE4ZFIhxNRUYtCWioUwcgB6Kl5kvc7DhXi60WKg6gynTqMNTrBiLmlp7IIEbHCPUrmy4VOWpsuCaNnxN0kVbZZX2Y2ZrOsAD3dY50Q4O7LcI+qNSiOFRnqsTtqqNb+mFv+tT/pn3q9MR90edLrOEEACABADhVp2sAhKgGQnTSAipAcK1FeIApAEcgCE1FsCU5JyjFcmIipGNVLdiGhRt1EAhS4u6GEIpiJAI0OrCwRQyeGElfQNqJsKtZJKOkl8xhTzY2XsAVqFT9rkTZaXSplBRlQR2Njdz4IXViW9meRbHrlirB1npOH7to8wMJ9oK9TEefljtYNrFdNHG4Mptb+ySTAG6yyZVBHRiwanRhXdZhVzG2o5fkvz/teWSWWWWb58vJeH958z6/gVGGJQiq/nxOhayMl8tNbnpIwb5uhlob2snAQ141HceYXVwnHTwbdPAzlBM569g59J1CvTBqNALHAZH/cDtI+Nh9HgzRmtcGYd0zX8Y8L0mWSjXszc29irBJxDBi6wg8iHSR9Ycl1Y5t3ZySW9HJ3JdNeu9zKNN1QtaXuwx2WjcyfQanZaykktyUvEsZaqcZmfIpUaprqZIp1Ot6ltmqGr+7wO6zTF8yCdDPgjarsNaW9GV8gtn+gtH9Gr/Yo1LxDvF4HALus8waKAE9k9wEkA0NgATTdMAlF2AIrcAQmuYAh77gND35CBDroAJ0wEkMYQrewDCqPVCGSqk1F0twQynPZ+z6CQgFnGNurGTad1pBpPV+omNRGFptsBsTj7S0t0DJhS6T23Asnn/wqm5cpf6BF7QB5rSUI7P8AqRKMmz1AD8Zoi69olqzvOEOJabW9TWOFhMtds0nUHu3XdjyLmjnljOgtF52Vgk12OHJjg8+g/FbPP0MliSOVv2/TUMN7LBoJz8SdyuPi3StM6sMKdsruW9n03hzddNdQdj3L5zisKyR3PXwzo9Asl4sqAEZE6jl5r53NwzR6MZmS0rz5Q6G1plNtsjKjcLsuThq093uWnD8RPBO1/sKNOKNSmx9neA5tQENO0OGEweUHTbzX0vD8RDPHXExlhTex1vBIs9OiKVFgBa1ocYGJx3xHUmZ9VvNt7M4pwakcbwRwpZBWqV6/adRq4qTJhvZc4hxH0oIblpz1TeZ3RWTG1FV1R1dnsLW3zUrx8+yRPeXME/ZYjU9FEaP+O/M3n+K0/ghc+4aWfIq9w84IT0sBJACAGimAI5gCQAqYAhJgAKqMny6CHKlvwAcK9HsKQEVKV8hjARXiIadxYBCTiAItWAwqpqO3UQ1NJcxjCtKKVv5CHKHJX5BRJVKMOa2QEgVOuPPl4BRJiWJJz3Bl4dP5LenJudfGieQ21M1hrblaKovZWPNXuo22TRb8oMIlNuN8hqJIWgoUqjv1LSLqNpK4csLVnRCVG9uy93NhcE8MTshkO2uO/Kb+y84TtPzfXZePn4WuZ1Rl4HQOpGOY2Xl5MUqo2jNFdWk1zcLxLfaO8HZLC8mKeuJT8jFpWFzC4sqluIQcsyO+CPXIr1X2tNRTlDd+f2IlCMuaKaV0NH051ywSBOsSdfco/N5dIev2KcdqaMh1lkg9c6QImJdAEAYnEmFK7Yn0gvr9iVjVVQfIW/vqn2vzWv53P/pEXcx8EfOC+uVnzoItgCYAEJ0AItgCQAVUnuAAoUqdsATra+ghgIUXosAATWJ6VILGCmnTpvYCKz3GOVSbSqhBKanW1AMKkt9QDSrVC/AQApJuMRgk607XYEgqSnPkLYGhStK+IyRK0lOvZ6Cok0og5J6vECeJOclqSfQEMFQ5Sca5ASDlDcatc/QCbSqUapS6+gywvWmVxu18ASYArFq1aKRNj1Khr2LToyaVqIWEsTTNYzNhZ7zK58kNSZ0QyHRXRxRUpCGulv1XZt9Dp5QuDLwsGuR0rJZ1Vi4tov8A8xpYebe0301HtXDk4KVWaqXgbahaqNT5lVh7pAPoc1yy4Zqm1uV3lF5oFc8sBSyIh1RVd3UdI9aI9R8Ssu6Y+8PmlfoKb6HzQKqAFIAEIAVc92ICiVOQxlOVJ7chCSUtqAattqPxAQURb3QxhP2mq6CHKrVyoBKVvs+QBKbkrTACpb1OwAJdAJuEZLVqSWmhXe4K3TaiwEsklq35DJeC0lu6i9hElWRNrUkkIClOFJJeA7AFRXspoBgqVK1TAm0hXB497DcbSiOztcwJtcmmpKm+vMKJErN44qNp2xoeNOeRtIpIeJZS+FFIYepTfTmUWNqlOUbqNblJmRRtZCmGNNcjRTZl0ryIWLxSUV4I1WYyWXsuaWHfxNY5zJoX6W/Ne9vg4j7isvwqaqkX3yMn9KK21ap9t3vSlwcedbjWZC/Sat++qfbf71f4ReAd+vA86Xqo8YEACOgAE48xAU58xgEQAApAk5aZveERcpycwQKRgnewEitZe4hdRFRP3UA26rTGk57gxHVRk98ESprbhFuxSBynI9vl+4ICpm2AllboY0+gEltJ+wvmISylzYxlEvdXzBEh+Cc/e+QDCzj0Gy1d790hCXPLn9SkS5eCUl7Efh+4ICoy7NUUiTd0QfsyGNiMZQylk95AiQUPmykNpUWUTBSaGWDRVS7n5j6iBWfUomtwP//Z"
    },
    {
        "id": 71,
        "titulo": "REMATCH",
        "genero": "Ação, Multijogador",
        "plataforma": "PC",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2890910/header.jpg"
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
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3002620/header.jpg"
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
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/759650/header.jpg"
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
        "image": "data:image/jpeg;base64,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"
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
        "id": 94,
        "titulo": "The Witcher 3",
        "genero": "RPG de Ação, Mundo Aberto",
        "plataforma": "PC, PlayStation 4/5, Xbox One/Series X/S, Nintendo Switch",
        "image": "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f"
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
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2758170/header.jpg"
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
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2635910/header.jpg"
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