import { ContentPage } from '../../../components/ContentPage'
import { Placeholder } from '../../../components/Placeholder'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('frontend-basics', 'javascript')!

export default function JavaScript() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <Placeholder />
    </ContentPage>
  )
}
