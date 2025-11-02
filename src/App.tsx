import './styles/globals.css'
import { useState } from 'react'
import Assistant from './components/Assistant.tsx'
import Chrono from './components/Chrono.tsx'
import Conseils from './components/Conseils.tsx'
import Dashboard from './components/Dashboard.tsx'
import NotesRapides from './components/NotesRapides.tsx'
import Parametres from './components/Parametres.tsx'
import Statistiques from './components/Statistiques.tsx'
import Todo from './components/Todo.tsx'
import Welcome from './components/Welcome.tsx'
import WelcomeSurvey from './components/WelcomeSurvey.tsx'

// Define the possible screens as a TypeScript union type
type Screen =
  | 'assistant'
  | 'chrono'
  | 'conseils'
  | 'dashboard'
  | 'notesRapides'
  | 'parametres'
  | 'statistiques'
  | 'todo'
  | 'welcome'
  | 'welcomeSurvey'

// Define the UserData interface
interface UserData {
  name: string;
  year: string;
  favoriteSubjects: string[];
  strongSubjects: string[];
  weakSubjects: string[];
  lifeGoals: string;
}

export default function App() {
  // State to manage the current screen and user data
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome'); // Initial screen is 'welcome'
  // State to store user data after onboarding
  const [userData, setUserData] = useState<UserData | null>(null); // Initial user data is null

  // Called by WelcomeSurvey when onboarding is complete
  const handleOnboardingComplete = (data: UserData) => {
    setUserData(data);
    setCurrentScreen('dashboard');
  };

  // Called by Parametres to update user data
  const handleSettingsSave = (data: UserData) => {
    setUserData(data);
  };

  const renderScreen = () => {
    switch (currentScreen) {

      // AI assistant screen
      case 'assistant':
        return <Assistant onBack={() => setCurrentScreen('dashboard')} />;

      // Timer screen
      case 'chrono':
        return <Chrono onBack={() => setCurrentScreen('dashboard')} />;

      case 'conseils':
        return <Conseils onBack={() => setCurrentScreen('dashboard')} />;

      // Main dashboard screen
      case 'dashboard':
        return (
          <Dashboard
            onNavigate={(screen: string) => setCurrentScreen(screen as Screen)} // Lets the dashboard request navigation to any screen
            userName={userData?.name}
          />
        );

      case 'notesRapides':
        return <NotesRapides onBack={() => setCurrentScreen('dashboard')} />;
      case 'parametres':
        return <Parametres onNavigate={setCurrentScreen} userData={userData} onSave={handleSettingsSave} />;
      case 'statistiques':
        return <Statistiques onNavigate={setCurrentScreen} />;
      case 'todo':
        return <Todo onNavigate={setCurrentScreen} />;
      
      // Onboarding screen
      case 'welcome':
        return <Welcome onGetStarted={() => setCurrentScreen('welcomeSurvey')} />;

      // Welcome survey screen
      case 'welcomeSurvey':
        return <WelcomeSurvey onComplete={handleOnboardingComplete} />;

      // Fallback to welcome screen
      default:
        return <Welcome onGetStarted={() => setCurrentScreen('welcomeSurvey')} />;
    }
  };

}
