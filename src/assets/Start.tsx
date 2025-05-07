import * as React from "react"

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={42}
      height={40}
      viewBox="0 0 42 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 2.667l5.665 11.476 12.668 1.852-9.166 8.928 2.163 12.614L21 31.578 9.67 37.537l2.163-12.614-9.166-8.928 12.668-1.852L21 2.667z"
        stroke="#006CCF"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default StarIcon
