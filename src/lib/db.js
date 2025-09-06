// import mysql from "mysql2/promise"

// let connection;

// export async function connectDB(){
//     try {
//         if(connection) return connection;
    
//         connection = await mysql.createConnection({
//             host:process.env.DB_HOST,
//             user:process.env.DB_USER,
//             password:process.env.DB_PASSWORD,
//             database:process.env.DB_NAME,
//             port:process.env.DB_PORT
//         })

//         console.log("db connected");
//         return connection;
//     } catch (error) {
//         connection = undefined;
//         console.log("error while connecting to db",error);
//     }
// }