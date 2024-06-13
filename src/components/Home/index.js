import { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom';
//import LogoTitle from '../../assets/images/logo-r.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import { TypeAnimation } from 'react-type-animation'
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'R', 'o', 'h', 'a', 'n']
    const jobArray = ['b', 'i', 'o', 'm', 'e', 'd', 'i', 'c', 'a', 'l', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,&nbsp;</span>
                        <span className={`${letterClass} _13`}>I</span> 
                        <span className={`${letterClass} _14`}>'m</span> 
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={21} />
                    </h1>
                    <h2>
                        <TypeAnimation
                            sequence={[
                                'Student at the University of Waterloo',
                                4000,
                                'Data Analyst Intern @NovaScan',
                                4000,
                                'Prev Software Developer @GEM',
                                4000,
                                'Prev Image Processing Developer @Teledyne',
                                4000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Home