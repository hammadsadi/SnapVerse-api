import app from "./app";
import { Server } from 'http'
import mongoose from "mongoose";
import config from './app/config';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.DATABASE_URL as string);
    // Server Connection
    server = app.listen(config.PORT, () => {
      console.log(`✅ SnapVerse listening on PORT ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
