import axios from "axios";
import { useState } from "react";
import { Poster } from "./Poster";
import { Detail } from "./Detail";
import styles from "../Style.module.css";
import BackgroundSlider from "react-background-slider";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";

export const Search = ({ onCompleteCallBack }) => {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [title, setTitle] = useState("");
  const [released, setReleased] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");
  const [get, setGet] = useState(false);
  const [imdb, setImdb] = useState("");
  const [rt, setRt] = useState("");

  const handleChange = (e) => {
    let x = e.target.value;
    setName(x);
  };

  const handleSearch = async () => {
    let { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=4f9513ae&t=${name}`
    );
    setPoster(data.Poster);
    setTitle(data.Title);
    setReleased(data.Released);
    setGenre(data.Genre);
    setDirector(data.Director);
    setActors(data.Actors);
    setPlot(data.Plot);
    setGet(true);
    setImdb(data.Ratings[0].Value);
    setRt(data.Ratings[1].Value);
    console.log(data);
  };
  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search for a movie..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={styles.content}>
        <div>
          <Poster image={poster} />
        </div>
        <div className={get ? styles.detail : null}>
          {get ? (
            <Detail
              title={title}
              release={released}
              genre={genre}
              director={director}
              actor={actors}
              plot={plot}
              imdb={imdb}
              rt={rt}
            />
          ) : null}
        </div>
      </div>
      <div>
        <BackgroundSlider
          images={[image1, image2, image3, image4, image5]}
          duration={6}
          transition={1}
        />
      </div>
    </>
  );
};
