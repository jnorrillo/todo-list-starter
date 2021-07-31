import React from "react";
import { AlbumItem } from "./album-item";
import styles from "./album.module.css";


export const Album = ({ albumId }) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const getAlbums = async (id) => {
      return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`, {
        method: "GET",
        "content-type": "application/json"
      })
      .then(response => response.json())
      .catch(error => {
        console.log(error);
        return [];
      })
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(async () => {
      setLoading(true);
      const result = await getAlbums(albumId);
      setData(result);
      setLoading(false);
    }, [albumId]);


    return  (
        <div className={styles.container}>
          {loading && (<div>Cargando...</div>)}
          {
              !loading &&  data.map(it => {
                   return (
                       <AlbumItem key={it.id} item={it} className={styles.item} />
                   )
               })
           }
        </div>
    )
}

