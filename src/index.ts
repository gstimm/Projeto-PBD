import app from "./app";
import process from "process";

import { PORT } from "./config";

// app.shutdown = () => process.exit();

// process.on("SIGINT", () => app.shutdown());

// process.on("SIGTERM", () => app.shutdown());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export default app;
