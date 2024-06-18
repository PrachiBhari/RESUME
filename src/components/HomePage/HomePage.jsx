
import './HomePage.css';
import githubIcon from  '../../assets/git.png';
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";

function HomePage(){

    return (
        <div className='homepage_container'>
           
           <div className='homepage_left'>
                <p className='homepage_left_h1'>
                        <span className='red_color'>Hi,</span> my name is
                </p>

                <p className='homepage_left_h2'>
                    <span>O</span>
                    <span>m</span>
                    <span>k</span>
                    <span>a</span>
                    <span>r</span>
                    &nbsp;
                    <span>M</span>
                    <span>o</span>
                    <span>r</span>
                    <span>e</span>
                </p>

                <p className='homepage_left_h3'>
                    Student at <span className='red_color'>Lovely Professional University</span>
                </p>

                <p className='homepage_left_description'>
                I am a passionate and dedicated student currently pursuing my Bachelor of Technology in Computer Science and Engineering with a specialization in Full Stack Development. I have a strong foundation in both front-end and back-end technologies, and I am constantly seeking to expand my skill set and knowledge base.

My journey in the field of computer science has equipped me with a solid understanding of programming languages, web development frameworks, and software development principles. I am eager to apply my skills in real-world projects and collaborate with industry professionals to create innovative solutions.
                </p>

                <div>
                    <a href='#' target='_blank'>
                        <img 
                            src={githubIcon}
                            alt='githubIconImage'
                            className='homepage_logo'
                        />
                    </a>
                    <a href='#' target='_blank'>
                        <FaLinkedin className='homepage_logo'/>
                    </a>
                </div>

                <a href='mailto:abc@gmail.com'>
                    <buton className='homepage_left_button'>Get in Touch</buton>
                </a>
           </div>

           <div className='homepage_right'>
                <img src='https://img.freepik.com/premium-photo/immersive-gaming-3d-character-mastery-desktop-adventures_215372-11809.jpg?w=740' alt='GIF' />
           </div>
        </div>
    )
}

export default HomePage;