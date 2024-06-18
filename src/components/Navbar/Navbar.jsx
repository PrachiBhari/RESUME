import { NAVBAR_TITLE, navOptions } from '../../constants';
import { motion } from 'framer-motion';
import './Navbar.css';

function NavOption(props) {
  return (
    <motion.a
      href={`#${props.navItem}`}
      whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.3 }}
      className="nav-link"
    >
      {props.navItem}
    </motion.a>
  );
}
function Navbar(){
  

  return(
    <div className='navbar_container'>
      <div className='navbar_left'>
          {NAVBAR_TITLE}
      </div>
      <div className='navbar_right'>
        {
          navOptions.map(function(item,index){
              return(
                <NavOption key={item} navItem={item}/>
              )
          })
        }
          {/* <p>About</p>
          <p>Tools</p>
          <p>Experience</p>
          <p>Projects</p>
          <p>Resume</p> */}
      </div>
      
    </div>
  )
}

export default Navbar;