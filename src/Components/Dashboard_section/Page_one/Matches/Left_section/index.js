import API from '@/API/API';
import apiUrl from '@/API/constant';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import io from 'socket.io-client';

export default function Index({ storage, setStateHeader, setuser_index }) {
  const dispatch = useDispatch();
  const Socket = io(apiUrl);

  const [Matches, setMatches] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [following, setFollowing] = useState(false); // Add 'following' state

  useEffect(() => {
    Socket.on('connection');
    Socket.on('show_notify', () => {
      API.fetchGet('/matches')
        .then((x) => {
          dispatch({
            type: 'matches',
            payload: x.data.shuffledMates,
          });
          setMatches(x.data.shuffledMates);
          setFollowing(x.data.Follower[0]?.isFollowing || false); // Set 'following' state
        })
        .catch((error) => console.log(error));
    });

    API.fetchGet('/matches')
      .then((x) => {
        dispatch({
          type: 'matches',
          payload: x.data.shuffledMates,
        });
        setMatches(x.data.shuffledMates);
        setFollowing(x.data.Follower[0]?.isFollowing || false); // Set 'following' state
      })
      .catch((error) => console.log(error));

      return()=>{
        Socket.off('connection')
      }
  }, []);

  return (
    <div className={`md:flex ${Matches.length > 0 && 'bg-whiteColor'} my-4 rounded-md grid grid-cols-2`}>
      {Matches.length > 0 ? (
        Matches.map((e, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className='p-4 relative'
          >
            {hoveredIndex === i && (
              <div className='w-[200px] h-[200px] flex flex-col justify-evenly items-center rounded-md bg-opacity-20 bg-red-600 absolute'>
                {/* Content to show on hover */}
                <div
                  onClick={() => {
                    dispatch({ type: 'matches_index', payload: i });
                    setuser_index(e.id);
                    setStateHeader('Active_girl');
                  }}
                  className='text-white flex font-bold text-md'
                >
                  <FaUser />
                  View Profile
                </div>
                {!following ? (
                  <div
                    onClick={() => {
                      API.fetchPost({ follow_user: e.id }, '/follow_me');
                      Socket.emit('notify', 'hi');
                      setFollowing(true); // Update 'following' state on click
                    }}
                    className='text-white font-bold text-md flex'
                  >
                    <BsStarFill />
                    Add to Favorite
                  </div>
                ) : (
                  <BsStarFill size={30} color='white' />
                )}
              </div>
            )}
            <img className='w-[200px] h-[200px] rounded-md' src={e.img} alt={e.user?.full_name} />
            <div className='p-1 mt-2 font-semibold flex justify-center text-blackColor text-lg'>{e?.user?.full_name}</div>
          </div>
        ))
      ) : (
        <div className='bg-whiteColor text-blackColor font-extrabold text-lg p-5 h-[200px] flex justify-center items-center w-full'>
          There are no matches.
        </div>
      )}
    </div>
  );
}
