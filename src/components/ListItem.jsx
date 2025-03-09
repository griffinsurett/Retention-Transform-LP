// src/components/ListItem.jsx
export default function ListItem({ item, collectionName, title = item.data.title, description = item.body }) {
  return (
    <li className="flex justify-start items-start py-2 text-2xl font-light">
      <span aria-hidden="true">✅</span>
      <div className="list-content ml-2">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
