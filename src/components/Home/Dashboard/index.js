import React from 'react';
import Dropdown1 from '../../Button/Dropdown1';
import Dropdown2 from '../../Button/Dropdown2';
import TabelTeknisBerkala from '../TabelTeknisBerkala/TabelTeknisBerkala';

function index() {
  return (
    <div id="dashboard" className="flex-1 flex flex-col overflow-hidden">
      <div className='flex justify-start items-center m-10'>
        <div className='flex'><Dropdown1 /></div>
        <div className='flex'><Dropdown2 /></div>
      </div>
      
      
      <div className="flex h-full">
        <div className='mx-auto flex w-full px-6'>
          <div className='flex h-full w-full flex-col'>
          <TabelTeknisBerkala />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default index;
