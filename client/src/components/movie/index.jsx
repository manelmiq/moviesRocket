import { Container } from "./styles";
import { FiStar } from 'react-icons/fi';
import { BiSolidStar } from 'react-icons/bi';
import { Tag } from '../../components/tag';
import { Link } from 'react-router-dom';

export function Movie(props) {
  return(
    <Container>
      <div className="movie">
        <Link to="/details/1">{props.title}</Link>
        <div className="rating">
          <BiSolidStar/>
          <BiSolidStar/>
          <BiSolidStar/>
          <BiSolidStar/>
          <FiStar/>
        </div>
        <p id={props.id} className={props.className} >
          {props.texto}
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