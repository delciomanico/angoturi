import { IProvincia } from "./types/interfaqces/provincia";

export const Provincias: IProvincia[] = [
    {
        id: 1,
        uuid: "IGB1",
        title: "Luanda",
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
                        uuid: ""
                    }
                ],
                description: [" "]
            }
        ]
    }
]