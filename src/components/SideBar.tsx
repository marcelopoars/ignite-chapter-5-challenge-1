import { Button } from "./Button";

import "../styles/sidebar.scss";
import { memo, useCallback } from "react";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>;
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  setSelectedGenreId,
}: SideBarProps) {
  const handleClickButton = useCallback((genreId: number) => {
    setSelectedGenreId(genreId);
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>
      <div className="buttons-container">
        {genres.map(({ id, title, name }) => (
          <Button
            key={String(id)}
            title={title}
            iconName={name}
            onClick={() => handleClickButton(id)}
            selected={selectedGenreId === id}
          />
        ))}
      </div>
    </nav>
  );
}

