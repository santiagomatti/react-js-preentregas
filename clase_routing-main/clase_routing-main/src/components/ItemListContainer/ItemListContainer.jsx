import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { getProducts } from '../../data/asyncmock'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { idCategory } = useParams()

    useEffect(() => {
        getProducts(idCategory)
            .then(res => setProductos(res))
            .catch(err => console.error(err))
    }, [idCategory])


    return (
        <>
            <h1>{idCategory ? <>Categoria:{idCategory}</> : <>Pagina Principal</>}</h1>
            {productos ? <ItemList productos={productos} /> : <div>Cargando...</div>}z
        </>
    )
}
