let dados = [
    {
        titulo: "Capitão América",

        descricao: "O Capitão América é um dos super-heróis mais icônicos da Marvel Comics. Criado durante a Segunda Guerra Mundial, Steve Rogers, um jovem franzino, transforma-se em um super-soldado graças a um soro experimental, adquirindo força, agilidade e resistência sobre-humanas.",

        link:"https://pt.wikipedia.org/wiki/Capitão_América",

        tags: "Steve Rogers, Vingadores, Estrela da Liberdade, Patriotismo, Super-herói "
    },

        {
            titulo: "Homem de Ferro",

            descricao: "Tony Stark, o Homem de Ferro, é um bilionário, inventor e filantropo que, após ser ferido em um sequestro, cria uma armadura de alta tecnologia para salvar sua vida. Sob a identidade do Homem de Ferro, ele se torna um super-herói, usando sua inteligência e recursos para proteger o mundo. ",

            link: "https://pt.wikipedia.org/wiki/Homem_de_Ferro",

            tags: "Armadura Mark I Repulsors, Vingadores "
        },
        {
            titulo: "Thor",

            descricao: "Thor é um deus nórdico, filho de Odin, e um dos Vingadores. Ele possui super força, durabilidade e a capacidade de controlar o clima. Seu martelo, Mjolnir, concede a ele poderes ainda maiores, como voar e manipular a energia. ",

            link: "https://pt.wikipedia.org/wiki/Thor_(Marvel_Comics)",

            tags: "Deus do Trovão, Mjolnir Asgard, Vingadores, Poderes divinos "
        },
        {
            titulo: "Hulk",

            descricao: "Bruce Banner, um cientista brilhante, transforma-se no Hulk, uma criatura verde de força inimaginável, quando fica furioso. O Hulk é uma representação da raiva e da força bruta, e suas batalhas internas entre Banner e a fera interior são um dos aspectos mais marcantes do personagem.",

            link: "https://pt.wikipedia.org/wiki/Hulk",

            tags: "Vingadores, Gigante verde"
        },
        {
            titulo: "Homem Aranha",

            descricao: "Peter Parker, um adolescente nerd, é picado por uma aranha radioativa, ganhando habilidades sobre-humanas como força, agilidade e a capacidade de aderir a superfícies. Com grande poder, vem grande responsabilidade, e Peter usa seus poderes para proteger Nova York como o Homem-Aranha.",

            link: "https://pt.wikipedia.org0/wiki/Homem-Aranha",

            tags: "Teia-Aranha, Amigão da vizinhança, Vingadores, Super-herói adolescente"
        },
        {
            titulo: "Viúva Negra",

            descricao: "Natasha Romanoff, a Viúva Negra, é uma ex-agente da KGB treinada como assassina. Ela se juntou aos Vingadores e se tornou uma das suas integrantes mais valiosas, utilizando suas habilidades de espionagem, combate corpo a corpo e inteligência para proteger o mundo.",
            
            link: "https://pt.wikipedia.org/wiki/Viúva_Negra_(Natasha_Romanova)",

            tags: "Viúva Negra, Espiã Assassina, Vingadores, Habilidades de combate"
        },
        {
            titulo: "Wanda Maximoff",

            descricao: "Wanda Maximoff é uma mutante com a capacidade de manipular a realidade, usando magia do caos. Ela é membro dos Vingadores e tem uma história complexa e trágica.",

            link: "https://pt.wikipedia.org/wiki/Feiticeira_Escarlate",

            tags: "Feiticeira Escarlate, Vingadores, Magia, Mutante"
        },
        {
            titulo: "Pantera Negra",

            descricao: "T'Challa é o rei de Wakanda, uma nação africana tecnologicamente avançada. Ele possui habilidades sobre-humanas obtidas através de uma erva sagrada e é um mestre em combate.",

            link: "https://pt.wikipedia.org/wiki/Pantera_Negra",

            tags: "Pantera Negra, Wakanda, Vibranium, Rei, Super-herói"
        },
        {
            titulo: "Venom",

            descricao: "Venom é um simbionte alienígena que se liga a um hospedeiro humano, concedendo-lhe força, agilidade e outras habilidades sobre-humanas. É conhecido por sua aparência monstruosa e personalidade complexa.",

            link: "https://pt.wikipedia.org/wiki/Venom_(personagem)",

            tags: "Venom, Simbionte, Anti-herói, Força"
        },
        {
            titulo: "Ciclope",

            descricao: "Scott Summers, o Ciclope, é um mutante com a capacidade de disparar raios ópticos de seus olhos. Ele é um dos membros fundadores dos X-Men.",

            link: "https://pt.wikipedia.org/wiki/Ciclope",

            tags: "Ciclope, X-Men, Raios Ópticos, Mutante"
        },
        {
            titulo: "Deadpool",

            descricao: "Wade Wilson, o Deadpool, é um mercenário com um fator de cura acelerado e um senso de humor sombrio. Ele é conhecido por quebrar a quarta parede e por suas habilidades de combate.",

            link: "https://pt.wikipedia.org/wiki/Deadpool",

            tags: "Deadpool, Mercenário, Fator de Cura, Humor"
        },
        {
            titulo: "Wolverine",

            descricao: "Logan, o Wolverine, é um mutante com garras retráteis de adamantium, um fator de cura acelerado e sentidos aguçados. Ele é um dos membros mais antigos dos X-Men.",

            link: "https://pt.wikipedia.org/wiki/Wolverine",

            tags: "Wolverine, X-Men, Adamantium, Fator de Cura"
        },
        {
            titulo: "Professor X",

            descricao: "Charles Xavier é um mutante telepata poderoso que fundou os X-Men. Ele luta pelos direitos dos mutantes e busca a paz entre humanos e mutantes.",
            link: "https://pt.wikipedia.org/wiki.Professor_X",

            tags: "Professor X, X-Men, Telepatia, Liderança"
        },
        {
            titulo: "Magneto",

            descricao: "Magneto é um mutante com a capacidade de manipular metal. Ele é um líder carismático que luta pelos direitos dos mutantes, mas muitas vezes por meios extremos.",

            link: "https://pt.wikipedia.org/wiki/Magneto",

            tags: "Magneto, Mutante, Magnetismo, Liderança"
        },
        {
            titulo: "Doutor Destino",

            descricao: "O Doutor Destino é um cientista brilhante e um dos maiores inimigos do Quarteto Fantástico. Ele utiliza uma armadura mágica que lhe concede poderes cósmicos.",

            link: "https://pt.wikipedia.org/wiki/Doutor_Destino",

            tags: "Doutor Destino, Vilão Magia, Cientista"
        },
        {
            titulo: "Galactus",

            descricao: "Galactus é uma entidade cósmica que devora planetas para sobreviver. Ele é considerado um dos seres mais poderosos do Universo Marvel.",

            link: "https://pt.wikipedia.org/wiki/Galactus",

            tags: "Galactus, Cósmico, Devorador de Mundos"
        },
        {
            titulo: "Thanos",

            descricao: "Thanos é um titã louco obcecado pela morte. Ele busca as Joias do Infinito para eliminar metade da vida no universo.",

            link: "https://pt.wikipedia.org/wiki/Thanos",
            
            tags: "Thanos, Titã, Joias do Infinito, Vilão"
        }
    ];


