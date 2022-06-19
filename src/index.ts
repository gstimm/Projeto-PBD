import app from "./app";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

export const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export default app;
