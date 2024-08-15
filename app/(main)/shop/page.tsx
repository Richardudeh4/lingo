import { FeedWrapper } from '@/components/feed-wrapper';
import { StickWrapper } from '@/components/sticky-wrapper'
import { UserProgress } from '@/components/user-progress'
import { getUserProgress, getUserSubscription } from '@/db/queries';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'
import { Items } from './items';
import { Promo } from '@/components/promo';

const ShopPage = async () => {
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();
    const [userProgress, userSubscription] = await Promise.all([ userProgressData, userSubscriptionData]);
    if(!userProgress || !userProgress.activeCourse){
       redirect('/courses');
    }
    const isPro = !!userSubscription?.isActive;
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6 '>
        <StickWrapper>
        <UserProgress
         activeCourse={userProgress.activeCourse}
         hearts={userProgress.hearts}
         points={userProgress.points}
         hasActiveSubscription={isPro}
         />
      {
      !isPro && (
        <Promo/>
      )} 
        </StickWrapper>
            <FeedWrapper>
                <div className='w-full flex flex-col items-center'>
                <Image src="/assets/shop.svg" alt="shop" width={90} height={90}/>
                <h1 className='text-center font-bold text-neutral-800 text-2xl my-6'>
                    Shop
                </h1>
                <p className='text-muted-foreground text-center text-lg mb-6 '>Spend your points on cool stuffs</p>
                <Items
                 hearts={userProgress.hearts}
                points={userProgress.points}
                hasActiveSubscription={isPro}
                />
                </div>
            </FeedWrapper>
    </div>
  )
}

export default ShopPage