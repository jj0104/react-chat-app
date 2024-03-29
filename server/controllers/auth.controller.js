import uuid4 from 'uuid4';

import {
  setGenerateToken,
  isValidUserName,
  getOtherUsers,
  getAllUsers,
  updateUser,
  removeUser,
} from '../service/user.service.js';

/**
 *  [
 *    {
 *      id : UUID, (uni)
 *      name : string (uni)
 *      gender : enum ('male', 'female')
 *      profile : string
 *      rooms : number array
 *    }
 *  ]
 */

// SingUp and Login
export const login = async (req, res) => {
  try {
    const { name, gender } = req.body;

    if (!isValidUserName(name)) {
      return res.status(400).json({ error: '중복된 닉네임입니다!' });
    }

    const id = uuid4();
    const newUser = {
      id,
      name,
      gender,
      profile: `https://avatar.iran.liara.run/public/${
        gender === 'male' ? 'boy' : 'girl'
      }?username=${id}`,
      rooms: [],
    };

    // set jwt token
    setGenerateToken({ id: newUser.id, name: newUser.name }, res);
    // set json data
    await updateUser(newUser);

    res.status(200).json(newUser);
  } catch (error) {
    console.log('🚨 login Controller Error! : ', error);
    res.status(500).json({
      error: 'Server Error!',
    });
  }
};

// Removed user and LogOut
export const logout = async (req, res) => {
  try {
    const user = getOtherUsers(req.user.id);

    // set json data
    await removeUser(user);

    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({
      message: '로그아웃이 완료 되었습니다!',
    });
  } catch (error) {
    console.log('🚨 logout Controller Error! : ', error);
    res.status(500).json({
      error: 'Server Error!',
    });
  }
};
