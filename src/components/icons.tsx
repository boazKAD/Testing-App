import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z"
      />
      <path
        fill="currentColor"
        d="M168 92.83a40 40 0 0 0-75.17-21.2A24 24 0 1 0 88 136h80a36 36 0 0 0 0-72c-1.38 0-2.74.08-4.09.24A40.23 40.23 0 0 0 168 92.83Z"
        opacity={0.3}
      />
       <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fontFamily="Poppins, sans-serif" fontSize="80" fontWeight="bold" fill="currentColor">CJ</text>
    </svg>
  );
}
