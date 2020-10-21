import React from 'react';

import { FormInput } from 'shards-react';

export default function Search({ show }) {
  return(
    <div>
      <FormInput type="search" placeholder="Search"/>
    </div>
  );
}
