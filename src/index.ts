import { Api } from "@/api"

const api = new Api({
	baseURL: "http://localhost:1323",
})

const response = await api.s21Adapter.getCurrentUser({})

console.log("User data:", response.data)
