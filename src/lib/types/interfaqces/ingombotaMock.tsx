import { Municipality } from ".";

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
            id: 0,
            uuid: "",
            title: "",
            image: "",
            description: []
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
        heritage: [
            {
                id: 1,  uuid: "",  title: "Patrimonios", image: "/images/img1.jpeg",
                description: ["Primeiro"],
                heritages: [
                    {
                        id: 1, uuid: "PT-0001", title: "Cidade Alta", image: "/images/img2.jpeg",
                        description: ["abriga instuições como:" ],
                        locations: [
                            { title: "Palacio Preseidencial", description: [], id: 0, uuid: "", image: ""},
                            { title: "Assembleia Naiconal", description: [], id: 0, uuid: "", image: ""},
                            { title: "Fortaleza de São Miguel e Jesuitas", description: [], id: 0, uuid: "", image: ""}
                        ]
                    },
                    {
                        id: 1, uuid: "PT-0002", title: "Ilha do Cabo", image: "",
                        description: ["é famosa por suas praias e pela igreja da Nossa Senhora do Cabo, amais antiga de Angola"],
                        locations: [
                            // { title: "", description: [], id: 0,uuid: "", image: ""},
                            // { title: "", description: [], id: 0,uuid: "", image: ""},
                            // { title: "", description: [], id: 0,uuid: "", image: ""}
                        ]
                    },
                    {
                        id: 1, uuid: "PT-0002", title: "Musues", image: "",
                        description: [],
                        locations: [
                            { title: "Museu Nacional de Antropologia",description: [],id: 0,uuid: "",image: ""},
                            { title: "Museu das forças armadas",description: [],id: 0,uuid: "",image: ""},
                            { title: "Museu de História Natural",description: [],id: 0,uuid: "",image: ""},
                        ]
                    }
                ]
            }
        ],
        culture: [
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
            { id: 0, uuid: "BRO-0001", title: "Cidade Alta", image: "", description: [] },
            { id: 0, uuid: "BRO-0002", title: "Cidade Baixa", image: "", description: [] },
            { id: 0, uuid: "BRO-0003", title: "Chicala", image: "", description: [] },
            { id: 0, uuid: "BRO-0004", title: "Coqueiros", image: "", description: [] },
            { id: 0, uuid: "BRO-0005", title: "Bairro Azul", image: "", description: [] },
            { id: 0, uuid: "BRO-0006", title: "Praia do Bispo", image: "", description: [] },
            { id: 0, uuid: "BRO-0007", title: "Mutamba", image: "", description: [] },
            { id: 0, uuid: "BRO-0008", title: "Vila Cotilde", image: "", description: [] }
        ],
        communes:[
            { id: 0, uuid: "CMN-0001", title: "INgombota (sede)",image: "", description: []},
            { id: 0, uuid: "CMN-0002", title: "Maculusso",image: "", description: []},
            { id: 0, uuid: "CMN-0003", title: "Patrice Lumumba",image: "", description: []},
            { id: 0, uuid: "CMN-0004", title: "Ilha do Cabo",image: "", description: []},
            { id: 0, uuid: "CMN-0005", title: "Kinanga",image: "", description: []},
        ]
    },
}
        