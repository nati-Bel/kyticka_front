import './album.scss'
import { NavbarDefault, Footer } from '../../components'
import APIservice from '../../services/APIservice'
//import { useState } from 'react'
import { useParams } from 'react-router-dom'


export const Album = () => {
    const { id } = useParams();
    console.log(id)

    const url = `http://127.0.0.1:8000/api/admin/galleries/${id}`;
    const album = APIservice(url);
    console.log(album)
    
    return (
        <>
            <NavbarDefault></NavbarDefault>
            <h2 className="albumTitle">{album&&album.data.title}</h2>
            <section className="albumCont">
            {album&& album.data.photos.map((photo, index)=>{
                return (
                  <img
                    className="albumImg h-auto max-w-sm rounded border p-1 dark:border-neutral-700 dark:bg-neutral-800"
                    key={index}
                    src={photo.url}
                  ></img>
                );
            }
            )}
            </section>
            <Footer></Footer>
        </>
    )
}