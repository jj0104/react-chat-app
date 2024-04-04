import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

import Rooms from './Rooms';

const SideBar = () => {
  const [menu, setMenu] = useState('rooms');

  return (
    <div className="flex h-1/3 w-full flex-col gap-2 p-4 px-5 sm:h-full md:w-1/2 lg:w-1/3">
      {/* 메뉴 */}
      <ul className="menu rounded-box bg-base-200 bg-opacity-90 lg:menu-horizontal">
        <li onClick={() => setMenu('rooms')}>
          <a>
            <AiOutlineHome className="h-5 w-5 text-base-content" />
            채팅 리스트
            <span className="badge badge-sm">99+</span>
          </a>
        </li>
        <li onClick={() => setMenu('users')}>
          <a>
            <AiOutlineUser className="h-5 w-5 text-base-content" />
            유저 목록
            <span className="badge badge-secondary badge-sm">NEW</span>
          </a>
        </li>
      </ul>
      {menu === 'rooms' && <Rooms />}
    </div>
  );
};

export default SideBar;
