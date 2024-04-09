import express from 'express';

import { getMessages, sendMessage } from '../controllers/message.controller.js';
import {
  createdRoom,
  joinRoom,
  removedRoom,
} from '../controllers/room.controller.js';
import {
  userCreateRoom,
  userJoinRoom,
} from '../controllers/user.controller.js';

import protectRoute from '../middleware/protect.route.js';

const router = express.Router();

// Room
router.post('/', protectRoute, createdRoom, userCreateRoom);
router.delete('/', protectRoute, removedRoom);

// Message
router.post('/:id', protectRoute, joinRoom, userJoinRoom, sendMessage);
router.get('/:id', protectRoute, joinRoom, userJoinRoom, getMessages);

export default router;
