import { WithLengthColumnType, WithPrecisionColumnType, WithWidthColumnType } from "typeorm/driver/types/ColumnTypes";
import { DataTypeDefaults } from "typeorm/driver/types/DataTypeDefaults";
import IConnectionOptions from "../IConnectionOptions";
import { Entity } from "../models/Entity";
import { RelationInternal } from "../models/RelationInternal";
import IGenerationOptions from "../IGenerationOptions";
export default abstract class AbstractDriver {
    abstract standardPort: number;
    abstract standardSchema: string;
    abstract standardUser: string;
    abstract defaultValues: DataTypeDefaults;
    ColumnTypesWithWidth: WithWidthColumnType[];
    ColumnTypesWithPrecision: WithPrecisionColumnType[];
    ColumnTypesWithLength: WithLengthColumnType[];
    abstract GetAllTablesQuery: (schema: string, dbNames: string, tableNames: string[]) => Promise<{
        TABLE_SCHEMA: string;
        TABLE_NAME: string;
        DB_NAME: string;
    }[]>;
    static FindManyToManyRelations(dbModel: Entity[]): Entity[];
    GetDataFromServer(connectionOptions: IConnectionOptions, generationOptions: IGenerationOptions): Promise<Entity[]>;
    abstract ConnectToServer(connectionOptons: IConnectionOptions): any;
    GetAllTables(schema: string, dbNames: string, tableNames: string[]): Promise<Entity[]>;
    static GetRelationsFromRelationTempInfo(relationsTemp: RelationInternal[], entities: Entity[], generationOptions: IGenerationOptions): Entity[];
    abstract GetCoulmnsFromEntity(entities: Entity[], schema: string, dbNames: string): Promise<Entity[]>;
    abstract GetIndexesFromEntity(entities: Entity[], schema: string, dbNames: string): Promise<Entity[]>;
    abstract GetRelations(entities: Entity[], schema: string, dbNames: string, generationOptions: IGenerationOptions): Promise<Entity[]>;
    static FindPrimaryColumnsFromIndexes(dbModel: Entity[]): void;
    abstract DisconnectFromServer(): any;
    abstract CreateDB(dbName: string): any;
    abstract DropDB(dbName: string): any;
    abstract UseDB(dbName: string): any;
    abstract CheckIfDBExists(dbName: string): Promise<boolean>;
    protected static escapeCommaSeparatedList(commaSeparatedList: string): string;
}
