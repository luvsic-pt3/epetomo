import { useSetRecoilState } from "recoil"
import { highestDamageAtom } from "./recoilState"
import { TextField } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function HighestDamageForm({ defaultValue }: Props) {
  const setState = useSetRecoilState(highestDamageAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="highestDamage">
          <h3 className="font-bold">最高ダメージ</h3>
        </label>
        <TextField
          id={"highestDamage"}
          name={"highestDamage"}
          defaultValue={defaultValue}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </>
  )
}
