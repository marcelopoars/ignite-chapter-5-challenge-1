import { memo } from "react";
import "../styles/header.scss";

interface HeaderProps {
  selectedGenre: string;
}

export function HeaderComponent({ selectedGenre }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre}</span>
      </span>
    </header>
  );
}

export const Header = memo(HeaderComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.selectedGenre, nextProps.selectedGenre);
});
