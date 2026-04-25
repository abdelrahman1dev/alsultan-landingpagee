"use client";
import { useEffect, useState } from 'react';
import { api } from '@/app/hooks/api';

export function useCourses() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCourses() {
      try {
        const res = await api.get('/courses');

        if (res.data.data) {
          setCourses(res.data.data);
        } else {
          setCourses([]);
        }
      } catch (err) {
        console.error(err);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    }

    getCourses();
  }, []);

  return { courses, loading };
}