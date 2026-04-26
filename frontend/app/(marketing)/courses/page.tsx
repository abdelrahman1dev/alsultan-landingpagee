"use client";
import { useAuth } from '@/app/hooks/useAuth';
import { redirect } from 'next/navigation';
import Courses from '../sections/Courses';

function page() {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    redirect('/user/courses');
  }
  return (
    <div>
      <Courses />
    </div>
  );
}

export default page;
