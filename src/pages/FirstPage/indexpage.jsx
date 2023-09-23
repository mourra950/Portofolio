import { Link } from 'react-router-dom'
import './indexpage.css'
import { motion } from 'framer-motion';
import { useGlitch } from 'react-powerglitch'
export default function Main() {
    const glitch = useGlitch({
        "playMode": "hover",
        "createContainers": true,
        "hideOverflow": false,
        "timing": {
            "duration": 250,
            "iterations": 'Infinity'
        },
        "glitchTimeSpan": {
            "start": 0,
            "end": 1
        },
        "shake": {
            "velocity": 7,
            "amplitudeX": 0.2,
            "amplitudeY": 0.2
        },
        "slice": {
            "count": 6,
            "velocity": 15,
            "minHeight": 0.02,
            "maxHeight": 0.15,
            "hueRotate": true
        },
        "pulse": true
    });
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.17, 0.67, 0.83, 1] }}
            className='firstpage'>
            <p ref={glitch.ref}  >Omar Yousef</p>
            <div>
                {/* <Link to={'/room'} >Start</Link> */}
                <Link key={"game"} to={'/game'} animate={true} >Projects</Link>
                <Link key={"about"} to={'/about'} animate={true}>About</Link>
                <Link key={"experience"} to={'/experience'} animate={true} >Experience</Link>
                <Link key={"project"} to={'/project'} animate={true} >Projects</Link>
            </div>
        </motion.div>
    )
}