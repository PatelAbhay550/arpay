import React from 'react';
import { FiSearch, FiUser, FiSmartphone, FiDollarSign } from 'react-icons/fi';
import { BsQrCodeScan, BsPhone } from 'react-icons/bs';
import { RiContactsLine, RiBankLine } from 'react-icons/ri';
import { BiTransferAlt } from 'react-icons/bi';
import Link from 'next/link';

const Page = () => {
  const people = [
    { name: 'B James H' },
    { name: 'Brittany' },
    { name: 'Ashley' },
    { name: 'Mike' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Search bar */}
      <div className="bg-white p-4 shadow">
        <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center">
          <FiSearch className="text-gray-500 mr-2" size={20} />
          <input 
            type="text" 
            placeholder="Search by name or number" 
            className="bg-transparent w-full outline-none text-gray-700"
          />
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-4 gap-2 p-4 bg-white">
        <div className="flex flex-col items-center">
          <Link href="/qr">
          <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-1">
            <BsQrCodeScan className="text-blue-600" size={24} />
          </div></Link>
          <span className="text-xs text-center">Scan any QR code</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-1">
            <RiContactsLine className="text-green-600" size={24} />
          </div>
          <span className="text-xs text-center">Pay contacts</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-1">
            <BsPhone className="text-purple-600" size={24} />
          </div>
          <span className="text-xs text-center">Pay to Phone</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mb-1">
            <RiBankLine className="text-yellow-600" size={24} />
          </div>
          <span className="text-xs text-center">Bank transfer</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-1">
            <FiUser className="text-red-600" size={24} />
          </div>
          <span className="text-xs text-center">Pay to UPI ID</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-1">
            <BiTransferAlt className="text-indigo-600" size={24} />
          </div>
          <span className="text-xs text-center">Self transfer</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mb-1">
            <FiDollarSign className="text-pink-600" size={24} />
          </div>
          <span className="text-xs text-center">Pay bills</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-1">
            <FiSmartphone className="text-teal-600" size={24} />
          </div>
          <span className="text-xs text-center">Mobile recharge</span>
        </div>
      </div>

      {/* UPI Lite balance */}
      <div className="bg-white mt-2 p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">UPI Lite balance: ₹2,000</p>
            <p className="text-xs text-gray-500">UPI ID: vpa@bankname</p>
          </div>
          <button className="text-blue-600 text-sm font-medium">View balance</button>
        </div>
      </div>

      {/* People section - now in 3 columns */}
      <div className="bg-white mt-2 p-4">
  <h3 className="text-gray-500 text-sm font-medium mb-4">People</h3>
  <div className="grid grid-cols-3 gap-4">
    {people.map((person, index) => (
      <div 
        key={index} 
        className="flex flex-col items-center justify-center"
      >
        <div className="relative mb-2">
          <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
            <FiUser className="text-gray-600" size={20} />
          </div>
          {/* Online status indicator (optional) */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <span className="text-xs font-medium text-gray-800 text-center truncate w-full px-1">
          {person.name}
        </span>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Page;