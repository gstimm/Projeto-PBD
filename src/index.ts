import app from "./app";
import dotenv from "dotenv";
import path from "path";
import favicon from "serve-favicon";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

app.use(favicon(path.join(__dirname, "../public/favicon.ico")));

export const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export default app;
