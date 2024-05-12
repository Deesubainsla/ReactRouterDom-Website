import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github(){
    const data = useLoaderData();
    // const [data, setData] = useState("");
    // const trialprac = async()=>{
    //     const trial = await fetch("https://api.github.com/users/Deesubainsla");
    //     return trial;
    // }
    // useEffect(()=>{
    //     const trial = fetch("https://api.github.com/users/Deesubainsla");
    //     console.log(trial);
    //     // .then((res)=> res.json())
    //     // .then((res)=> setData(res));
    //    const trial2 = trialprac();
    //    console.log(trial2);
        
    // },[])

  return<>
        <div className='flex flex-col justify-center items-center bg-orange-700'>
            <div className='w-full py-8 text-4xl text-slate-100 font-bold'>Github followers: {data.followers} </div>
            <img src={`${data.avatar_url}`} alt="Github image" className='w-60 pb-8' />
        </div>
  </>
}

export const getGithubInfo = async() => {
        const data = await fetch("https://api.github.com/users/Deesubainsla");
        return data.json();
}