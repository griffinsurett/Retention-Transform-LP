// src/components/Button.jsx

// This component is designed to be pre-rendered (SSG) by Astro,
// and it works equally well in a React environment.
// It renders as an <a> tag if an `href` is provided, otherwise as a <button>.
// You can override the rendered element using the `as` prop.
export default function Button({
  as: ComponentProp,
  type = "button",
  onClick,
  children,
  classname = "",
  href,
  ariaLabel, // optional prop for accessibility
  ...props
}) {
  // Default to an anchor tag if href is provided and no override is specified,
  // otherwise default to a button.
  const Component = ComponentProp ?? (href ? "a" : "button");

  // If rendering as an anchor without an href (behaving like a button), add role="button"
  const roleProps = !href && Component === "a" ? { role: "button" } : {};

  return (
    <Component
      {...(Component === "button" ? { type } : {})}
      {...(Component === "a" ? { href } : {})}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${classname} cursor-pointer bg-primary text-white px-4 py-3 rounded-md text-xl transition-opacity duration-200 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
      {...roleProps}
      {...props}
    >
      {children}
    </Component>
  );
}
