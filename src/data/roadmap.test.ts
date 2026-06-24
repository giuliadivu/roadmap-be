import { describe, it, expect } from 'vitest'
import {
  roadmap,
  availableSections,
  getSection,
  getTopic,
  sectionPath,
} from './roadmap'

describe('roadmap config', () => {
  it('contiene le prime due sezioni richieste', () => {
    expect(getSection('introduction')?.status).toBe('available')
    expect(getSection('frontend-basics')?.status).toBe('available')
  })

  it('Frontend Basics ha i 4 sotto-argomenti', () => {
    const topics = getSection('frontend-basics')?.topics ?? []
    expect(topics.map((t) => t.slug)).toEqual([
      'html',
      'css',
      'javascript',
      'browsers',
    ])
  })

  it('Relational Databases ha macro-risorse e le micro migrations + n-plus-one', () => {
    const section = getSection('relational-databases')
    expect(section?.status).toBe('available')
    expect((section?.resources ?? []).length).toBeGreaterThan(0)
    expect(section?.topics?.map((t) => t.slug)).toEqual([
      'migrations',
      'n-plus-one',
    ])
  })

  it('Learn about APIs ha le 6 micro sezioni richieste', () => {
    const section = getSection('learn-about-apis')
    expect(section?.status).toBe('available')
    expect(section?.topics?.map((t) => t.slug)).toEqual([
      'api-styles',
      'open-api-specs',
      'authentication',
      'web-security',
      'hashing-algorithms',
      'api-security-best-practices',
    ])
  })

  it('ha slug di sezione univoci', () => {
    const slugs = roadmap.map((s) => s.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('ogni risorsa ha una nota esplicativa non vuota', () => {
    const resources = [
      ...availableSections.flatMap((s) => s.resources ?? []),
      ...availableSections.flatMap(
        (s) => s.topics?.flatMap((t) => t.resources) ?? [],
      ),
    ]
    expect(resources.length).toBeGreaterThan(0)
    for (const r of resources) {
      expect(r.note.trim().length).toBeGreaterThan(0)
    }
  })

  it('costruisce i path annidati', () => {
    expect(sectionPath('frontend-basics', 'html')).toBe('/frontend-basics/html')
    expect(getTopic('frontend-basics', 'html')?.title).toBe('HTML')
  })
})
