// src/components/Card.jsx
import Button from "../Button.jsx";

// Example: Card.jsx (React)
export default function Card({ item, collectionName, title, description, itemClass }) {
  const finalTitle = title ?? item.data.title;
  const finalDescription = description ?? (item.data.description || item.body);
  return (
    <article className={`card ${itemClass}`} aria-labelledby={`card-title-${item.slug}`}>
      <h3 id={`card-title-${item.slug}`}>{finalTitle}</h3>
      <p>{finalDescription}</p>
      {/* maybe a link button */}
      <Button
        href={`/${collectionName}/${item.slug}`}
        ariaLabel={`View more details about ${item.data.title}`}
      >
        View More
      </Button>
    </article>
  );
}
