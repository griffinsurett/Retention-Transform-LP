// src/components/ItemsTemplate.jsx
import Card from "./Card.jsx";
import { queryItems } from "@/utils/QueryUtils";

export default async function ItemsTemplate({
  collection,
  query,
  items: initialItems,
  ItemComponent, // this can be a component or an object { component, props }
  itemsClass,
  itemClass,
  pathname = "",
  ...props
}) {
  let items = initialItems || [];
  if (!initialItems && collection && query) {
    items = await queryItems(query, collection, pathname);
  }

  // Determine if ItemComponent is an object with extra settings
  const isObjectComponent =
    typeof ItemComponent === "object" && ItemComponent !== null;
  const RenderComponent = isObjectComponent
    ? ItemComponent.component
    : ItemComponent || Card; // Fallback to Card if none provided

  return items && items.length > 0 ? (
    <ul className={itemsClass} aria-label="Items List" {...props}>
      {items.map((item) => {
        let additionalProps = {};
        if (isObjectComponent) {
          // If props is a function, call it with the current item
          additionalProps =
            typeof ItemComponent.props === "function"
              ? ItemComponent.props(item)
              : ItemComponent.props || {};
        }
        return (
          <RenderComponent
            key={item.slug}
            item={item}
            itemClass={itemClass}
            collectionName={collection}
            {...additionalProps}
          />
        );
      })}
    </ul>
  ) : (
    <p>No items found.</p>
  );
}
