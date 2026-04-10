
export default function ThemeToggle({ isDark, onToggle }) {
    return (
        <button
            onClick={onToggle}
            className="toggle-btn"
            aria-label="Toggle theme"
        >
            {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
    )
}