import humps from 'humps'
import formService from '../services/form.service.js'

export default {
  createForm: async (req, res) => {
    const { date, issueId, detail, userId, departmentId } = humps.camelizeKeys(req.body)
    const mapped = mapForCreate({ date, issueId, detail, userId, departmentId })
    const created = await formService.createOne(mapped)

    res.json({
      success: true,
      data: created
    }).status(201)
  },
  getAllForms: async (req, res) => {
    const forms = await formService.getAll()

    res.json({
      success: true,
      data: forms
    }).status(200)
  }
}

const mapForCreate = (payload) => {
  const { date } = payload

  return {
    ...payload,
    date: new Date(date),
  }
}