const Navigation = () => {
    return(
        <nav className='flex justify-between py-4'>
        <div className='w-32 h-32 ml-12 cursor-pointer'>
          <img src="assets/logo.png" alt="logo"/>
        </div>
        <ul className='nav-links text-white flex gap-12 font-normal cursor-pointer center'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">System Requirements</a></li>
          <li><a href="#">Plan</a></li>
        </ul> 

        <button className='flex gap-4 cursor-pointer mr-8'>
          <button className='text-white'>Login |</button>
          <img src="assets/xbox_icon.svg" alt="box"/>
          <img src="assets/steam_icon.svg" alt="sbox"/>
        </button>
      </nav>
    )
};

export default Navigation;