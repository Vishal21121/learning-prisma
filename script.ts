import { PrismaClient } from '@prisma/client'
//* we can find what query is being run behind the scenes using the below syntax
// const prisma = new PrismaClient({ log: ['query'] })


const prisma = new PrismaClient()

async function main() {
    // await prisma.user.deleteMany()

    //* CREATE OPERATION
    // const user = await prisma.user.create({
    //     data: {
    //         name: "vishal",
    //         email: "vishal@gmail.com",
    //         age: 21,
    //         // for creating a field related to another table we need to perform the below operation.
    //         UserPreference: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         },
    //     },
    //     //* for getting the field which is related to another table we need to do this in the below way.
    //     // include: {
    //     //     UserPreference: true
    //     // }

    //     //* we can use select as well to select specific details
    //     //* But we can use either select or include
    //     select: {
    //         name: true,
    //         UserPreference: {
    //             select: {
    //                 id: true
    //             }
    //         }
    //     }
    // })

    // const users = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "vishal singh",
    //             age: 21,
    //             email: "one@gmail.com"
    //         },
    //         {
    //             name: "vishal singh",
    //             age: 22,
    //             email: "two@gmail.com"
    //         },
    //     ]
    // })

    // READ OPERATION
    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: "one@gmail.com"
    //     }
    //* here we can use select or include as discussed in create operation
    // })

    // const user = await prisma.user.findFirst({
    //     where: {
    //         name: "vishal singh"
    //     }
    // })

    const user = await prisma.user.findMany({
        where: {
            name: "vishal singh"
        },
        // distinct: ["name"]
        //* we can achieve pagination using take and skip
        //* take is for taking the number of values and skip is for skipping the values.
        take: 2,
        skip: 1
    })

    console.log("found user details", user)
}

main().catch(e => {
    console.log(e.message)
}).finally(async () => {
    await prisma.$disconnect()
})