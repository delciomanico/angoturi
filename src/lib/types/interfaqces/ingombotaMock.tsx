import { Municipality } from ".";
const path = "/images/provincias/luanda/ingombota/";
export const ingombota: Municipality = {
    id: 0,
    uuid: "INGBT",
    title: "Ingombota",
    image: "images/image2.jpeg",
    description: [
        "O nunicípio de Ingombota, localizado na provincia de Luanda, é considerado o coração da capital angolana - tanto geograficamente quanto culturalmente.",
    ],
    location: { latitude:  0,longitude: 0,accuracy:  0},
    nameOrigins: [
        {
            id: 0, uuid: "", title: "Origem do Nome", image: "",
            description: [
                "O  nome 'Ingombota' tem raízes no quimbundo. Há duas Intepretações:"
            ],
            interpretations: [
                { title:   "Ingombo + kuta", description: "Lugar ode abunda quiabos",},
                { title:   "Ingombo + kuta", description: "Refúgio de foragidos (possíveis escravos)",}
            ]
        }
    ],
    economyAndLeisure: [
        {
            id: 0, uuid: "ECL-0001", title: "Mercado Municipal", image: `${path}mercado-municipal.jpg`,
            description: [
                "Centro comercial vibrante com produtos locais e artesanato",
                "Ótimo para comprar lembranças e experimentar a culinária local"
            ]
        },
        {
            id: 0, uuid: "ECL-0002", title: "Praia do Bispo", image: `${path}praia-do-bispo.jpg`,
            description: [
                "Praia popular com bares e restaurantes",
                "Ideal para relaxar e aproveitar o sol"
            ]
        }
    ],
    touristAttractions: [
        { id: 1, uuid: "PT-0001", title: "Miradouro da Lua", image: "", description: [
            "Paisagem surreal formada por erosões naturais",
            "Vista panorâmica que lembra a superficie lunar",
            "Ótimo para fotos ao por do sol"
        ]},
        { id: 2, uuid: "PT-0002", title: "Museu de Escravatura", image: "", description: [
            "Local histórico que retrata o passado colonial",
            "Exposição sobre o tráfico de escravos e cultura angolana",
            "Inclui visita ao Mercado de Artesanato"
        ]},
        { id: 3, uuid: "PT-0003", title: "Palacio de Ferro", image: "", description: [
            "Estrutura Metálica atribuida a Gustave Eifel",
            "Arquitetura única e cheia de história"
        ]},
        { id: 4, uuid: "PT-0004", title: "Fortaleza de São Miguel", image: "", description: [
            "Construção de seculo XVI co vista para a  baia de Luanda",
            "Museu militar mirante para a cidade"
        ]},
        { id: 5, uuid: "PT-0005", title: "Rua dos Merdadores", image: "", description: [
            "Rua histórica com comécrio local e arquitetura colonial",
            "Ideal para comprar lembranças e interagir com os moradores"
        ]},
        { id: 6, uuid: "PT-0006", title: "Marginal da Baia de Luanda", image: "", description: [
            "Passeio a beira mar com vista para o ceano", 
            "Restaurantes, café e espaços para caminhada"
        ]}
    ],
    heritageAndCulture: {
        id: 0,
        uuid: "",
        title: "",
        image: "/images/img1.jpeg",
        description: [],
        heritages: [
            {
                id: 1, uuid: "PT-0001", title: "Cidade Alta", image: `${path}cidade-alta.jpg`,
                description: "Centro político e administrativo de Luanda, com edifícios históricos e governamentais.",
                locations: [
                    { title: "Palacio Preseidencial", description: "", id: 1, uuid: "", image: `${path}palacio-presidencial.jpg`},
                    { title: "Assembleia Naiconal", description: "", id: 2, uuid: "", image: `${path}assembleia-nacional.jpg`},
                    { title: "Fortaleza de São Miguel e Jesuitas", description: "", id: 2, uuid: "", image: `${path}fortaleza-de-sao-miguel.jpeg`}
                ]
            },
            {
                id: 2, uuid: "PT-0002", title: "Ilha do Cabo", image: `${path}praia-do-bispo.jpg`     ,
                description: "Uma das áreas mais icônicas de Luanda, conhecida por suas praias e vida noturna.",
                locations: [
                    {
                        title: "Praia do Bispo", 
                        description: "Uma das praias mais populares, com areia branca e águas calmas.",
                        id: 0, uuid: "", image: `${path}praia-do-bispo.jpg`,      
                    },
                    {
                        title: "Praia da Lua",
                        description: "Famosa por suas formações rochosas e vistas deslumbrantes.",
                         id: 1, uuid: "", image: `${path}praia-do-bispo.jpg`,     
                        },
                    {
                        title: "Ilha de Luanda",
                        description: "Uma pequena ilha com restaurantes e bares, ideal para relaxar.",
                        id: 2, uuid: "", image: `${path}praia-do-bispo.jpg`,      
                    }
                ]
            },
            {
                id: 3, uuid: "PT-0003", title: "Museus", image: `${path}praia-do-bispo.jpg`       ,
                description: "Ingombota abriga importantes museus que preservam a história e cultura de Angola.",
                locations: [
                    {
                        title: "Museu Nacional de Antropologia",
                        description: "Exibe artefatos culturais e históricos de Angola",id: 1,uuid: "",image: `${path}museu-nacional-de-antropologia.jpg`},
                    {
                        title: "Museu das forças armadas",
                        description: "",id: 2,uuid: "",image:`${path}museu-das-forcas-armadas.jpg`},
                    {
                        title: "Museu de História Natural",
                        description: "",id: 3,uuid: "",image:`${path}museu-da-historia-natural.jpg`}
                ]
            }
        ],
        cultures: [
                    {
                        title: "Festivais Anuais", description: "Ingombota é palco de diversos festivais culturais, como o Festival Internacional de Luanda e o Festival de Dança Tradicional.",
                        id: 0,
                        uuid: "",
                        image: `${path}praia-do-bispo.jpg`  ,
                    },
                    {
                        title: "Arte Digital", description: "A cultura digital tem crescido, com artistas locais explorando novas mídias e tecnologias.",
                        id: 0,
                        uuid: "",
                        image: `${path}praia-do-bispo.jpg`  ,
                    },
                    {
                        title: "Danças Tradicionais", description: "As danças tradicionais angolanas, como o Semba e a Kizomba, são parte importante da identidade cultural local.",
                        id: 0,
                        uuid: "",
                        image: `${path}praia-do-bispo.jpg`  ,
                    }
        ],
    },
    generalCharacteristics: [
        { title: "Área",description:[ <>Aproximadamente 9,6 km<sup>2</sup></>]},
        { title: "Populção", description: ["Cerca de 370 mil habitantes"]},
        { title: "Limites", description: [
            "Oente e norte: Oceano Atlântico",
            "Leste: Sambizanga e Rangel",
            "Sul: Maianga e Samba"
        ]}
    ],
    subdivisionsAndNeighborhoods: {
        id: 0,
        uuid: "SDV",
        title: "Sudivisões e Bairros",
        image: "/images/images.jpeg",
        description: ["Ingombota é composta pro váiras comunas e bairros importantes:"],
        neighborhoods:[
            { id: 0, uuid: "BRO-0001", title: "Cidade Alta", image: `${path}cidade-alta.jpg`, description: "" },
            { id: 0, uuid: "BRO-0002", title: "Cidade Baixa", image: `${path}cidade-baixa.jpeg`, description: "" },
            { id: 0, uuid: "BRO-0003", title: "Chicala", image: `${path}chicala.webp`, description: "" },
            { id: 0, uuid: "BRO-0004", title: "Coqueiros", image: `${path}coqueiros.jpeg`, description: "" },
            { id: 0, uuid: "BRO-0005", title: "Bairro Azul", image: `${path}bairro-azul.webp`, description: "" },
            { id: 0, uuid: "BRO-0006", title: "Praia do Bispo", image: `${path}praia-do-bispo.jpg`, description: "" },
            { id: 0, uuid: "BRO-0007", title: "Mutamba", image: `${path}mutamba.jpg`, description: "" },
            { id: 0, uuid: "BRO-0008", title: "Vila Cotilde", image: `${path}81859f28-84bc-4556-9311-6dfc58fac986.webp`, description: "" }
        ],
        communes:[
            {
                id: 0, uuid: "CMN-0001", title: "Ingombota (sede)",image: `${path}81859f28-84bc-4556-9311-6dfc58fac986.webp`, 
                description: "Comuna sede do município, onde se concentram as principais instituições administrativas e culturais.",},
            {
                id: 0, uuid: "CMN-0002", title: "Maculusso",image: `${path}81859f28-84bc-4556-9311-6dfc58fac986.webp`, 
                description: "Comuna sede do município, onde se concentram as principais instituições administrativas e culturais.",},
            {
                id: 0, uuid: "CMN-0003", title: "Patrice Lumumba",image: `${path}81859f28-84bc-4556-9311-6dfc58fac986.webp`, 
                description: "Comuna sede do município, onde se concentram as principais instituições administrativas e culturais.",},
            {
                id: 0, uuid: "CMN-0004", title: "Ilha do Cabo",image: `${path}81859f28-84bc-4556-9311-6dfc58fac986.webp`, 
                description: "Comuna sede do município, onde se concentram as principais instituições administrativas e culturais.",},
            {
                id: 0, uuid: "CMN-0005", title: "Kinanga",image: `${path}81859f28-84bc-4556-9311-6dfc58fac986.webp`, 
                description: "Comuna sede do município, onde se concentram as principais instituições administrativas e culturais.",},
        ]
    },
}
        