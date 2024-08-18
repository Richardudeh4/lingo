import { auth } from "@clerk/nextjs"

const adminIds  = [
    "user_2ki87PWveKLmApnskq9L21pEb1X",
    "user_2klfl8EMjgxNgqv7882VYN71ORR"
];
export const getIsAdmin = async () => {
     const {userId} = await auth();
     if(!userId){
        return false;
     }
     return adminIds.indexOf(userId)

}