import Profile from "./profile"
import { Grid } from "@mui/material"

function Profiles({ profiles }) {
  console.log(profiles)
  if (profiles) {
    return (
      <div>
        <Grid container spacing={3}>
          {profiles.map((profile) => (
            <Grid item xs={3}>
              <Profile profile={profile} />
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
