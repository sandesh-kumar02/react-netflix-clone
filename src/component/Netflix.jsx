import styles from './Netflix.module.css';

export default function Netflix({
  name,
  image,
  description,
  rating,
  cast,
  genre,
  watch_url
}) {
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt="netflix image" className={styles.image} />
      <h1>{name}</h1>
      <h3>Rating : {rating}</h3>
      <p>{description}</p>
      <p>{cast}</p>
      <p>{genre}</p>
      <a href="#" target="_blank">{watch_url}</a>
      <hr />
    </div>
  );
}
