import { useRecoilState } from "recoil"
import { twitterIdAtom } from "./recoilState"
import { TextField } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function TwitterIdForm({ defaultValue }: Props) {
  const [state, setState] = useRecoilState(twitterIdAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="twitterId">
          <h3 className="font-bold">TwitterID</h3>
        </label>
        <TextField
          id={"twitterId"}
          name={"twitterId"}
          defaultValue={defaultValue}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </>
  )
}
