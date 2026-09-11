import type { ProfileState } from '../types/profile';

const PROFILE_STORAGE_KEY = 'profile';

export const loadProfileFromStorage = (): Partial<ProfileState> | null => {
    try {
        const raw = localStorage.getItem(PROFILE_STORAGE_KEY);

        if (!raw) {
            return null;
        }

        return JSON.parse(raw) as Partial<ProfileState>;
    } catch (error) {
        console.error('Не удалось прочитать профиль из localStorage', error);
        return null;
    }
};

export const saveProfileToStorage = (profile: ProfileState): void => {
    try {
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    } catch (error) {
        console.error('Не удалось сохранить профиль в localStorage', error);
    }
};