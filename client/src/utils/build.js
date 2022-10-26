const BUILD_PARAMS = {
    DEFAULT_WEBAPI_URL: "http://localhost:8800/api",
};

// проверка что все переменные заданы или имеют значение по дефолту

for (const paramName in BUILD_PARAMS) {
    const typedParamName = paramName;
    const paramValue = BUILD_PARAMS[typedParamName];
    if (paramValue === undefined || (typeof paramValue === "number" && isNaN(paramValue))) {
        throw new Error(`Invalid value '${paramValue}' of environment variable '${paramName}'`);
    }
}

export default BUILD_PARAMS;
