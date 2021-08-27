import db from '../../../configs/db.config.js'
import { formModel } from '../models/form.model.js'
import { StatusEnum } from '../../../common/status.enum.js'
const tableName = 'forms'

const doQuery = (sql, options) => {
  return new Promise ((resolve, reject) => {
    db.query(sql, options, (err, res) => {
      if (err) {
        throw err
      }

      resolve(res)
    })
  })
}

export default {
  createOne: (form) => {
    return doQuery(`INSERT INTO ${tableName} SET ?`, { ...form, createdAt: new Date(), updatedAt: new Date(), status: StatusEnum.ACTIVE })
  },
  getAll: (columns = formModel) => {
    const options = [columns, tableName, StatusEnum.ACTIVE]

    return doQuery(`SELECT ?? FROM ?? WHERE status = ?`, options)
  }
}


