import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <div className="h-12 border-b-[0.5px] border-gray-200 flex items-center text-xs justify-between px-6 bg-black text-white">
      <div className="flex justify-between text-base items-center">
        <SearchOutlinedIcon className="mr-4" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-black text-base text-white"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="w-7 h-7 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
