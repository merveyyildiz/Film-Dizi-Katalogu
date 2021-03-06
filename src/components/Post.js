import React from 'react';
import { useEffect, useState } from 'react';
import myimg from '../images/img-not-found.png';
import { useSelector } from 'react-redux';
const Post = () => {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);
  const imdbId = useSelector((state) => state.postId);
  useEffect(() => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=ea5d4c63`)
      .then((response) => response.json())
      .then((res) => {
        if (res.Response !== 'False') {
          setData(res);
        } else {
          console.log('hata');
        }
        setLoading(false);
      })
      .catch(({ message }) => {
        setLoading(false);
      });
  }, [imdbId]);
  if (loading === true) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div className="container">
        <div className="film-box">
          <img
            src={!data ? null : data.Poster === 'N/A' ? myimg : data.Poster}
            alt="poster"
            className="animate__animated animate__bounceInDown"
          />
          <h2 className="animate__animated animate__bounceInLeft mt-2">
            {!data ? null : data.Title}
          </h2>
          <p className="animate__animated animate__bounceInRight text-green">
            İmdb Id: {!data ? null : data.imdbID}
          </p>
          <p className="animate__animated animate__bounceInLeft text-lightgreen">
            Yönetmen: {!data ? null : data.Director}
          </p>
          <p className="animate__animated animate__bounceInRight text-lightcoral">
            Oyuncular: {!data ? null : data.Actors}
          </p>
          <p className="animate__animated animate__bounceInLeft text-lightseagreen">
            Yayınlandığı Yıl: {!data ? null : data.Year}
          </p>
          <p className="animate__animated animate__bounceInRight text-lightyellow text-royalblue">
            Süre: {!data ? null : data.Runtime}
          </p>
          <p className="animate__animated animate__bounceInRight text-palevioletred">
            Tür: {!data ? null : data.Type}
          </p>
        </div>
      </div>
    );
  }
};
export default Post;
