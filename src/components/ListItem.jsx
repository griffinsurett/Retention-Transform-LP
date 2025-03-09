// src/components/ListItem.jsx
export default function ListItem({ item, collectionName, title, description }) {
  const finalTitle = title ?? item.data.title;
  const finalDescription = description ?? item.body;
  
  return (
    <li className="flex justify-start items-start py-2 text-2xl font-light">
      <span aria-hidden="true">✅</span>
      <div className="list-content ml-2">
        <h3>{finalTitle}</h3>
        <p>{finalDescription}</p>
      </div>
    </li>
  );
}
