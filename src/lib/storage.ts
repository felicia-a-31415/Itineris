export type UserData = {
  name: string;
  year: string;
  favoriteSubjects: string[];
  strongSubjects: string[];
  weakSubjects: string[];
  lifeGoals: string;
};

const KEY = 'itineris:user:v1';

export function loadUserData(): UserData | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as UserData) : null;
  } catch {
    return null;
  }
}

export function saveUserData(data: UserData) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // storage full or disabled — ignore
  }
}

export function clearUserData() {
  localStorage.removeItem(KEY);
}
