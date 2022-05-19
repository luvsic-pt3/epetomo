import { useRecoilState } from "recoil"
import { killPerDeathAtom } from "./recoilState"
import { TextField } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function KillPerDeathForm({ defaultValue }: Props) {
  const [state, setState] = useRecoilState(killPerDeathAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="killPerDeath">
          <h3 className="font-bold">キルデス比</h3>
        </label>
        <TextField
          id={"killPerDeath"}
          name={"killPerDeath"}
          defaultValue={defaultValue}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </>
  )
}
