import styles from "../Style.module.css";

export function About() {
  return (
    <div>
      <p>
        Have you guys ever been succumbed by the thought of what to watch over
        the weekend,I know i have, to help you getting rid of that confusion I
        present to you a small project of mine MOVPEDIA, be it a movie or a tv
        series that you want to binge, just visit here and look for the desired
        content and you get all the detail relted to the flick you want to
        enjoy, that will help you decide based on the IMDB amd ROTTEN TOMATOES
        ratings.
      </p>
      <p>HOPE YOU WILL LIKE MY EFFORT</p>
      <div>
        <img
          src="https://media.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif"
          alt=""
          className={styles.gif}
        />
      </div>
    </div>
  );
}
