import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.mri6gdq.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Db Connection Successfully");
  } catch (error) {
    console.log("Connection Error with Database", error);
  }
};

export default Connection;
