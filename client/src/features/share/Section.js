import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Row from 'react-bootstrap/Row';

export default function Section({ children, name, scrollHandler, className }) {

  const { ref, inView } = useInView();
  const [isInView, setInView] = useState(inView);

  // Send name variable back when this section comes into view
  useEffect(() => {
    if (inView !== isInView) {
      scrollHandler(name, inView);
      setInView(inView);
    }
  },[inView, setInView, isInView, name, scrollHandler]);

  return(
    <Row ref={ref} className={`${className} share-section`}>
      {children}
    </Row>
  );
}
