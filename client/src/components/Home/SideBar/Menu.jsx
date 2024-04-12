import {
  AiOutlineFolderAdd,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineTeam,
} from 'react-icons/ai';

const Menu = ({ menu, setMenu, isModalOpen, setIsModalOpen }) => {
  return (
    <ul className="menu menu-horizontal menu-md sticky flex-nowrap justify-between border-b border-opacity-10 bg-opacity-0 px-6 py-5 text-white">
      <div className="flex max-sm:flex-wrap">
        <li
          onClick={() => {
            if (menu !== 'rooms') setMenu('rooms');
          }}
        >
          <a>
            <AiOutlineMenu
              className={`h-6 w-6 text-white  ${menu === 'rooms' ? 'opacity-100' : 'opacity-50'}`}
            />
          </a>
        </li>
        <li
          onClick={() => {
            if (menu !== 'users') setMenu('users');
          }}
        >
          <a>
            <AiOutlineTeam
              className={`h-6 w-6 text-white  ${menu === 'users' ? 'opacity-100' : 'opacity-50'}`}
            />
          </a>
        </li>
        <li
          onClick={() => {
            if (menu !== 'chat') {
              setIsModalOpen({ ...isModalOpen, chat: true });
              setMenu('chat');
            }
          }}
        >
          <a>
            <AiOutlineFolderAdd
              className={`h-6 w-6 text-white  ${menu === 'chat' ? 'opacity-100' : 'opacity-50'}`}
            />
            <span className="hidden opacity-60 2xl:inline-block">Add Chat</span>
          </a>
        </li>
      </div>
      <div className="flex">
        <li
          onClick={() => {
            if (menu !== 'logout') {
              setMenu('logout');
              setIsModalOpen({ ...isModalOpen, logout: true });
            }
          }}
        >
          <a>
            <AiOutlineLogout
              className={`h-6 w-6 text-white  ${menu === 'logout' ? 'opacity-100' : 'opacity-50'}`}
            />
          </a>
        </li>
      </div>
    </ul>
  );
};

export default Menu;
