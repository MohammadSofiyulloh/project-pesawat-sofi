import React, { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

const Dropdown = () => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div id="dropdown2" className="w-72 m-10 font-medium h-80">
      <div onClick={() => setOpen(!open)} className={`bg-gray-200 w-full p-2 flex items-center justify-between rounded ${!selected && 'text-gray-700'}`}>
        {selected ? (selected?.length > 25 ? selected?.substring(0, 25) + '...' : selected) : 'Pilih Data'}
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </div>
      <ul className={`bg-gray-200 mt-2 overflow-y-auto ${open ? 'max-h-60' : 'max-h-0'} `}>
        <div className="flex items-center px-2 sticky top-0 bg-gray-200">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value.toLowerCase())} placeholder="Cari Data" className="bg-gray-200 placeholder:text-gray-700 p-2 outline-none" />
        </div>
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-gray-200
            ${country?.name?.toLowerCase() === selected?.toLowerCase() && 'bg-sky-600 text-gray-200'}
            ${country?.name?.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setOpen(false);
                setInputValue('');
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
