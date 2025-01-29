const LoadingAnimation = () => {
  return (
    <div
      className="text-center loading"
      style={{
        background: 'transparent',
        zIndex: 5
      }}
    >
      <svg width="205" height="250" viewBox="0 0 40 50">
        <polygon strokeWidth="1" stroke="#7f56d9" fill="none" points="20, 1 40,40 1,40"></polygon>
        <text fill="#7f56d9" x="5" y="47">
          Loading
        </text>
      </svg>
    </div>
  );
};

export default LoadingAnimation;
