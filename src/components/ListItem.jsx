// src/components/ListItem.jsx
export default function ListItem({ item, collectionName }) {
  return (
    <li className="flex justify-start items-start py-2 text-2xl font-light">
      <span aria-hidden="true">✅</span>
      <div className="list-content ml-2">
        <h3>{item.data.title}</h3>
        <p>{item.body}</p>
      </div>
    </li>
  );
}
