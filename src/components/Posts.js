import React from 'react';
import { Link } from 'react-router-dom';
import myimg from '../images/img-not-found.png'
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading.. </h2>;
  }
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="cols">Poster</th>
            <th scope="cols">Film/Dizi Adı</th>
            <th scope="cols">Yıl</th>
            <th scope="cosl">Imdb Id</th>
          </tr>
        </thead>
          <tbody>
            {!posts
              ? null
              : posts.map((post) => {
                  return (
                      <tr key={post.imdbID}>
                        <th>
                          <img
                            src={post.Poster==='N/A' ? myimg : post.Poster}
                            className="img-fluid "style={{width:"150px",height:"auto"}}
                            alt="poster"
                          />
                        </th>
                        <th>
                          <h5 className="my-title">
                            <Link
                              to={{
                                pathname: '/detail',
                                state: {
                                  imdbId: post.imdbID,
                                },
                              }}
                            >
                              {post.Title}
                            </Link>
                          </h5>
                        </th>

                        <th className="card-text">
                          {post.Year}
                         </th><th>
                          {post.imdbID}
                        </th>
                      </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
  );
};

export default Posts;
