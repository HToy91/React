import { useEffect, useState } from 'react';

const UseEffectDemo = () => {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    setRenderCount((prevCount) => prevCount + 1);
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <>
      <div className="header">useEffect Demo</div>
      <p>Render Count: {renderCount}</p>
    </>
  );
};

export default UseEffectDemo;
