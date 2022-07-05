import ProfileItem from "./profile"
import { Grid } from "@mui/material"
import { Profile } from "./type"

function Profiles({ profiles }) {
  profiles.map((profile: Profile) => console.log(profile))
  if (profiles) {
    return (
      <div>
        <Grid container spacing={3}>
          {profiles.map((profile: Profile) => (
            <Grid item xs={3}>
              <ProfileItem profile={profile} />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  } else {
    return null
  }
}

export default Profiles
