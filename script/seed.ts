import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
//@ts-ignore
const db = drizzle(sql, {schema});
const main = async () => {
    try{
        console.log("Seeding database");
        await db.delete(schema.courses);
        await db.delete(schema.userProgress); 
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userSubscription);
        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc: "/assets/spain.svg"
            },
            {
                id: 2,
                title: "French",
                imageSrc: "/assets/france.svg"
            }, 
             {
                id: 3,
                title: "German",
                imageSrc: "/assets/german.svg"
            },
            {
                id: 4,
                title: "Croatian",
                imageSrc: "/assets/croatia.svg"
            }
        ])
        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basics of Spanish",
                order: 1,
            }
        ]);
        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order:1,
                title: "Nouns",
            },
            {
                id: 2,
                unitId: 1,
                order:2,
                title: "Verbs",
            },
            {
                id: 3,
                unitId: 1,
                order:3,
                title: "Verbs",
            },
            {
                id: 4,
                unitId: 1,
                order:4,
                title: "Verbs",
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "Verbs",
            },
           
        ]);
        await db.insert(schema.challenges).values([
            {
                id:1,
                lessonId: 1,
                type: "SELECT",
                order:1,
                question: 'Which one of these is "The Man"?'
            },
            {
                id:2,
                lessonId: 1,
                type: "ASSIST",
                order:2,
                question: '"The Man"'
            },   
             {
                id:3,
                lessonId: 1,
                type: "SELECT",
                order:3,
                question: 'which one of these is "The Robot"?'
            },

        ]);
       
        await db.insert(schema.challenges).values([
            {
                id:4,
                lessonId: 2,
                type: "SELECT",
                order:1,
                question: 'Which one of these is "The Man"?'
            },
            {
                id:5,
                lessonId: 2,
                type: "ASSIST",
                order:2,
                question: '"The Man"'
            },   
             {
                id:6,
                lessonId: 2,
                type: "SELECT",
                order:3,
                question: 'which one of these is "The Robot"?'
            },

        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 1,
                imageSrc: '/assets/man.jpg',
                correct: true,
                text: "el hombre",
                audioSrc: '/es_man.wav',
            },
            {
           
                challengeId: 1,
                imageSrc: '/assets/woman.jpg',
                correct: false,
                text: "la mujer",
                audioSrc: '/es_woman.wav',
            },
            {
             
                challengeId: 1,
                imageSrc: '/assets/robot.jpg',
                correct: false,
                text: "el robot",
                audioSrc: '/es_robot.wav',
            },
        ])
        await db.insert(schema.challengeOptions).values([
            {
            
                challengeId: 2,
                correct: true,
                text: "el hombre",
                audioSrc: '/es_man.wav',
            },
            {
              
                challengeId: 2,
                correct: false,
                text: "la mujer",
                audioSrc: '/es_woman.wav',
            },
            {
            
                challengeId: 2,
                correct: false,
                text: "el robot",
                audioSrc: '/es_robot.wav',
            },
        ])
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 3,
                imageSrc: '/assets/man.jpg',
                correct: false,
                text: "el hombre",
                audioSrc: '/es_man.wav',
            },
            {
           
                challengeId: 3,
                imageSrc: '/assets/woman.jpg',
                correct: false,
                text: "la mujer",
                audioSrc: '/es_woman.wav',
            },
            {
             
                challengeId: 3,
                imageSrc: '/assets/robot.jpg',
                correct: true,
                text: "el robot",
                audioSrc: '/es_robot.wav',
            },
        ])
        console.log("Seeding finished")
    }catch(error){
        console.error(error);
        throw new Error("Failed to seed the database");
    };
}

main();