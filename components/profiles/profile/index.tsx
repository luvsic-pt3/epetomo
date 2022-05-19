import { useState } from "react"
import { mutate } from "swr"
import { styled } from "@mui/material/styles"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import { IconButton, Typography } from "@mui/material"
import { IconButtonProps } from "@mui/material/IconButton"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Collapse from "@mui/material/Collapse"
import Link from "@material-ui/core/Link"

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

function Profile({ profile: profile }) {
  const [deleting, setDeleting] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  async function deleteProfile() {
    setDeleting(true)
    let res = await fetch(`/api/delete-profile?id=${profile.id}`, {
      method: "DELETE",
    })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate("/api/get-profiles")
    setDeleting(false)
  }

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={"text.secondary"} gutterBottom>
          {profile.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {profile.sex}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {profile.age}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {profile.platform}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {profile.playstyle}
        </Typography>
        <Typography variant="body2">
          {profile.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>地域:</Typography>
          <Typography paragraph>{profile.address}</Typography>
          <Typography paragraph>TwitterID:</Typography>
          <Link href={`https://twitter.com/${profile.twitter_id}`}>
            {profile.twitter_id}
          </Link>
          <Typography paragraph>VC:</Typography>
          <Typography paragraph>{profile.voicechat}</Typography>
          <Typography paragraph>よくプレイする時間帯:</Typography>
          <Typography paragraph>{profile.time_to_play}</Typography>
          <Typography paragraph>好きな武器:</Typography>
          <Typography paragraph>{profile.favorite_weapon}</Typography>
          <Typography paragraph>好きなレジェンド:</Typography>
          <Typography paragraph>{profile.favorite_legend}</Typography>
          <Typography paragraph>最高ダメージ:</Typography>
          <Typography paragraph>{profile.highest_damage}</Typography>
          <Typography paragraph>キル/デス比:</Typography>
          <Typography paragraph>{profile.kill_per_death}</Typography>
          <Typography paragraph>ランク:</Typography>
          <Typography paragraph>{profile.rank}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Profile
