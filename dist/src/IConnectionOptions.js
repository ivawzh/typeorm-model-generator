"use strict";
// TODO: change name
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultConnectionOptions = void 0;
function getDefaultConnectionOptions() {
    const connectionOptions = {
        host: "127.0.0.1",
        port: 0,
        databaseName: "",
        user: "",
        password: "",
        databaseType: undefined,
        schemaName: "",
        ssl: false,
        skipTables: [],
    };
    return connectionOptions;
}
exports.getDefaultConnectionOptions = getDefaultConnectionOptions;
//# sourceMappingURL=IConnectionOptions.js.map