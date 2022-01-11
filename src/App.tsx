import { SetStateAction, useCallback, useEffect, useState } from "react";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { api } from "./services/api";
import "./styles/global.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response: { data: SetStateAction<GenreResponseProps[]>; }) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response: { data: SetStateAction<MovieProps[]>; }) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response: { data: SetStateAction<GenreResponseProps>; }) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);


  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar
          genres={genres}
          selectedGenreId={selectedGenreId}
          setSelectedGenreId={setSelectedGenreId}
        />

        <div className="container">
          <Header selectedGenre={selectedGenre.title} />
          <Content movies={movies} />
        </div>
      </div>
      <Footer copy="Ignite - Desafio 02 | Desenvolvido com ❤ por" link="https://marcelopereira.dev" author="Marcelo Pereira"  />
    </>
  );
}
