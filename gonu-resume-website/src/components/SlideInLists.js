import React from 'react';
import './FadeInSection.css';

function SlideInLists(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`slide-in-section ${isVisible ? 'show' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default SlideInLists