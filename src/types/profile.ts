export interface ProfileState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number | null;
  birthDate: string | null;
  city: string;
  country: string;
  profession: string;
  employmentStatus: string;
  companyName: string;
  jobPosition: string;
  experience: number | null;
  education: string;
  englishLevel: string;
  preferredLanguage: string;
  interests: string[];
  learningGoals: string[];
  contactMethod: string;
  about: string;
  sex: 'male' | 'female' | null
}

export type ProfileFieldType =
  | 'string'
  | 'number'
  | 'text'
  | 'date'
  | 'select'
  | 'checkbox'
  | 'radio';

export interface ProfileFieldOption {
  label: string;
  value: string;
}

export interface ProfileField {
  name: keyof ProfileState;
  label: string;
  type: ProfileFieldType;
  options?: ProfileFieldOption[];
  hidden?: boolean;
  disabled?: boolean;
}