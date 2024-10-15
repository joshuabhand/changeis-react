import { useState, useEffect } from 'react';

import axios from 'axios';
import Book from './model/book';
import BookRow from './components/BookRow';

const renderBookList = (books: Book[]) => {
  if(books.length > 0) {
    return books.map(({title, description, url}, index) => 
      <div key={index}>
        <BookRow title={title} description={description} url={url}/>
      </div>
    )
  }
  
  return <h2>Book list is empty</h2>;
}

export default function App() {
  const fakerURL: string = 'https://fakerapi.it/api/v1/images?_width=380';
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios.get(fakerURL)
    .then(response => {
      if(response?.data?.data) {
        setBooks(response?.data?.data);
      }

      setLoading(false);
    })
    .catch(response => {
      console.log({response});
    })
  }, []);

  return (
    <>
      {renderBookList(books)}
      {loading ? <h1>Loading...</h1> : <></>}
    </>
  );
}
