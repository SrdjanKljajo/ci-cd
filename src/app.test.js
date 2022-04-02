const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/test endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/test")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello world");
    })

    it("should return a new response", async () => {
        const response = await request.get("/test/new")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello new world");
    })

    it("should return a srki response", async () => {
        const response = await request.get("/test/srki")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello srki world");
    })
})