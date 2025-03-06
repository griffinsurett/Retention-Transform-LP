// src/components/Heading.jsx
import PropTypes from 'prop-types';

const defaultHeadingStyles = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

export default function Heading({ tagName, className = '', children, ...props }) {
  const Tag = tagName;
  const defaultClass = defaultHeadingStyles[Tag] || '';

  return (
    <Tag className={`${defaultClass} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}

Heading.propTypes = {
  tagName: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
