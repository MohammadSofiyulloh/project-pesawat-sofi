import React, { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import Axios from 'axios';

const Dropdown = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Axios.get('http://s1.indoserv.net/permesinan/api/api/v1/data_pesawat')
      .then((res) => {
        console.log('Get Data From', res.data.data.data);
        setData(res.data.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="dropdown1" className="w-72 m-10 font-medium h-80">
      <div onClick={() => setOpen(!open)} className={`bg-gray-200 w-full p-2 flex items-center justify-between rounded ${!selected && 'text-gray-700'}`}>
        {selected ? (selected?.length > 25 ? selected?.substring(0, 25) + '...' : selected) : 'Pilih Jenis Pesawat'}
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </div>
      <ul className={`bg-gray-200 mt-2 overflow-y-auto ${open ? 'max-h-60' : 'max-h-0'} `}>
        <div className="flex items-center px-2 sticky top-0 bg-gray-200">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value.toLowerCase())} placeholder="Cari Nama Pesawat" className="bg-gray-200 placeholder:text-gray-700 p-2 outline-none" />
        </div>
        {data?.map((data) => (
          <li
            key={data?.id}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-gray-200
            ${data?.tipe_pesawat.nama_tipe?.toLowerCase() === selected?.toLowerCase() && 'bg-sky-600 text-gray-200'}
            ${data?.tipe_pesawat.nama_tipe?.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
            onClick={() => {
              if (data?.tipe_pesawat.nama_tipe?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(data?.tipe_pesawat.nama_tipe);
                setOpen(false);
                setInputValue('');
              }
            }}
          >
            {data?.tipe_pesawat.nama_tipe}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
