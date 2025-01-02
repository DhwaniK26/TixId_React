const cron = require('node-cron');
import { AppDataSource } from "./db";
import { SeatStatus } from "./entities/seatsStatus";
// cron.schedule("*/10 * * * *", async () => {
//     try {
//         const result = await AppDataSource.query(`
//             UPDATE seat_status ss
//             SET status = true
//             WHERE ss.showtimeid IN (
//                 SELECT st.showtimeid
//                 FROM showtime st
//                 WHERE st.time < NOW()
//             )
//             AND ss.status = false;
//         `);

//         console.log("Cron executed successfully:", result);
//     } catch (error) {
//         console.error("Error in cron job:", error);
//     }
// });
cron.schedule("*/10 * * * *", async () => {
    console.log("Cron job is running...");
});

