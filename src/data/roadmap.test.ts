import { describe, it, expect } from 'vitest'
import {
  roadmap,
  availableSections,
  getSection,
  getTopic,
  getNextTopic,
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

  it('Caching ha le micro redis, memcached e http-caching', () => {
    const section = getSection('caching')
    expect(section?.status).toBe('available')
    expect((section?.resources ?? []).length).toBeGreaterThan(0)
    expect(section?.topics?.map((t) => t.slug)).toEqual([
      'redis',
      'memcached',
      'http-caching',
    ])
  })

  it('Web Servers ha le micro nginx, apache, caddy e ms-iis', () => {
    const section = getSection('learn-about-web-servers')
    expect(section?.status).toBe('available')
    expect(section?.topics?.map((t) => t.slug)).toEqual([
      'nginx',
      'apache',
      'caddy',
      'ms-iis',
    ])
  })

  it('Learn the Basics ha le 5 micro AI', () => {
    const section = getSection('learn-the-basics')
    expect(section?.status).toBe('available')
    expect(section?.topics?.map((t) => t.slug)).toEqual([
      'how-llms-work',
      'ai-vs-traditional-coding',
      'embeddings',
      'vectors',
      'rags',
    ])
  })

  it('getNextTopic restituisce il successivo e undefined sull’ultimo', () => {
    expect(getNextTopic('learn-the-basics', 'how-llms-work')?.slug).toBe(
      'ai-vs-traditional-coding',
    )
    expect(getNextTopic('learn-the-basics', 'rags')).toBeUndefined()
    expect(getNextTopic('introduction', 'whatever')).toBeUndefined()
  })

  it('Introduction ha le 6 micro dei fondamentali di Internet', () => {
    const section = getSection('introduction')
    expect(section?.topics?.map((t) => t.slug)).toEqual([
      'how-does-the-internet-work',
      'what-is-http',
      'what-is-domain-name',
      'what-is-hosting',
      'dns-and-how-it-works',
      'browsers-and-how-they-work',
    ])
  })

  it('Integration Patterns ha streaming, structured-outputs e function-calling', () => {
    const section = getSection('integration-patterns')
    expect(section?.status).toBe('available')
    expect(section?.topics?.map((t) => t.slug)).toEqual([
      'streaming',
      'structured-outputs',
      'function-calling',
    ])
  })

  it('CI/CD è una sezione a pagina singola (risorse, niente micro)', () => {
    const section = getSection('ci-cd')
    expect(section?.status).toBe('available')
    expect((section?.resources ?? []).length).toBeGreaterThan(0)
    expect(section?.topics).toBeUndefined()
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
