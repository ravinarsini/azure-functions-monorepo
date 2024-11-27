import { createApp } from "./app";
import { logger } from "./config/observability";

const main = async () => {
    const app = await createApp();
    const port = 3100;

    app.listen(port, () => {
        logger.info(`Started listening on port ${port}`);
    });
};

main();