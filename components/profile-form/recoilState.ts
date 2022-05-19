import { atom, MutableSnapshot, selector } from "recoil"

interface NameAtom {
  inputValue: string
}

export const nameAtom = atom<NameAtom>({
  key: "profile-form/NameAtom",
  default: {
    inputValue: "",
  },
})

interface SexAtom {
  inputValue: string
}

export const sexAtom = atom<SexAtom>({
  key: "profile-form/SexAtom",
  default: {
    inputValue: "",
  },
})

interface AgeAtom {
  inputValue: string
}

export const ageAtom = atom<AgeAtom>({
  key: "profile-form/AgeAtom",
  default: {
    inputValue: "",
  },
})

interface TwitterIdAtom {
  inputValue: string
}

export const twitterIdAtom = atom<TwitterIdAtom>({
  key: "profile-form/TwitterIdAtom",
  default: {
    inputValue: "",
  },
})

interface AddressAtom {
  inputValue: string
}

export const addressAtom = atom<AddressAtom>({
  key: "profile-form/addressAtom",
  default: {
    inputValue: "",
  },
})

interface DescriptionAtom {
  inputValue: string
}

export const descriptionAtom = atom<DescriptionAtom>({
  key: "profile-form/descriptionAtom",
  default: {
    inputValue: "",
  },
})

// interface FavoriteLegendAtom {
//   inputValue: string[]
// }
//
// export const favoriteLegendAtom = atom<FavoriteLegendAtom>({
//   key: "profile-form/favoriteLegendAtom",
//   default: {
//     inputValue: [""],
//   },
// })

export const favoriteLegendAtom = atom<string[]>({
  key: "profile-form/favoriteLegendAtom",
  default: [],
})

// interface FavoriteWeaponAtom {
//   inputValue: string[]
// }
//
// export const favoriteWeaponAtom = atom<FavoriteWeaponAtom>({
//   key: "profile-form/favoriteWeaponAtom",
//   default: {
//     inputValue: [""],
//   },
// })

export const favoriteWeaponAtom = atom<string[]>({
  key: "profile-form/favoriteWeaponAtom",
  default: [""],
})

interface KillPerDeathAtom {
  inputValue: string
}

export const killPerDeathAtom = atom<KillPerDeathAtom>({
  key: "profile-form/killPerDeathAtom",
  default: {
    inputValue: "",
  },
})

interface HighestDamageAtom {
  inputValue: string
}

export const highestDamageAtom = atom<HighestDamageAtom>({
  key: "profile-form/highestDamageAtom",
  default: {
    inputValue: "",
  },
})

interface PlatFormAtom {
  inputValue: string
}

export const platFormAtom = atom<PlatFormAtom>({
  key: "profile-form/platFormAtom",
  default: {
    inputValue: "",
  },
})

interface PurposeAtom {
  inputValue: string
}

export const purposeAtom = atom<PurposeAtom>({
  key: "profile-form/purposeAtom",
  default: {
    inputValue: "",
  },
})

interface RankAtom {
  inputValue: string
}

export const rankAtom = atom<RankAtom>({
  key: "profile-form/rankAtom",
  default: {
    inputValue: "",
  },
})

interface PlayStyleAtom {
  inputValue: string
}

export const playStyleAtom = atom<PlayStyleAtom>({
  key: "profile-form/playStyleAtom",
  default: {
    inputValue: "",
  },
})

interface timeToPlayAtom {
  inputValue: string
}

export const timeToPlayAtom = atom<timeToPlayAtom>({
  key: "profile-form/timeToPlayAtom",
  default: {
    inputValue: "",
  },
})

interface VoiceChatAtom {
  inputValue: string
}

export const voiceChatAtom = atom<VoiceChatAtom>({
  key: "profile-form/voiceChatAtom",
  default: {
    inputValue: "",
  },
})

// export const taskNameSelector = selector<{
//   inputValue: string
//   validationMessage: string | null
//   validationError: TaskNameValidationError | null
// }>({
//   key: "tasks/edit/taskNameSelector",
//   get: ({ get }) => {
//     const { inputValue } = get(taskNameAtom)
//     const maxTaskNameLength = constants.maxTaskNameLength
//     const invalid = !validateMaxLength(inputValue, maxTaskNameLength)
//
//     return {
//       inputValue: inputValue,
//       validationMessage: invalid
//         ? `案件名は${maxTaskNameLength}文字以内で入力してください`
//         : null,
//       validationError: invalid ? "exceededMaxLength" : null,
//     }
//   },
// })

export function initializeState() {
  return ({ set }: MutableSnapshot) => {
    set(nameAtom, {
      inputValue: "",
    })
    set(sexAtom, {
      inputValue: "",
    })
    set(twitterIdAtom, {
      inputValue: "",
    })
    set(ageAtom, {
      inputValue: "",
    })
    set(addressAtom, {
      inputValue: "",
    })
    set(descriptionAtom, {
      inputValue: "",
    })
    set(favoriteWeaponAtom, {
      inputValue: "",
    })
    set(highestDamageAtom, {
      inputValue: "",
    })
    set(killPerDeathAtom, {
      inputValue: "",
    })
    set(platFormAtom, {
      inputValue: "",
    })
    set(purposeAtom, {
      inputValue: "",
    })
    set(timeToPlayAtom, {
      inputValue: "",
    })
    set(voiceChatAtom, {
      inputValue: "",
    })
    set(rankAtom, {
      inputValue: "",
    })
    set(playStyleAtom, {
      inputValue: "",
    })
    set(favoriteLegendAtom, [])
    set(favoriteWeaponAtom, [""])
  }
}
