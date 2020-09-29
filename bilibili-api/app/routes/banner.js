import Router from 'koa-router'
import axios from 'axios'
import { banner } from './urlConfig'

const router = Router()

router.get('/banner', async (ctx, next) => {
  let response = await axios.get(banner) // 跳转至b站API
  ctx.body = response.data
})

export default router