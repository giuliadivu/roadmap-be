import { ContentPage } from '../../../components/ContentPage'
import { Placeholder } from '../../../components/Placeholder'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('frontend-basics', 'html')!

export default function Html() {
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
