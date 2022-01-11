import { memo } from "react";
import "../styles/footer.scss";

interface FooterProps {
  copy: string;
  link: string;
  author: string;
}

export function FooterComponent({ copy, link, author }: FooterProps) {
  return (
    <footer>
      <p>
        {copy}{" "}
        <a href={link} target="_blank" rel="noreferrer">
          {author}
        </a>
        .
      </p>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
