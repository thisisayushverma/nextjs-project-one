import sequelize from "./src/lib/sequelize";

async function test(){
    try {
        await sequelize.authenticate()
        console.log("work done");
    } catch (error) {
        console.log("work not done");
    }

}


test();