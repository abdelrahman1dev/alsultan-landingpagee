"use client";
import VideoPlayer from '@/app/components/VideoPlayer';
import { useEffect, useState } from 'react';
import { api } from '@/app/hooks/api';
import { useParams } from 'next/navigation';


function page() {
  const [videoData, setVideoData] = useState<any>(null);
  const {sid} = useParams();

  useEffect(() => {
    async function loadVideo() {
      const res = await api.get(`/lectures/${sid}/videos`);

      const data = res.data.data[0].video_id;
      console.log('video data:', data);

      setVideoData(data);
    }

    loadVideo();
  }, []);


  return (
    <div className=" w-full min-h-screen flex items-center justify-center flex-col gap-8">
      <h1>video page</h1>
      <VideoPlayer videoData={"2d076a459fca4e82a5f68bbb25a51fce"} />
    </div>
  );
}

export default page;
