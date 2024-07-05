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
                        I am an adept leader ready to embrace the medical world from an engineering 
                        and biological standpoint. I will be working diligently over the course 
                        of my degree to build a solid and plethoric skillset to effectively embrace 
                        the medical industry as a biomedical engineer.
                    </p>
                    <p>
                        My professional journey has involved working at Teledyne DALSA as a 2D image sensor test and
                        image processing developer, and as an undergraduate research assistant at the University of Waterloo 
                        focusing on gait optimization. More recently, I am working at NovaScan as a Data Analyst intern to create
                        machine learning solutions to enhance cancer detection.
                    </p>
                    <p>
                        Beyond academia and work, my passions lie in medical AI, medical imaging, and neural engineering. 
                        These fields fascinate me for their potential to revolutionize healthcare through innovation and 
                        technology.
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
