import { DataTypeDefaults } from "typeorm/driver/types/DataTypeDefaults";
import AbstractDriver from "./AbstractDriver";
import IConnectionOptions from "../IConnectionOptions";
import { Entity } from "../models/Entity";
import IGenerationOptions from "../IGenerationOptions";
export default class SqliteDriver extends AbstractDriver {
    defaultValues: DataTypeDefaults;
    readonly standardPort = 0;
    readonly standardUser = "";
    readonly standardSchema = "";
    private sqliteLib;
    private sqlite;
    private db;
    private tablesWithGeneratedPrimaryKey;
    GetAllTablesQuery: any;
    constructor();
    GetAllTables(schema: string, dbNames: string, tableNames: string[]): Promise<Entity[]>;
    GetCoulmnsFromEntity(entities: Entity[]): Promise<Entity[]>;
    GetIndexesFromEntity(entities: Entity[]): Promise<Entity[]>;
    GetRelations(entities: Entity[], schema: string, dbNames: string, generationOptions: IGenerationOptions): Promise<Entity[]>;
    DisconnectFromServer(): Promise<void>;
    ConnectToServer(connectionOptons: IConnectionOptions): Promise<void>;
    CreateDB(): Promise<void>;
    UseDB(dbName: string): Promise<boolean>;
    DropDB(): Promise<void>;
    CheckIfDBExists(): Promise<boolean>;
    ExecQuery<T>(sql: string): Promise<T[]>;
    private static ReturnDefaultValueFunction;
}
