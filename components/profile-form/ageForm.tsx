import { useSetRecoilState } from "recoil"
import { ageAtom } from "./recoilState"
import { MenuItem, Select } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function AgeForm({ defaultValue }: Props) {
  const setState = useSetRecoilState(ageAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="age">
          <h3 className="font-bold">年齢</h3>
        </label>
        <Select
          labelId="age"
          id="age"
          defaultValue={defaultValue}
          onChange={(event) => setState(event.target.value)}
        >
          <MenuItem value={"10代前半"}>10代前半</MenuItem>
          <MenuItem value={"10代後半"}>10代後半</MenuItem>
          <MenuItem value={"20代前半"}>20代前半</MenuItem>
          <MenuItem value={"20代後半"}>20代後半</MenuItem>
          <MenuItem value={"30代前半"}>30代前半</MenuItem>
          <MenuItem value={"30代後半"}>30代後半</MenuItem>
          <MenuItem value={"40代前半"}>40代前半</MenuItem>
          <MenuItem value={"40代後半"}>40代後半</MenuItem>
          <MenuItem value={"50代以降"}>50代以降</MenuItem>
        </Select>
      </div>
    </>
  )
}
