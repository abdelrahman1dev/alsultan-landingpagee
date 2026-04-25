'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { api } from './../hooks/api';
import { useCourses } from '../hooks/useCourses';

export default function CourseImage({ title }: { title: string }) {
 const { courses } = useCourses();
 const course = courses.find((c: any) => c.title === title);

  return (
    <Image
      src={course?.image_url ? course.image_url : '/default-course-image.jpg'}
      alt={title}
      width={600}
      height={400}
      className="w-full h-64 object-cover rounded-t-2xl z-100"
    />
  );
}
