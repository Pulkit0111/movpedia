// import styles from "../Style.module.css";

export function Detail({
  title,
  release,
  genre,
  director,
  actor,
  plot,
  imdb,
  rt,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        <span>Released:</span> {release}
      </p>
      <p>
        <span>Genre:</span> {genre}
      </p>
      <p>
        <span>Director:</span> {director}
      </p>
      <p>
        <span>Actor:</span> {actor}
      </p>
      <p>
        <span>Plot:</span> {plot}
      </p>
      <p>
        <span>IMDB:</span> {imdb}
      </p>
      <p>
        <span>Rotten Tomatoes:</span> {rt}
      </p>
    </div>
  );
}
