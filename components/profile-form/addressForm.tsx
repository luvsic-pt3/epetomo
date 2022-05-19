import { useRecoilState } from "recoil"
import { addressAtom } from "./recoilState"
import { MenuItem, Select } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function AddressForm({ defaultValue }: Props) {
  const [state, setState] = useRecoilState(addressAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="address">
          <h3 className="font-bold">都道府県</h3>
        </label>
        <Select
          labelId="address"
          id="address"
          defaultValue={defaultValue}
          onChange={(event) => setState(event.target.value)}
        >
          <MenuItem value={"北海道"}>北海道</MenuItem>
          <MenuItem value={"東北"}>東北</MenuItem>
          <MenuItem value={"関東"}>関東</MenuItem>
          <MenuItem value={"北陸"}>北陸</MenuItem>
          <MenuItem value={"東海"}>東海</MenuItem>
          <MenuItem value={"関西"}>関西</MenuItem>
          <MenuItem value={"中国"}>中国</MenuItem>
          <MenuItem value={"四国"}>四国</MenuItem>
          <MenuItem value={"九州"}>九州</MenuItem>
          <MenuItem value={"沖縄"}>沖縄</MenuItem>
        </Select>
      </div>
    </>
  )
}
