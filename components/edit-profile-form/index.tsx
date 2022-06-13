import { useEffect, useState } from "react"
import Router from "next/router"
import Button from "../button"
import {
  addressAtom,
  ageAtom,
  descriptionAtom,
  favoriteLegendAtom,
  favoriteWeaponAtom,
  highestDamageAtom,
  killPerDeathAtom,
  nameAtom,
  platFormAtom,
  playStyleAtom,
  purposeAtom,
  rankAtom,
  sexAtom,
  timeToPlayAtom,
  twitterIdAtom,
  voiceChatAtom,
} from "../profile-form/recoilState"
import { useRecoilState } from "recoil"

import { NameForm } from "../profile-form/nameForm"
import { SexForm } from "../profile-form/sexForm"
import { AgeForm } from "../profile-form/ageForm"
import { TwitterIdForm } from "../profile-form/twitterIdForm"
import { PlatFormForm } from "../profile-form/platformForm"
import { FavoriteLegendForm } from "../profile-form/favoriteLegendForm"
import { HighestDamageForm } from "../profile-form/highestDamageForm"
import { KillPerDeathForm } from "../profile-form/killPerDeathForm"
import { RankForm } from "../profile-form/rankForm"
import { VoiceChatForm } from "../profile-form/voiceChatForm"
import { DescriptionForm } from "../profile-form/descriptionForm"
import { FavoriteWeaponForm } from "../profile-form/favoriteWeaponForm"

interface ProfileFormProps {
  id: number
  name: string
  sex: string
  age: string
  address: string
  twitterId: string
  platform: string
  playStyle: string
  voiceChat: string
  timeToPlay: string
  purpose: string
  favoriteWeapon: string[]
  favoriteLegend: string[]
  highestDamage: string
  killPerDeath: string
  rank: string
  description: string
}
export default function ProfileForm({
  id,
  name,
  sex,
  age,
  address,
  twitterId,
  platform,
  playStyle,
  voiceChat,
  timeToPlay,
  purpose,
  favoriteWeapon,
  favoriteLegend,
  highestDamage,
  killPerDeath,
  rank,
  description,
}: ProfileFormProps) {
  const [nameState, setNameState] = useRecoilState(nameAtom)
  const [sexState, setSexState] = useRecoilState(sexAtom)
  const [ageState, setAgeState] = useRecoilState(ageAtom)
  const [addressState, setAddressState] = useRecoilState(addressAtom)
  const [twitterIdState, setTwitterIdState] = useRecoilState(twitterIdAtom)
  const [platFormState, setPlatFormState] = useRecoilState(platFormAtom)
  const [playStyleState, setPlayStyleState] = useRecoilState(playStyleAtom)
  const [purposeState, setPurposeState] = useRecoilState(purposeAtom)
  const [timeToPlayState, setTimeToPlayState] = useRecoilState(timeToPlayAtom)
  const [favoriteLegendState, setFavoriteLegendState] =
    useRecoilState(favoriteLegendAtom)
  const [favoriteWeaponState, setFavoriteWeaponState] =
    useRecoilState(favoriteWeaponAtom)
  const [highestDamageState, setHighestDamageState] =
    useRecoilState(highestDamageAtom)
  const [killPerDeathState, setKillPerDeathState] =
    useRecoilState(killPerDeathAtom)
  const [rankState, setRankState] = useRecoilState(rankAtom)
  const [voiceChatState, setVoiceChatState] = useRecoilState(voiceChatAtom)
  const [descriptionState, setDescriptionState] =
    useRecoilState(descriptionAtom)

  useEffect(() => {
    setNameState(name)
    setSexState(sex)
    setAgeState(age)
    setAddressState(address)
    setTwitterIdState(twitterId)
    setPlatFormState(platform)
    setPlayStyleState(playStyle)
    setVoiceChatState(voiceChat)
    setTimeToPlayState(timeToPlay)
    setPurposeState(purpose)
    setFavoriteLegendState(favoriteLegend)
    setFavoriteWeaponState(favoriteWeapon)
    setHighestDamageState(highestDamage)
    setKillPerDeathState(killPerDeath)
    setRankState(rank)
    setDescriptionState(description)
  }, [])

  const [submitting, setSubmitting] = useState(false)

  async function submitHandler(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch("/api/edit-profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          name: nameState,
          sex: sexState,
          age: ageState,
          address: addressState,
          twitter_id: twitterIdState,
          platform: platFormState,
          playstyle: playStyleState,
          voicechat: voiceChatState,
          time_to_play: timeToPlayState,
          purpose: purposeState,
          favorite_weapon: favoriteWeaponState,
          favorite_legend: favoriteLegendState,
          highest_damage: highestDamageState,
          kill_per_death: killPerDeathState,
          rank: rankState,
          description: descriptionState,
        }),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)
      Router.push("/")
    } catch (e) {
      throw Error(e.message)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <NameForm defaultValue={name} />
      <SexForm defaultValue={sex} />
      <AgeForm defaultValue={age} />
      <TwitterIdForm defaultValue={twitterId} />
      <PlatFormForm defaultValue={platform} />
      <FavoriteLegendForm defaultValue={favoriteLegend} />
      <FavoriteWeaponForm />
      <HighestDamageForm defaultValue={highestDamage} />
      <KillPerDeathForm defaultValue={killPerDeath} />
      <RankForm defaultValue={rank} />
      <VoiceChatForm defaultValue={voiceChat} />
      <DescriptionForm defaultValue={description} />
      <Button disabled={submitting} type="submit">
        {submitting ? "Saving ..." : "Save"}
      </Button>
    </form>
  )
}
