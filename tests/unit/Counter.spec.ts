import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(Counter, {
      props: { msg: 'Test Message' }
    })
    expect(wrapper.text()).toContain('Test Message')
  })

  it('increments count when button is clicked', async () => {
    const wrapper = mount(Counter, {
      props: { msg: 'Test' }
    })
    const button = wrapper.find('button')
    
    expect(button.text()).toContain('count is 0')
    await button.trigger('click')
    expect(button.text()).toContain('count is 1')
  })

  it('opens modal when Edit count is clicked', async () => {
    const wrapper = mount(Counter, {
      props: { msg: 'Test' }
    })
    
    const editButton = wrapper.findAll('button')[1]
    await editButton.trigger('click')
    
    // Check if modal becomes visible
    const modal = wrapper.findComponent({ name: 'EditCountModal' })
    expect(modal.props('visible')).toBe(true)
  })
})
