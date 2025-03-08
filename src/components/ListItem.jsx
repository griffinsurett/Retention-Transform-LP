import Check from "@/assets/check.png";

// Example: Card.jsx (React)
export default function ListItem({ item, collectionName }) {
  return (
    <li className={`flex justify-start items-start py-2 text-2xl font-light`}>
     ✅
      <div className="list-content ml-2">
        <h3>{item.data.title}</h3>
        <p>{item.body} </p>
      </div>
    </li>
  );
}
