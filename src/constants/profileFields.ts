import type { ProfileField } from '../types/profile';

export const profileFields: ProfileField[] = [
  // Личные данные
  { name: 'firstName', label: 'Имя', type: 'string' },
  { name: 'lastName', label: 'Фамилия', type: 'string' },
  {
    name: 'sex',
    label: 'Пол',
    type: 'select',
    options: [
      { label: 'Мужской', value: 'male' },
      { label: 'Женский', value: 'female' },
    ],
  },
  { name: 'birthDate', label: 'Дата рождения', type: 'date' },
  { name: 'age', label: 'Возраст', type: 'number' },

  // Контакты
  { name: 'email', label: 'Email', type: 'string' },
  { name: 'phone', label: 'Телефон', type: 'string' },

  // Локация
  { name: 'city', label: 'Город', type: 'string' },
  { name: 'country', label: 'Страна', type: 'string' },

  // Работа
  { name: 'profession', label: 'Профессия', type: 'string' },
  {
    name: 'employmentStatus',
    label: 'Статус занятости',
    type: 'select',
    options: [
      { label: 'Работаю', value: 'employed' },
      { label: 'Студент', value: 'student' },
      { label: 'В поиске работы', value: 'job_seeker' },
    ],
  },
  { name: 'companyName', label: 'Компания', type: 'string' },
  { name: 'jobPosition', label: 'Должность', type: 'string' },
  { name: 'experience', label: 'Опыт работы, лет', type: 'number' },

  // Образование и язык
  {
    name: 'education',
    label: 'Образование',
    type: 'select',
    options: [
      { label: 'Среднее', value: 'secondary' },
      { label: 'Среднее специальное', value: 'vocational' },
      { label: 'Высшее', value: 'higher' },
    ],
  },
  {
    name: 'englishLevel',
    label: 'Уровень английского',
    type: 'select',
    options: [
      { label: 'Beginner', value: 'beginner' },
      { label: 'Elementary', value: 'elementary' },
      { label: 'Intermediate', value: 'intermediate' },
      { label: 'Advanced', value: 'advanced' },
    ],
  },
  {
    name: 'learningGoals',
    label: 'Цели изучения английского',
    type: 'checkbox',
    options: [
      { label: 'Работа', value: 'work' },
      { label: 'Путешествия', value: 'travel' },
      { label: 'Общение', value: 'communication' },
      { label: 'Учеба', value: 'education' },
    ],
  },

  // Интересы
  {
    name: 'interests',
    label: 'Интересы',
    type: 'checkbox',
    options: [
      { label: 'Спорт', value: 'sport' },
      { label: 'Путешествия', value: 'travel' },
      { label: 'Музыка', value: 'music' },
      { label: 'Книги', value: 'books' },
    ],
  },

    {
    name: 'preferredLanguage',
    label: 'Предпочитаемый язык',
    type: 'radio',
    options: [
      { label: 'Русский', value: 'russian' },
      { label: 'English', value: 'english' },
    ],
  },
  {
    name: 'contactMethod',
    label: 'Предпочтительный способ связи',
    type: 'radio',
    options: [
      { label: 'Email', value: 'email' },
      { label: 'Телефон', value: 'phone' },
    ],
  },

  // О себе
  { name: 'about', label: 'О себе', type: 'text' },
];