import { createApp } from "./app";
import { logger } from "./config/observability";

const main = async () => {
    console.log("received0");
    const app = await createApp();
    console.log("received8");
    const port = process.env.FUNCTIONS_CUSTOMHANDLER_PORT || process.env.PORT || 3100;
    console.log("received10");
    app.listen(port, () => {
        logger.info(`Started listening on port ${port}`);
    });
};

main();