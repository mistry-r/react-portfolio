import './index.scss'
import MainImage from '../../../assets/images/home-main-image-2.jpg'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Logo = () => {
    const bgRef = useRef();
    const solidLogoRef = useRef();
    const outlineLogoRef = useRef();

    useEffect(() => {
        gsap.timeline()
            .to(bgRef.current, {
                duration: 1, 
                opacity: 1
            })
            .fromTo(outlineLogoRef.current, {
                strokeDasharray: '0 100',
            }, {
                strokeDasharray: '100 0',
                duration: 2,
                ease: 'power2.inOut',
            })
            .to(solidLogoRef.current, {
                opacity: 1,
                duration: 2,
                ease: 'power2.inOut',
            }, '-=1')
            .to(outlineLogoRef.current, {
                strokeWidth: 5,
                duration: 1,
                ease: 'power2.inOut',
            });
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <svg ref={outlineLogoRef} className='outline-logo' viewBox="0 0 220 220">
                <circle cx="110" cy="110" r="105" />
            </svg>
            <img ref={solidLogoRef} className='solid-logo' src={MainImage} alt='Logo' />
        </div>
    )
}

export default Logo
