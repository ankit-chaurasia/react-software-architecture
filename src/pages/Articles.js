import React, { useEffect, useState } from 'react';
import { useDataSSR } from '../useDataSSR';

export const Articles = () => {
  //   const [articles, setArticles] = useState(window && window.preloadedArticles);
  const articles = useDataSSR('articles', () => {
    console.log('No pre loaded articles found, loading from server');
    return fetch('http://localhost:8080/api/articles')
      .then((res) => res.json())
  });

  //   useEffect(() => {
  //     if (window && !window.preloadedArticles) {
  //       console.log('No pre loaded articles found, loading from server');
  //       fetch('/api/articles')
  //         .then((res) => res.json())
  //         .then((data) => setArticles(data));
  //     }
  //   }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles &&
        articles.map(({ title = '', author = '' }) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>by {author}</p>
          </div>
        ))}
    </div>
  );
};
