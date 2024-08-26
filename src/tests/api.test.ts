import api from '../api'

describe('Success requests for Operators data', () => {
  it('Should return operators array', async () => {
    const response = await api.getOperators()

    expect(response.status).toBe(200)
    expect(response.data.length).toBeTruthy()
    expect(response.data[0]).toHaveProperty('createdAt')
    expect(response.data[0]).toHaveProperty('name')
    expect(response.data[0]).toHaveProperty('avatar')
    expect(response.data[0]).toHaveProperty('isWorking')
    expect(response.data[0]).toHaveProperty('id')
  })

  it('Should return operator addon array', async () => {
    const response = await api.getOperatorAddon()

    expect(response.status).toBe(200)
    expect(response.data.length).toBeTruthy()
    expect(response.data[0]).toHaveProperty('fieldName')
    expect(response.data[0]).toHaveProperty('text')
    expect(response.data[0]).toHaveProperty('isChecked')
    expect(response.data[0]).toHaveProperty('id')
  })
})
