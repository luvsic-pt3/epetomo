import { useRecoilState } from "recoil"
import { platFormAtom } from "./recoilState"
import { MenuItem, Select } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function PlatFormForm({ defaultValue }: Props) {
  const [state, setState] = useRecoilState(platFormAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="platForm">
          <h3 className="font-bold">プラットフォーム</h3>
        </label>
        <Select
          labelId="platForm"
          id="platForm"
          defaultValue={defaultValue}
          onChange={(event) => setState(event.target.value)}
        >
          <MenuItem value={"PC"}>PC</MenuItem>
          <MenuItem value={"PS4・PS5"}>PS4・PS5</MenuItem>
          <MenuItem value={"Switch"}>Switch</MenuItem>
        </Select>
      </div>
    </>
  )
}
