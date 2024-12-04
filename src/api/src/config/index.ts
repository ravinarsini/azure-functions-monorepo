import { AppConfig, DatabaseConfig, ObservabilityConfig } from "./appConfig";
import dotenv from "dotenv";
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";
import { logger } from "../config/observability";
import { IConfig } from "config";

export const getConfig: () => Promise<AppConfig> = async () => {
    return {
        observability: {
            connectionString: "InstrumentationKey=6ae04c24-6438-4165-ab9a-525bcff5bbb5;IngestionEndpoint=https://australiaeast-1.in.applicationinsights.azure.com/;LiveEndpoint=https://australiaeast.livediagnostics.monitor.azure.com/;ApplicationId=ca3dcb7c-b273-4ffc-ab2c-d56314f30a32",
            roleName: "API"
        },
        database: {
            connectionString: "mongodb+srv://ravin:Hyderabad007@todoapi-db.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000",
            databaseName: "todoapi-db"
        }
    };
};

const populateEnvironmentFromKeyVault = async () => {
    // If Azure key vault endpoint is defined
    // 1. Login with Default credential (managed identity or service principal)
    // 2. Overlay key vault secrets on top of ENV vars
    const keyVaultEndpoint = process.env.AZURE_KEY_VAULT_ENDPOINT || "";

    if (!keyVaultEndpoint) {
        logger.warn("AZURE_KEY_VAULT_ENDPOINT has not been set. Configuration will be loaded from current environment.");
        return;
    }

    try {
        logger.info("Populating environment from Azure KeyVault...");
        const credential = new DefaultAzureCredential({});
        const secretClient = new SecretClient(keyVaultEndpoint, credential);

        for await (const secretProperties of secretClient.listPropertiesOfSecrets()) {
            const secret = await secretClient.getSecret(secretProperties.name);

            // KeyVault does not support underscores in key names and replaces '-' with '_'
            // Expect KeyVault secret names to be in conventional capitalized snake casing after conversion
            const keyName = secret.name.replace(/-/g, "_");
            process.env[keyName] = secret.value;
        }
    }
    catch (err: any) {
        logger.error(`Error authenticating with Azure KeyVault.  Ensure your managed identity or service principal has GET/LIST permissions. Error: ${err}`);
        throw err;
    }
};