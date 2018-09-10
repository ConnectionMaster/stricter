module.exports = {
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(\\.|/)test\\.ts$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],
    "testEnvironment": "node",
    "collectCoverage": true,
    "collectCoverageFrom" : ["src/**/*.ts", "!src/types/**", "!src/*.ts", "!src/**/test.ts"],
};
