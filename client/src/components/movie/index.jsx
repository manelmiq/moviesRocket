import { Container } from "./styles";
import { FiStar } from 'react-icons/fi';
import { BiSolidStar } from 'react-icons/bi';
import { Tag } from '../../components/tag';
import { Link } from 'react-router-dom';

export function Movie({id, title, description, rating, tags}) {
  return(
    <Container>
      <div className="movie">
        <Link to={`/details/${id}`}>
          {title}
        </Link>
        <div className="rating">
          <BiSolidStar/>
          <BiSolidStar/>
          <BiSolidStar/>
          <BiSolidStar/>
          <FiStar/>
        </div>
        <p id={id} >
          {description}
        </p>
        <div className="tags">
          <Tag title="Action" />
          <Tag title="Adventure" />
          <Tag title="Drama" />
        </div>
      </div>
    </Container>
  )
}