import { useSetRecoilState } from "recoil"
import { timeToPlayAtom } from "./recoilState"
import { MenuItem, Select } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function TimeToPlayForm({ defaultValue }: Props) {
  const setState = useSetRecoilState(timeToPlayAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="timeToPlay">
          <h3 className="font-bold">プレイ時間帯</h3>
        </label>
        <Select
          labelId="timeToPlay"
          id="timeToPlay"
          defaultValue={defaultValue}
          onChange={(event) => setState(event.target.value)}
        >
          <MenuItem value={"平日昼"}>平日昼</MenuItem>
          <MenuItem value={"平日夜"}>平日夜</MenuItem>
          <MenuItem value={"休日昼"}>休日昼</MenuItem>
          <MenuItem value={"休日夜"}>休日夜</MenuItem>
        </Select>
      </div>
    </>
  )
}
