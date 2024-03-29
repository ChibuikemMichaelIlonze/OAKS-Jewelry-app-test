import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

function Navbar() {
  return (
    <div className='flex flex-row justify-between font-bienvenido items-center py-8 px-4'>
        <div>
            <span className='text-6xl text-brownbg  font-normal'>
            <svg width="125" height="39" viewBox="0 0 125 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.84 3.48C11.44 1.76 14.28 0.899997 17.36 0.899997C20.44 0.899997 23.32 1.76 26 3.48C28.68 5.16 30.8 7.48 32.36 10.44C33.96 13.36 34.76 16.54 34.76 19.98C34.76 23.38 33.96 26.56 32.36 29.52C30.8 32.44 28.68 34.76 26 36.48C23.32 38.16 20.44 39 17.36 39C14.28 39 11.44 38.16 8.84 36.48C6.24 34.76 4.18 32.44 2.66 29.52C1.14 26.6 0.38 23.42 0.38 19.98C0.38 16.54 1.14 13.36 2.66 10.44C4.18 7.48 6.24 5.16 8.84 3.48ZM25.4 32.7C28.6 30.7 30.56 27.76 31.28 23.88C32 19.96 31.26 16.26 29.06 12.78C26.9 9.3 23.9 7.02 20.06 5.94C16.26 4.86 12.76 5.32 9.56 7.32C6.4 9.32 4.5 12.24 3.86 16.08C3.22 19.88 4 23.54 6.2 27.06C8.4 30.58 11.34 32.9 15.02 34.02C18.7 35.1 22.16 34.66 25.4 32.7ZM53.2934 0.899997L67.1534 39H61.6934L57.7934 27.54C50.8334 27.54 45.4734 30.12 41.7134 35.28C40.7534 36.64 40.0734 37.88 39.6734 39H34.3934L48.1934 0.899997H53.2934ZM43.7534 27.12C45.0334 25.92 46.7134 24.98 48.7934 24.3C50.8734 23.58 52.6334 23.16 54.0734 23.04L56.1734 22.86L50.6534 5.16L43.7534 27.12ZM88.7417 20.7C91.2617 23.06 93.1217 25.88 94.3217 29.16C95.5217 32.44 96.1217 35.72 96.1217 39H91.3817C91.3817 35.96 90.7817 33.06 89.5817 30.3C88.4217 27.54 86.8617 25.22 84.9017 23.34C81.9817 24.82 78.5617 25.56 74.6417 25.56V39H70.2617V0.899997H74.6417V21.54C76.6417 21.54 78.4617 21.32 80.1017 20.88C81.7817 20.4 83.1817 19.78 84.3017 19.02C85.4617 18.26 86.4617 17.32 87.3017 16.2C88.1417 15.08 88.8017 13.94 89.2817 12.78C89.8017 11.58 90.2017 10.26 90.4817 8.82C90.8017 7.38 91.0017 6.06 91.0817 4.86C91.2017 3.62 91.2617 2.3 91.2617 0.899997H95.5817C95.5817 9.82 93.3017 16.42 88.7417 20.7ZM124.249 34.8V39H98.9891V34.8C98.9891 32.96 99.4691 31.06 100.429 29.1C101.389 27.1 102.569 25.28 103.969 23.64C105.409 22 106.969 20.3 108.649 18.54C110.329 16.78 111.869 15.18 113.269 13.74C114.709 12.3 115.909 10.82 116.869 9.3C117.829 7.74 118.309 6.36 118.309 5.16H99.1691V0.899997H123.949V5.16C123.949 6.68 123.469 8.32 122.509 10.08C121.549 11.84 120.349 13.48 118.909 15C117.469 16.52 115.909 18.16 114.229 19.92C112.589 21.64 111.049 23.26 109.609 24.78C108.169 26.3 106.969 27.96 106.009 29.76C105.049 31.52 104.569 33.2 104.569 34.8H124.249Z" fill="#D76F30"/>
                </svg>
            </span>
        </div>
        <div>
            <div className="flex justify-center items-center gap-4">
                <div className=' py-[2px] h-[32px] flex flex-row gap-1 hover:cursor-text rounded-[50px] bg-transparent border-2 border-green focus-within:border-green focus-within:border-2 active:border-brownbg items-center'>
                        <input type="search" className='py-1 px-3 text-sm w-full active:border-2 focus:text-[#04020099]/90 focus:border-none outline-none bg-inherit h-full  text-beige' placeholder='Search'  />
                        {/* <button className="absolute top-0 right-0 mr-3 mt-1 p-1 text-gray-500 hover:text-gray-700 focus:outline-none" onClick="document.querySelector('input[type=search]').value = ''">
                          <svg className="h-[5px] w-[5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button> */}
                        <div className='cursor-pointer bg-green  p-[2px] rounded-[50px] text-white' >
                            <SearchIcon fontSize='medium'/>   
                            
                        </div>  
                </div>
                <div className='relative p-1'>
                    <span><LocalGroceryStoreOutlinedIcon/></span>
                    <div className='w-[10px] h-[10px] bg-[#BB2929] absolute top-0 right-0 rounded-full'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar