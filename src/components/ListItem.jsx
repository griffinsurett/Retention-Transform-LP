import Image from "astro/components/Image.astro";
import Button from "./Button.jsx";
import Check from "@/assets/check.png";

// Example: Card.jsx (React)
export default function Card({ item, collectionName }) {
  return (
    <li className="flex justify-start items-start py-2 text-2xl font-light">
      {/* <img
        height="25px"
        width="25px"
        src={Check.src}
        alt="Check"
        loading="lazy"
        className="pr-1"
      /> */}
      <div className="list-content ml-2">
        <h3>{item.data.title}</h3>
        <p>{item.body} </p>
      </div>
    </li>
  );
}
