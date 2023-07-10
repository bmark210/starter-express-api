import { body } from "express-validator";

export const registerValidation = [
  body("username", "Имя пользователя должно быть уникальным").isString(),
  body("email", "Не верный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
  body("fullName", "Укажите имя").isLength({ min: 3 }),
];

export const loginValidation = [
  body("email", "Не верный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
];

// export const postCreateValidation = [
//   body("title", "Введите заголовок статьи").isLength({ min: 3 }).isString(),
//   body("text", "Введите текст статьи").isLength({ min: 3 }).isString(),
//   body("tags", "Неверный формат тэгов (укажите массив)").optional().isString(),
//   body("imageUrl", "Неверная ссылка на изображение заголовок статьи")
//     .optional()
//     .isString(),
// ];