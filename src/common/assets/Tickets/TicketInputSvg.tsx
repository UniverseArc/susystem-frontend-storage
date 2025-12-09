import type React from "react"

export const TicketInputSvg: React.FC<React.SVGProps<SVGSVGElement>> = () => {
    return (
        /* simple inline SVG arrow (no external icon lib) */
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M2 21L23 12 2 3v7l15 2-15 2v7z" fill="currentColor" />
        </svg>
    )
}