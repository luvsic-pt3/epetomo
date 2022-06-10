import { useSetRecoilState } from "recoil"
import { sexAtom } from "./recoilState"
import { MenuItem, Select } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function SexForm({ defaultValue }: Props) {
  const setState = useSetRecoilState(sexAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="sex">
          <h3 className="font-bold">性別</h3>
        </label>
        <Select
          labelId="sex"
          id="sex"
          defaultValue={defaultValue}
          onChange={(event) => setState(event.target.value)}
        >
          <MenuItem value={"男"}>男</MenuItem>
          <MenuItem value={"女"}>女</MenuItem>
        </Select>
      </div>
    </>
  )
}
