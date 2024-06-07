export const listadoProductos = [
    {
        id: 1,
        category: "Zapatillas",
        description: "DISFRUTÁ DE CADA PASO CON ESTAS ZAPATILLAS DE RUNNING CREADAS CON UNA HUELLA DE CARBONO MÁS BAJA QUE LA VERSIÓN ANTERIOR.",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/822e377bec914fb5ac0c83839fbe65b0_9366/Zapatillas_Supernova_Running_3_Negro_IE4345_HM1.jpg",
        name: "Zapatillas Supernova Running 3",
        price: 148999,
        stock: 5
    },
    {
        id: 2,
        category: "Zapatillas",
        description: "ZAPATILLAS. ZAPATILLAS DE MÁXIMA SUJECIÓN PARA TUS SALIDAS DIARIAS A CORRER",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64e93608691e40edbafdbc656acdbbe6_9366/Zapatillas_Solarboost_5_Naranja_IG7387_HM1.jpg",
        name: "Zapatillas Solarboost 5",
        price: 235999,
        stock: 4
    },
    {
        id: 3,
        category: "Remeras",
        description: "REMERA SPRT ESTAMPADA UNA REMERA PARA USO DIARIO INSPIRADA EN LOS ARCHIVOS DE ADIDAS",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/366ec7d1560e4abf813c8bc97e15fe6d_9366/Remera_Argentina_Estampada_24_Blanco_IU2149_21_model.jpg",
        name: "REMERA ARGENTINA ESTAMPADA 24",
        price: 45999,
        stock: 2
    },
    {
        id: 4,
        category: "Remeras",
        description: "CELEBRÁ LA TERCERA ESTRELLA CON ESTA REMERA ANIVERSARIO",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3422877544ac49af80257b6c612134f0_9366/Remera_Seleccion_Argentina_WC_Aniversario_4_Blanco_IV1930_01_laydown.jpg",
        name: "Remera Selección Argentina WC",
        price: 74999,
        stock: 2
    },
    {
        id: 5,
        category: "Buzos",
        description: "CAMPERA ANTHEM INTER MIAMI CF DESIGNED FOR GAMEDAY",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6024c0c15f1d498292aa84a3f9e15947_9366/Campera_Anthem_Inter_Miami_CF_Designed_for_Gameday_Rosa_IQ0709_21_model.jpg",
        name: "Campera Inter Miami",
        price: 129999,
        stock: 7
    },
    {
        id: 6,
        category: "Buzos",
        description: "CAMPERA DEPORTIVA TIRO SELECCIÓN ARGENTINA 24",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99b4dc2bb69c4b9aa36bec3c6fd0192f_9366/Campera_Deportiva_Tiro_Seleccion_Argentina_24_Beige_IQ0829_21_model.jpg",
        name: "Campera Selección Argentina",
        price: 114999,
        stock: 7
    }
]


export const getProducts = (idCategory) => {

    const listado = idCategory ? listadoProductos.filter(unProducto => unProducto.category === idCategory) : listadoProductos

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            listado.length > 0 ?
                resolve(listado)
                :
                reject("No hay datos")
        }, 500
        )
    })
}