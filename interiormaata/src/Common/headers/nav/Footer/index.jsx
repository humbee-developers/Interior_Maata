import './style3.css';
import { translate } from '../../anim';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <div className="footer_navbar">
          
            <ul className='ul'>
                <motion.li
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span>Social:</span> INSTAGRAM, FACEBOOK
                </motion.li>
            </ul>
           
        </div>
    )
}
