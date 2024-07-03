/**
 *
 * @param {{
 * className: string,
 * rotation: number,
 * size: number,
 * }} props
 * @returns
 */

export function ArrowIcon({ className, rotation = 90, size = 20 }) {
  return (
    <svg
      className={className}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8334 9.99984H4.16675M4.16675 9.99984L10.0001 15.8332M4.16675 9.99984L10.0001 4.1665"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}