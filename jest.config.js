module.exports = {
    transform: {
        "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`, `cypress`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/loadershim.js`],
    testEnvironment: `jsdom`,
    setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
}
