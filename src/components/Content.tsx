import { memo } from "react";
import "../styles/content.scss";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: Array<{
    Title: string;
    Poster: string;
    Runtime: string;
    Ratings: Array<{ Value: string }>;
    imdbID?: string;
  }>;
}

export function ContentComponent({ movies }: ContentProps) {
  return (
    <main>
      <div className="movies-list">
        {movies.map(({ imdbID, Title, Poster, Runtime, Ratings }) => (
          <MovieCard
            key={imdbID}
            title={Title}
            poster={Poster}
            runtime={Runtime}
            rating={Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.movies, nextProps.movies);
});
