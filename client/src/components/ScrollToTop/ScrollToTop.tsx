import React, { useContext } from 'react'
import "./ScrollToTop.scss"
import { ScrollContext } from '../../context/scrollContext'
const ScrollToTop = () => {
    const { scroll } = useContext(ScrollContext) as { scroll: boolean }
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <div className={`${scroll ? "scroll-to-top" : "scroll-to-top-stop"}`} onClick={scrollTop}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>

        </div>
    )
}

export default ScrollToTop