export default interface IConnectionOptions {
    host: string;
    port: number;
    databaseName: string;
    user: string;
    password: string;
    databaseType: "mssql" | "postgres" | "mysql" | "mariadb" | "oracle" | "sqlite";
    schemaName: string;
    ssl: boolean;
    skipTables: string[];
}
export declare function getDefaultConnectionOptions(): IConnectionOptions;
