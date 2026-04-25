import React from 'react';

import Courses from '@/app/(marketing)/sections/Courses';

async function page() {
  await new Promise((res) => setTimeout(res, 2000));


  return (
    <div>
      <Courses />
    </div>
  );
}

export default page;
