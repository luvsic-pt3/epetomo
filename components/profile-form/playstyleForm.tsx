import { useSetRecoilState } from "recoil"
import { playStyleAtom } from "./recoilState"
import { MenuItem, Select } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function PlayStyleForm({ defaultValue }: Props) {
  const setState = useSetRecoilState(playStyleAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="playstyle">
          <h3 className="font-bold">プレイスタイル</h3>
        </label>
        <Select
          labelId="playstyle"
          id="playstyle"
          defaultValue={defaultValue}
          onChange={(event) => setState(event.target.value)}
        >
          <MenuItem value={"まったり"}>まったり</MenuItem>
          <MenuItem value={"ガチ"}>ランクガチ勢</MenuItem>
        </Select>
      </div>
    </>
  )
}
