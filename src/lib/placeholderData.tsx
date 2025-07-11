import { IProvince } from "./types/interfaqces";
import { IProvincia } from "./types/interfaqces/provincia";

export const Provincias: IProvincia[] = [
    {
        id: 1,
        uuid: "IGB1",
        title: "Luanda",
        image: '/images/img1.jpeg',
        description: ["Capital de Angola"],
        municipality: [
            {
                id: 2,
                uuid: "IGB1",
                title: "Ingombota",
                image: "",
                culture: {
                    id: 1,
                    uuid: '',
                    title: "A cultura de Ingombota",
                    image: '/images/img1.jpeg',
                    description: [""],
                    variants:[
                        {
                             id: 1,
                             uuid:"",
                             title: "Kuduro",
                             image: "'/images/img1.jpeg'",
                             description:[""],
                             paragraph: [""]
                        }
                    ]
                },
                geography: {
                    id: 2,
                    uuid: "IGB1",
                    title: "Ingobo",
                    description: [""],
                    image: '/images/img1.jpeg',
                    cities: [
                        {
                            id: 1,
                            uuid: "",
                            title: 'Samba',
                            description:["Com uma boa imagem"],
                            image:'/images/img1.jpeg'
                        },
                        {
                            id: 2,
                            uuid: "",
                            title: 'Sambila',
                            description:["Venha Conhecer o melhor de Luanda"],
                            image:'/images/img2.jpeg'
                        },
                        {
                            id: 3,
                            uuid: "",
                            title: 'Sambila',
                            description:["Aguardamos por si"],
                            image:'/images/img3.jpeg'
                        },
                        {
                            id: 4,
                            uuid: "",
                            title: 'Sambila',
                            description:[""],
                            image:'/images/img4.jpeg'
                        },
                    ]
                },
                heritage: [
                    {
                        id: 1,
                        uuid: "",
                        image: "",
                        resumo: "",
                        paragraph: [],
                        title: "",
                        description: []
                    }
                ],
                description: [" "]
            }
        ]
    },
    {
        id: 1,
        uuid: "IGB1",
        title: "Bengo",
        image: '/images/img1.jpeg',
        description: [" "],
        municipality: [
            {
                id: 2,
                uuid: "IGB1",
                title: "Ingombota",
                image: "",
                culture: {
                    id: 1,
                    uuid: '',
                    title: "A cultura de Ingombota",
                    image: '/images/img1.jpeg',
                    description: [""],
                    variants:[
                        {
                             id: 1,
                             uuid:"",
                             title: "Kuduro",
                             image:'/images/img1.jpeg',
                             description:[""],
                             paragraph: [""]
                        }
                    ]
                },
                geography: {
                    id: 2,
                    uuid: "IGB1",
                    title: "Ingobo",
                    description: [""],
                    image: '/images/img1.jpeg',
                    cities: [
                        {
                            id: 1,
                            uuid: "",
                            title: 'Samba',
                            description:["Com uma boa imagem"],
                            image:'/images/img1.jpeg'
                        },
                        {
                            id: 2,
                            uuid: "",
                            title: 'Sambila',
                            description:["Venha Conhecer o melhor de Luanda"],
                            image:'/images/img2.jpeg'
                        },
                        {
                            id: 3,
                            uuid: "",
                            title: 'Sambila',
                            description:["Aguardamos por si"],
                            image:'/images/img3.jpeg'
                        },
                        {
                            id: 4,
                            uuid: "",
                            title: 'Sambila',
                            description:[""],
                            image:'/images/img4.jpeg'
                        },
                    ]
                },
                heritage: [
                    {
                        id: 1,
                        uuid: "",
                        image: "",
                        resumo: "",
                        paragraph: [],
                        title: "",
                        description: []
                    }
                ],
                description: [" "]
            }
        ]
    }
]


export const Provinces: IProvince[] = [
    {
        id: 0,
        uuid: "",
        titulo: "",
        image: "",
        descriao: [],
        municipios: [
            {
                id: 0,
                uuid: "INGBT",
                titulo: "Ingombota",
                image: "images/image2.jpeg",
                descriao: [
                    "O nunicípio de Ingombota, localizado na provincia de Luanda, é considerado o coração da capital angolana - tanto geograficamente quanto culturalmente.",
                ],
                localizacao: {
                    latitude:  0,
                    longitude: 0,
                    precisao:  0
                },
                origem_Nome: [
                    {
                        id: 0,
                        uuid: "",
                        titulo: "Origem do Nome",
                        image: "",
                        descriao: [
                            "O  nome 'Ingombota' tem raízes no quimbundo. Há duas Intepretações:"
                        ],
                        interpretacoes: [
                            {
                                titulo:   "Ingombo + kuta",
                                descriao: "Lugar ode abunda quiabos",
                            },
                            {
                                titulo:   "Ingombo + kuta",
                                descriao: "Refúgio de foragidos (possíveis escravos)",
                            }
                        ]
                    }
                ],
                economia_E_Lazer: [
                    {
                        id: 0,
                        uuid: "",
                        titulo: "",
                        image: "",
                        descriao: []
                    }
                ],
                pontos_Turisticos: [
                    {
                        id: 0,
                        uuid: "",
                        titulo: "",
                        image: "",
                        descriao: []
                    }
                ],
                patrimonio_E_Cultura: {
                    id: 0,
                    uuid: "",
                    titulo: "",
                    image: "",
                    descriao: [],
                    patrimonio: [{
                        id: 0,
                        uuid: "",
                        titulo: "",
                        image: "",
                        descriao: [],
                        patrimonios: [
                            {
                                id: 0,
                                uuid: "",
                                titulo: "",
                                image: "",
                                descriao: []
                            }
                        ]
                    }],
                    cultura: [
                        {
                            id: 0,
                            uuid: "",
                            titulo: "",
                            image: "",
                            descriao: [],
                            culturas: [
                                {
                                    id: 0,
                                    uuid: "",
                                    titulo: "",
                                    image: "",
                                    descriao: []
                                }
                            ]
                        }
                    ],
                },
                caracteristicas_gerais: [
                    {
                        titulo: "Área",
                        descriao:[ <>Aproximadamente 9,6 km<sup>2</sup></>]
                    },
                    {
                        titulo: "Populção",
                        descriao: ["Cerca de 370 mil habitantes"]
                    },
                    {
                        titulo: "Limites",
                        descriao: [
                            "Oente e norte: Oceano Atlântico",
                            "Leste: Sambizanga e Rangel",
                            "Sul: Maianga e Samba"
                        ]
                    }
                ],
                subdivisoes_E_Bairros: {
                    id: 0,
                    uuid: "",
                    titulo: "Sudivisões e Bairros",
                    image: "",
                    descriao: ["Ingombota é composta pro váiras comunas e bairros importantes:"],
                    bairros:[
                    {
                        id: 0,
                        uuid: "",
                        titulo: "",
                        image: "",
                        descriao: []
                    }],
                    comunas:[{
                        id: 0,
                        uuid: "",
                        titulo: "",
                        image: "",
                        descriao: []
                    }]
                },
            }
        ],
    }
]