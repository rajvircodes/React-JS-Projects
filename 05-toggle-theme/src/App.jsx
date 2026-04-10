import { useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import Card from './components/Card'
import './App.css'

export default function App() {
  // ← useState: isDark is the state, setIsDark updates it
  const [isDark, setIsDark] = useState(false)

  // ← Event Handler: passed as a prop to ThemeToggle
  const handleToggle = () => setIsDark(prev => !prev)

  return (
    // ← Conditional: className switches based on isDark
    <div className={isDark ? 'app dark' : 'app light'}>
      <h1>My App</h1>


      <ThemeToggle
        isDark={isDark}
        onToggle={handleToggle}
      />


      {isDark
        ? <Card message="Dark mode on" />
        : <Card message="Light mode on" />
      }
    </div>
  )
}