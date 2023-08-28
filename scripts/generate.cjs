const path = require("node:path")

const { generateApi } = require("swagger-typescript-api")

const specPath = path.resolve(process.cwd(), "spec/s21adapter.json")
const apiPath = path.resolve(process.cwd(), "src/api")

generateApi({
	name: "index.ts",
	input: specPath,
	output: apiPath,
	httpClientType: "axios",
	moduleNameFirstTag: true,
	cleanOutput: true,
	addReadonly: true,
	extractRequestBody: true,
})
