import { useEffect, useState } from "react"
import Router from "next/router"
import Button from "../button"
import { NameForm } from "./nameForm"
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
} from "./recoilState"
import { useRecoilState } from "recoil"
import { SexForm } from "./sexForm"
import { AgeForm } from "./ageForm"
import { TwitterIdForm } from "./twitterIdForm"
import { PlatFormForm } from "./platformForm"
import { FavoriteLegendForm } from "./favoriteLegendForm"
import { HighestDamageForm } from "./highestDamageForm"
import { KillPerDeathForm } from "./killPerDeathForm"
import { RankForm } from "./rankForm"
import { VoiceChatForm } from "./voiceChatForm"
import { DescriptionForm } from "./descriptionForm"
import { AddressForm } from "./addressForm"
import { PlayStyleForm } from "./playstyleForm"
import { TimeToPlayForm } from "./timeToPlayForm"
import { FavoriteWeaponForm } from "./favoriteWeaponForm"

export default function ProfileForm() {
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

  const [submitting, setSubmitting] = useState(false)
  useEffect(() => {
    setNameState("")
    setSexState("")
    setAgeState("")
    setAddressState("")
    setTwitterIdState("")
    setPlatFormState("")
    setPlayStyleState("")
    setVoiceChatState("")
    setTimeToPlayState("")
    setPurposeState("")
    setFavoriteLegendState([])
    setFavoriteWeaponState([])
    setHighestDamageState("")
    setKillPerDeathState("")
    setRankState("")
    setDescriptionState("")
  }, [])

  async function submitHandler(e) {
    setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch("/api/create-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameState,
          sex: sexState,
          age: ageState,
          address: addressState,
          twitter_id: twitterIdState,
          platform: platFormState,
          playstyle: playStyleState,
          voicechat: voiceChatState,
          time_to_play: timeToPlayState,
          purpose: "a",
          favorite_weapon: favoriteWeaponState.join(","),
          favorite_legend: favoriteLegendState.join(","),
          highest_damage: highestDamageState,
          kill_per_death: killPerDeathState,
          rank: rankState,
          description: descriptionState,
        }),
      })
      setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      Router.push("/")
    } catch (e) {
      throw Error(e.message)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <NameForm />
      <SexForm />
      <AgeForm />
      <AddressForm />
      <TwitterIdForm />
      <PlatFormForm />
      <PlayStyleForm />
      <TimeToPlayForm />
      <FavoriteLegendForm />
      <FavoriteWeaponForm />
      <HighestDamageForm />
      <KillPerDeathForm />
      <RankForm />
      <VoiceChatForm />
      <DescriptionForm />

      <Button disabled={submitting} type="submit">
        {submitting ? "Creating ..." : "Create"}
      </Button>
    </form>
  )
}
