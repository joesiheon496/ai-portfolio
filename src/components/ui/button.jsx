export function Button({ children, onClick, className = '', variant = 'default', size = 'md' }) {
    return (
      <button
        onClick={onClick}
        className={`px-3 py-1 text-sm rounded-md border ${className}`}
      >
        {children}
      </button>
    );
  }
  