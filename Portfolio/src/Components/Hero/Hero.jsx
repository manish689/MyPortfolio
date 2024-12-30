import './Hero.css'
import profile from '../../assets/profile.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile}  alt='' />
        <h1><span>I'm Manish Pyakurel,</span> frontend developer based in Nepal.</h1>
        <p>I am a frontend developer from Kathmandu, Nepal with 1 years of experience.</p>
        <div className='hero-action'>
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
