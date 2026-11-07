import { Fragment } from "react";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "blockquote";
  className?: string;
  id?: string;
};

/** Converte a convenção "linha|linha *ênfase*" em título com quebras e <em>. */
export function Headline({ text, as: Tag = "h2", className = "", id }: Props) {
  const lines = text.split("|");
  return (
    <Tag id={id} className={`display ${className}`}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line.split(/(\*[^*]+\*)/g).map((part, j) =>
            part.startsWith("*") && part.endsWith("*") ? (
              <em key={j}>{part.slice(1, -1)}</em>
            ) : (
              <Fragment key={j}>{part}</Fragment>
            ),
          )}
          {i < lines.length - 1 && (
            <>
              {" "}
              <br />
            </>
          )}
        </Fragment>
      ))}
    </Tag>
  );
}
