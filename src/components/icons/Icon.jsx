const Icon = ({ children, className = 'w-6 h-6', strokeWidth = 2, fill = 'none', stroke = 'currentColor', viewBox = '0 0 24 24', ...rest }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={className}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    viewBox={viewBox}
    {...rest}
  >
    {children}
  </svg>
);

export default Icon;
