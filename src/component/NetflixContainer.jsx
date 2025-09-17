import seriesData from "../api/seriesData.json";
import styles from "./NetflixContainer.module.css";
import Netflix from "./Netflix";

export default function NetflixContainer() {
  return (
    <div className={styles.cardContainer}>
      <Netflix
        image={seriesData[0].image_url}
        name={seriesData[0].name}
        description={seriesData[0].description}
        rating={seriesData[0].rating}
        cast={seriesData[0].cast.map((element) => {
          return element;
        })}
        genre={seriesData[0].genre}
        watch_url={seriesData[0].watch_url}
      />
      <Netflix
        image={seriesData[1].image_url}
        name={seriesData[1].name}
        description={seriesData[1].description}
        rating={seriesData[1].rating}
        cast={seriesData[1].cast.map((element) => {
          return element;
        })}
        genre={seriesData[1].genre}
        watch_url={seriesData[1].watch_url}
      />
      <Netflix
        image={seriesData[2].image_url}
        name={seriesData[2].name}
        description={seriesData[2].description}
        rating={seriesData[2].rating}
        cast={seriesData[2].cast.map((element) => {
          return element;
        })}
        genre={seriesData[2].genre}
        watch_url={seriesData[2].watch_url}
      />
      <Netflix
        image={seriesData[3].image_url}
        name={seriesData[3].name}
        description={seriesData[3].description}
        rating={seriesData[3].rating}
        cast={seriesData[3].cast.map((element) => {
          return element;
        })}
        genre={seriesData[3].genre}
        watch_url={seriesData[3].watch_url}
      />
      <Netflix
        image={seriesData[4].image_url}
        name={seriesData[4].name}
        description={seriesData[4].description}
        rating={seriesData[4].rating}
        cast={seriesData[4].cast.map((element) => {
          return element;
        })}
        genre={seriesData[4].genre}
        watch_url={seriesData[4].watch_url}
      />
      <Netflix
        image={seriesData[5].image_url}
        name={seriesData[5].name}
        description={seriesData[5].description}
        rating={seriesData[5].rating}
        cast={seriesData[5].cast.map((element) => {
          return element;
        })}
        genre={seriesData[5].genre}
        watch_url={seriesData[5].watch_url}
      />
      <Netflix
        image={seriesData[6].image_url}
        name={seriesData[6].name}
        description={seriesData[6].description}
        rating={seriesData[6].rating}
        cast={seriesData[6].cast.map((element) => {
          return element;
        })}
        genre={seriesData[6].genre}
        watch_url={seriesData[6].watch_url}
      />
      <Netflix
        image={seriesData[7].image_url}
        name={seriesData[7].name}
        description={seriesData[7].description}
        rating={seriesData[7].rating}
        cast={seriesData[7].cast.map((element) => {
          return element;
        })}
        genre={seriesData[7].genre}
        watch_url={seriesData[7].watch_url}
      />
      <Netflix
        image={seriesData[8].image_url}
        name={seriesData[8].name}
        description={seriesData[8].description}
        rating={seriesData[8].rating}
        cast={seriesData[8].cast.map((element) => {
          return element;
        })}
        genre={seriesData[8].genre}
        watch_url={seriesData[8].watch_url}
      />
      <Netflix
        image={seriesData[9].image_url}
        name={seriesData[9].name}
        description={seriesData[9].description}
        rating={seriesData[9].rating}
        cast={seriesData[9].cast.map((element) => {
          return element;
        })}
        genre={seriesData[9].genre}
        watch_url={seriesData[9].watch_url}
      />
    </div>
  );
}
