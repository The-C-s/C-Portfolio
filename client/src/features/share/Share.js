import React from 'react';
import { useParams } from 'react-router-dom';

export default function Share() {

  let { username } = useParams();

  console.log(`Share view for '${username}'`);

  return(
    <div>
      
    </div>
  );
}
