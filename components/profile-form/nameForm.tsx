import { useRecoilState } from "recoil"
import { nameAtom } from "./recoilState"
import { TextField } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function NameForm({ defaultValue }: Props) {
  const [state, setState] = useRecoilState(nameAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="name">
          <h3 className="font-bold">ニックネーム</h3>
        </label>
        <TextField
          id={"name"}
          name={"name"}
          defaultValue={defaultValue}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </>
  )
}
