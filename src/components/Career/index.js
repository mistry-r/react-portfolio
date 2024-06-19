import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import NovaScanImage from '../../assets/images/logo-r.png'
import WaterlooImage from '../../assets/images/logo-r.png'

const Career = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeout)
    }, [])

    const experiences = [
        {
            position: 'Data Analyst Intern',
            company: 'NovaScan \u00B7 Internship',
            location: 'Chicago, IL',
            date: 'May 2024 - Aug 2024',
            description: 'NovaScan specializes in developing advanced cancer detection devices. I utilized Python to analyze biomedical data, design databases, and develop machine learning algorithms for cancer detection.',
            image: NovaScanImage
        },
        {
            position: 'Undergraduate Research Assistant',
            company: 'University of Waterloo \u00B7 Contract Part-time',
            location: 'Waterloo, ON',
            date: 'Jan 2024 - Apr 2024',
            description: 'URA in the Neuromechanics and Assistive Robotics Lab\nSupervised by Prof. Arash Arami',
            image: WaterlooImage
        },
    ]

    return (
        <>
            <div className='container career-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 'C', 'a', 'r', 'e', 'e', 'r']}
                            idx={15}
                        />
                    </h1>
                </div>
                <div className='experiences-container'>
                    {experiences.map((exp, idx) => (
                        <div key={idx} className='experience-block'>
                            <span className='experience-img-block'>
                                <img src={exp.image} alt={exp.company} />
                            </span>
                            <span className='experience-text-block'>
                                <span className='experience-institution'>
                                    {exp.company}
                                    <span style={{ float: 'right' }}>{exp.date}</span>
                                </span>
                                <span className='experience-position'>
                                    {exp.position}
                                    <span style={{ float: 'right' }}>{exp.location}</span>
                                </span>
                                <span className='experience-body'>
                                    <ul>
                                        {exp.description.split('\n').map((line, index) => (
                                            <li key={index}>{line}</li>
                                        ))}
                                    </ul>
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Career
