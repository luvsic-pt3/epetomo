import Skeleton from "react-loading-skeleton"
import Nav from "../components/nav"
import Container from "../components/container"
import Profiles from "../components/profiles"

import { useProfiles } from "../lib/swr-hooks"

export default function IndexPage() {
  const { profiles, isLoading } = useProfiles()

  if (isLoading) {
    return (
      <div>
        <Nav />
        <Container>
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
        </Container>
      </div>
    )
  }

  return (
    <div>
      <Nav />
      <Container>
        <Profiles profiles={profiles} />
      </Container>
    </div>
  )
}
