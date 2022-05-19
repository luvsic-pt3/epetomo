import { useRecoilState } from "recoil"
import { voiceChatAtom } from "./recoilState"
import { MenuItem, Select } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function VoiceChatForm({ defaultValue }: Props) {
  const [state, setState] = useRecoilState(voiceChatAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="voiceChat">
          <h3 className="font-bold">ボイスチャット</h3>
        </label>
        <Select
          labelId="voiceChat"
          id="voiceChat"
          defaultValue={defaultValue}
          onChange={(event) => setState(event.target.value)}
        >
          <MenuItem value={"あり"}>あり</MenuItem>
          <MenuItem value={"なしog"}>なし</MenuItem>
        </Select>
      </div>
    </>
  )
}
