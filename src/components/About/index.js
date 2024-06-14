import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import PythonLogo from '../../assets/images/python.png'
import CSharpLogo from '../../assets/images/c-sharp.png'
import CPlusPlusLogo from '../../assets/images/c-.png'
import MatalabLogo from '../../assets/images/matlab-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a very ambitious front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family
                        person, father of a beautiful daughter, a sports fanatic,
                        photography enthusiast, and tech-obsessed!!!
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                    <div className="face1">
                        <img src={PythonLogo} alt='Python Logo' className='python-logo'/>
                    </div>
                    <div className="face2">
                        <img src={MatalabLogo} alt='MATLAB Logo' className='matlab-logo'/>
                    </div>
                    <div className="face3">
                        <img src={CSharpLogo} alt='CSharp Logo' className='python-logo'/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} className='python-logo' color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <img src={CPlusPlusLogo} alt='CPlusPlus Logo' className='python-logo'/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} className='python-logo' color="#EC4D28" />
                    </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About