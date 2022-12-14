import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Неверный email').isEmail(),
  body('password', 'Неверная длинна пароля').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Неверный email').isEmail(),
  body('password', 'Неверная длинна пароля').isLength({ min: 5 }),
  body('fullName', 'Неверное имя').isLength({ min: 3 }),
  body('avatarUrl', 'Неверный Url картинки').optional().isURL(),
];
