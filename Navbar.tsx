const Navbar = () => {
  return (
    <div>
      <nav className="flex content-stretch ">
        <img src="./src/assets/imggg.jpg" className="justify-start size-20"></img>

        <ul className="flex bg-blue-400 space-x-6 font-extrabold p-5 text-2xl justify-end flex-">
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;
