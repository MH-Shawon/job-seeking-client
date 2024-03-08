import { Link } from 'react-router-dom';
import './NotFound.css'
import notfound from '../../assets/notfound.png'
const NotFound=()=>{
    return(
        <>
            <section className='page notfound'>
                <div className="content">
                    <img src={notfound} alt="notfound" />
                    <Link to={'/'}>RETURN TO HOME PAGE</Link>
                </div>
            </section>
        </>
    )}
export default NotFound;