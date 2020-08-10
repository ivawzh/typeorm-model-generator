"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultGenerationOptions = exports.eolConverter = void 0;
const os_1 = require("os");
const path = require("path");
exports.eolConverter = {
    LF: "\n",
    CRLF: "\r\n",
};
function getDefaultGenerationOptions() {
    const generationOptions = {
        resultsPath: path.resolve(process.cwd(), "output"),
        pluralizeNames: true,
        noConfigs: false,
        convertCaseFile: "pascal",
        convertCaseEntity: "pascal",
        convertCaseProperty: "camel",
        convertEol: os_1.EOL === "\n" ? "LF" : "CRLF",
        propertyVisibility: "none",
        lazy: false,
        activeRecord: false,
        skipRelationships: false,
        extendAbstractClass: "",
        generateConstructor: false,
        customNamingStrategyPath: "",
        relationIds: false,
        strictMode: "none",
        skipSchema: false,
        indexFile: false,
        exportType: "named",
        exportAbstractClass: false,
    };
    return generationOptions;
}
exports.getDefaultGenerationOptions = getDefaultGenerationOptions;
//# sourceMappingURL=IGenerationOptions.js.map