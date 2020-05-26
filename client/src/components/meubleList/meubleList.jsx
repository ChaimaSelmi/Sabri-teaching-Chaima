import React from 'react'
import MeubleItem from './meubleItem'

const meubles = [
    {
        link : "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg",
        name : "Salon",
        price : "1050 TND",
        color : "Blanc Salle",
        id : 1
    },
    {
        link : "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg",
        name : "Salon",
        price : "950 TND",
        color : "Gris",
        id : 2
    },
    {
        link : "https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497_960_720.jpg",
        name : "Comodino",
        price : "350 TND",
        color : "Marron-Beige",
        id : 3
    },
    {
        link : "https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg",
        name : "Salle de Conférence",
        price : "4800 TND",
        color : "Beige",
        id : 4
    },
    {
        link : "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg",
        name : "Salon",
        price : "1050 TND",
        color : "Blanc Salle",
        id : 5
    },
    {
        link : "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg",
        name : "Salon",
        price : "1050 TND",
        color : "Blanc Salle",
        id : 6
    },
    {
        link : "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg",
        name : "Salon",
        price : "1050 TND",
        color : "Blanc Salle",
        id : 7
    },
    {
        link : "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg",
        name : "Salon",
        price : "1050 TND",
        color : "Blanc Salle",
        id : 8
    },
]


const MeubleList = () =>{
    return(
        <div className="card-columns mt-5">
            {
                meubles.map((el,i)=><MeubleItem key={i} indice={i} element={el}/>)
            }
        </div>
    )
}

export default MeubleList;