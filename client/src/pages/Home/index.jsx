import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Movie } from '../../components/movie';
import { Container } from './styles';
import { FiPlus } from 'react-icons/fi';

export function Home() {
  return(
    <Container>
      <Header/>
      <div className="moviesTitle">
        <h1>My movies</h1>
        <Button 
        to="/new"
        title="Add movie"
        icon={FiPlus} > </Button>
      </div>
      <div className="movies">
        <Movie
          title="How to Train Your Dragon"
          id={1}
          className="tagP"
          texto="A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.
          Long ago up North on the Island of Berk, the young Viking, Hiccup, wants to join his town's fight against the dragons that continually raid their town. However, his macho father and village leader, Stoik the Vast, will not allow his small, clumsy, but inventive son to do so. Regardless, Hiccup ventures out into battle and downs a mysterious Night Fury dragon with his invention, but can't bring himself to kill it. Instead, Hiccup and the dragon, whom he dubs Toothless, begin a friendship that would open up both their worlds as the observant boy learns that his people have misjudged the species. But even as the two each take flight in their own way, they find that they must fight the destructive ignorance plaguing their world.
          "
        />
        <Movie
          title="Finding Nemo"
          id={2}
          className="tagP"
          texto="A clown fish named Marlin lives in the Great Barrier Reef and loses his son, Nemo, after he ventures into the open sea, despite his father's constant warnings about many of the ocean's dangers. Nemo is abducted by a boat and netted up and sent to a dentist's office in Sydney. While Marlin ventures off to try to retrieve Nemo, Marlin meets a fish named Dory, a blue tang suffering from short-term memory loss. The companions travel a great distance, encountering various dangerous sea creatures such as sharks, anglerfish and jellyfish, in order to rescue Nemo from the dentist's office, which is situated by Sydney Harbour. While the two are searching the ocean far and wide, Nemo and the other sea animals in the dentist's fish tank plot a way to return to the sea to live their lives free again."
        />
        <Movie
          title="Frozen"
          id={3}
          className="tagP"
          texto='Write something about other movie here'
        />
         <Movie
          title="Beauty and the beast"
          id={4}
          className="tagP"
          texto='Something else here'
        />
         <Movie
          id={5}
          className="tagP"
          texto='Something else here'
        />
      </div>
    </Container>
  )
}