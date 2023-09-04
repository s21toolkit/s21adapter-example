import Elysia from "elysia"
import { Api } from "@/api"

const api = new Api({
	baseURL: process.env.ADAPTER_URL,
})

const app = new Elysia()

app.get("/user", async () => {
	const { data } = await api.s21Adapter.getCurrentUser({})

	return data
})

app.listen(8080)
