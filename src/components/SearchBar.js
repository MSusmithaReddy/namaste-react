
const SearchBar = ({onSerachInputChange}) => {
    return (
         <div>
            Search: <input placeholder='Search here' onChange={onSerachInputChange} className='border rounded-md border-black w-[250px] p-3'></input>
         </div>
    )
}

export default SearchBar;