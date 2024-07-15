import { describe, expect, test } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'
console.log('sdfsdfsdf')
describe('hello', async () => {
  console.log('sdfsdfsdf')
  await setup({
  }
  )

  test('simple test', async () => {
    console.log('hiiii')
    const html = await $fetch('/invitation/not-found')
    console.log('sss',html)
    expect(html).toContain('Kubikulum')
  })
})