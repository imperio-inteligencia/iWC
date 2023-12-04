import http from '@standard/http'
import magic from '@standard/magic'
import middleware from '@standard/middleware'
import mock from './mock.json'
import result from '@standard/result'

const storage = middleware(async function (stats) {
  const url = '//saas.atlasfacil.com.br/Home/CarregaSituacoes'
  const payload = stats[magic.post]?.()
  const { data, error } = await http.post(url).body(payload).json()
    ? stats[result.Ok]?.(mock)
    : stats[result.Error]?.(error)
})

export default storage
