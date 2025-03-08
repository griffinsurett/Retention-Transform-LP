// src/components/Card.jsx
import Button from "./Button.jsx";

// Example: Card.jsx (React)
export default function Card({ item, collectionName }) {
  return (
    <article className="card" aria-labelledby={`card-title-${item.slug}`}>
      <h3 id={`card-title-${item.slug}`}>{item.data.title}</h3>
      <p>{item.data.description || item.body}</p>
      {/* maybe a link button */}
      <Button href={`/${collectionName}/${item.slug}`} ariaLabel={`View more details about ${item.data.title}`}>
        View More
      </Button>
    </article>
  );
}
