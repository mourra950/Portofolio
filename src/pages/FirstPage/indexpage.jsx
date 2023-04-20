import { Link } from 'react-router-dom'
import './indexpage.css'
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
        <div className='firstpage'>
            <p ref={glitch.ref}  >Omar Yousef</p>
            <div>
                {/* <Link to={'/room'} >Start</Link> */}
                <Link to={'/about'} >About</Link>
                <Link to={'/experience'} >Experience</Link>
                <Link to={'/project'} >Projects</Link>
            </div>
        </div>
    )
}