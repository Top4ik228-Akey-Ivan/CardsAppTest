import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ProfileState } from '../../types/profile';
import { loadProfileFromStorage, saveProfileToStorage } from '../../utils/profileStorage';

const defaultState: ProfileState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: null,
    birthDate: null,
    city: '',
    country: '',
    profession: '',
    employmentStatus: '',
    companyName: '',
    jobPosition: '',
    experience: null,
    education: '',
    englishLevel: '',
    preferredLanguage: '',
    interests: [],
    learningGoals: [],
    contactMethod: '',
    about: '',
    sex: null,
};

const initialState: ProfileState = {
    ...defaultState,
    ...loadProfileFromStorage(),
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (
      state: ProfileState,
      action: PayloadAction<ProfileState>,
    ) => {
      Object.assign(state, action.payload);
      saveProfileToStorage(state);
    },
  },
});

export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;