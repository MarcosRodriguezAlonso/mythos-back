import mongoose from "mongoose";
import chalk from "chalk";

const connectDataBase = async (url: string): Promise<void> => {
  try {
    await mongoose.connect(url);
    console.log(chalk.green("Succesfully connected to database"));
  } catch (error) {
    console.log(chalk.red("Error connecting to database"));
  }
};

export default connectDataBase;
