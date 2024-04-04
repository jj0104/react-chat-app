import { useEffect, useState } from 'react';
import useGetRooms from '../../../hooks/useGetRooms';
import useRoomStore from '../../../store/useRoomStore';
import getRandomEmojis from '../../../utils/getRandomEmojis';
import Room from './Room';
import { useAuthContext } from '../../../context/AuthContext';

const Rooms = () => {
  const { isLoading, rooms } = useGetRooms();
  const { currentRoom, setCurrentRoom, updateRooms, removeUpdateRooms } =
    useRoomStore();
  const [emojisByRoom, setEmojisByRoom] = useState({});
  const { authUser } = useAuthContext();

  useEffect(() => {
    const emojisMap = {};
    rooms.forEach(room => {
      emojisMap[room.id] = getRandomEmojis();
    });
    setEmojisByRoom(emojisMap);
  }, [rooms]);

  return (
    <>
      {isLoading ? (
        <p className="loading loading-dots loading-lg mx-auto flex h-full items-center justify-center text-primary opacity-80"></p>
      ) : (
        <div className="flex flex-col overflow-auto py-2">
          {rooms.map((room, index) => {
            return (
              <Room
                key={room.id}
                room={room}
                emoji={emojisByRoom[room.id]}
                setCurrentRoom={setCurrentRoom}
                removeUpdateRooms={removeUpdateRooms}
                isLast={index === rooms.length - 1}
                isCurrent={currentRoom?.id === room.id}
                isUpdate={updateRooms.includes(room.id)}
                isJoined={room.users.includes(authUser.id)}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Rooms;
