import Container from "@/components/container"
import Nav from "@/components/nav"
import EditProfileForm from "@/components/edit-profile-form"
import { useRouter } from "next/router"
import { useProfile } from "../../../lib/swr-hooks"

export default function EditProfilePage() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useProfile(id)
  if (data) {
    return (
      <>
        <Nav title="えぺとも" />
        <Container>
          <EditProfileForm
            id={data.id}
            name={data.name}
            sex={data.sex}
            age={data.age}
            address={data.address}
            twitterId={data.twitter_id}
            platform={data.platform}
            playStyle={data.playstyle}
            voiceChat={data.voicechat}
            timeToPlay={data.time_to_play}
            purpose={data.purpose}
            favoriteWeapon={data.favorite_weapon}
            favoriteLegend={data.favorite_legend}
            highestDamage={data.highest_damage}
            killPerDeath={data.kill_per_death}
            rank={data.rank}
            description={data.description}
          />
        </Container>
      </>
    )
  } else {
    return (
      <>
        <Nav title="Edit" />
        <Container></Container>
      </>
    )
  }
}
