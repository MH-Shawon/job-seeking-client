import { useState } from "react";
import banner from '../../../assets/Banner/banner1.jpg'
import { BiSearch } from 'react-icons/bi';
const Banner = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();console.log('Search submitted:', searchValue);
    };

    return (
        <div className="banner">
            <div className="relative grid h-[28rem] w-full max-w-full flex-col items-end justify-center overflow-hidden rounded bg-white bg-clip-border text-center text-gray-700">
                <div
                    style={{ backgroundImage: `url(${banner})` }}
                    className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative my-auto md:px-12">
                    
                    <h5 className="block mb-4 font-sans text-4xl antialiased font-semibold leading-snug tracking-normal text-gray-300">
                        Find Your Dream Job
                    </h5>
                    <form onSubmit={handleSearchSubmit} className="mt-6 flex items-center justify-center">
                        <input
                            type="text"
                            value={searchValue}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            className="mr-2 p-2 border border-gray-300 rounded "
                        />
                        <button type="submit" className="p-2 bg-gray-800 text-white rounded">
                            <BiSearch />
                        </button>
                    </form>
                    
                    
                </div>
            </div>
        </div>
    )
}
export default Banner;