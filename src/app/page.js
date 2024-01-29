import { Banner, EditorSection, MissionObjectives, TeamMembers } from "@/components";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <MissionObjectives />
      <EditorSection />
      <TeamMembers />
    </div>
  )
}