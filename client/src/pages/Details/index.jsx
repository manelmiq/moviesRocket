import { FiClock } from "react-icons/fi";
import { BiSolidStar } from 'react-icons/bi';
import { Main } from "./styles";
import { MainGrid } from '../../components/mainGrid';
import { DetailsTag } from '../../components/detailsTag';

export function Details() {

  return(
    <MainGrid>
      <Main>
        <div className="mainTitle">
          <h1>How to train your dragon</h1>
          <div className="rating">
            
            <input type="radio"  id="star1" name="rating" value="1" />
            <label for="star1"><BiSolidStar size={20}/></label>

            <input type="radio"  id="star2" name="rating" value="2" />
            <label for="star2"><BiSolidStar size={20}/></label>

            <input type="radio"  id="star3" name="rating" value="3" />
            <label for="star3"><BiSolidStar size={20}/></label>

            <input type="radio"  id="star4" name="rating" value="4" />
            <label for="star4"><BiSolidStar size={20}/></label>

            <input type="radio"  id="star5" name="rating" value="5" />
            <label for="star5"><BiSolidStar size={20}/></label>

          </div>
        </div>

        <div className="info">
          <img src="https://github.com/beatriz-gm.png" alt="profile photo" />
          <p>By <a href="https://github.com/beatriz-gm">Beatriz Galvão</a></p>
          <FiClock/>
          <p>
            19/03/2024 at 07:23
          </p>
        </div>

        <div className="tags">
          <DetailsTag title="Action" />
          <DetailsTag title="Adventure" />
          <DetailsTag title="Drama" />
        </div>

        <div className="desc">
          <p>
          A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.
          Long ago up North on the Island of Berk, the young Viking, Hiccup, wants to join his town's fight against the dragons that continually raid their town. However, his macho father and village leader, Stoik the Vast, will not allow his small, clumsy, but inventive son to do so. Regardless, Hiccup ventures out into battle and downs a mysterious Night Fury dragon with his invention, but can't bring himself to kill it. Instead, Hiccup and the dragon, whom he dubs Toothless, begin a friendship that would open up both their worlds as the observant boy learns that his people have misjudged the species. But even as the two each take flight in their own way, they find that they must fight the destructive ignorance plaguing their world.Long ago up North on the Island of Berk, the young Viking, Hiccup, wants to join his town's fight against the dragons that continually raid their town. However, his macho father and village leader, Stoik the Vast, will not allow his small, clumsy, but inventive son to do so. Regardless, Hiccup ventures out into battle and downs a mysterious Night Fury dragon with his invention, but can't bring himself to kill it. Instead, Hiccup and the dragon, whom he dubs Toothless, begin a friendship that would open up both their worlds as the observant boy learns that his people have misjudged the species. But even as the two each take flight in their own way, they find that they must fight the destructive ignorance plaguing their world.Long ago up North on the Island of Berk, the young Viking, Hiccup, wants to join his town's fight against the dragons that continually raid their town. However, his macho father and village leader, Stoik the Vast, will not allow his small, clumsy, but inventive son to do so. Regardless, Hiccup ventures out into battle and downs a mysterious Night Fury dragon with his invention, but can't bring himself to kill it. Instead, Hiccup and the dragon, whom he dubs Toothless, begin a friendship that would open up both their worlds as the observant boy learns that his people have misjudged the species. But even as the two each take flight in their own way, they find that they must fight the destructive ignorance plaguing their world.
          </p>
        </div>
      </Main>
    </MainGrid>
  )
}