// Example utility function
const addNumbers = (a, b) => a + b

// Example asynchronous function
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded successfully")
    }, 1000)
  })
}

// Jest tests
test("adds two numbers correctly", () => {
  const result = addNumbers(2, 3)
  expect(result).toBe(5)
})

test("adds negative numbers correctly", () => {
  const result = addNumbers(-5, 3)
  expect(result).toBe(-2)
})

test("adds zero to a number correctly", () => {
  const result = addNumbers(10, 0)
  expect(result).toBe(10)
})

test("fetchData resolves with the correct message", async () => {
  const data = await fetchData()
  expect(data).toBe("Data loaded successfully")
})

test("async function resolves in a timely manner", async () => {
  const startTime = Date.now()
  await fetchData()
  const endTime = Date.now()
  const elapsedTime = endTime - startTime
  expect(elapsedTime).toBeGreaterThanOrEqual(1000)
  expect(elapsedTime).toBeLessThan(1100)
})
