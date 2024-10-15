import Book from '../model/book';
import './bookRow.css';

export const titleLabel:string = 'Title:';
export const descriptionLabel:string = 'Description:';
export const thumbnailAltText:string = 'book thumbnail';

export default function BookRow({title, description, url}: Book) {
    return (
        <>
        <div className='row'>
          <div className='row-item'>
            <img className='thumbnail' src={url} alt={thumbnailAltText}/>
          </div>
          <div className='row-item'>
            <p>
              <label><strong>{titleLabel}</strong></label>
              <br/>
              {title}
            </p> 
            <p>
              <label><strong>{descriptionLabel}</strong></label>
              <br/>
              {description}
            </p>
          </div>
        </div>
        </>
    );
}