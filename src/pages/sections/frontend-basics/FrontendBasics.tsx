import { ContentPage } from '../../../components/ContentPage'
import { TopicCardList } from '../../../components/TopicCardList'
import { getSection } from '../../../data/roadmap'

const section = getSection('frontend-basics')!

export default function FrontendBasics() {
  return (
    <ContentPage title={section.title} summary={section.summary}>
      <h2>Sotto-argomenti</h2>
      <p>Approfondisci ciascun argomento di questa sezione:</p>
      <TopicCardList section={section} />
    </ContentPage>
  )
}
