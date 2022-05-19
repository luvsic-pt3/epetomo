import { useRecoilState } from "recoil"
import { descriptionAtom } from "./recoilState"
import { TextareaAutosize } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function DescriptionForm({ defaultValue }: Props) {
  const [state, setState] = useRecoilState(descriptionAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="description">
          <h3 className="font-bold">自由記入欄</h3>
        </label>
        <TextareaAutosize
          id={"description"}
          name={"description"}
          minRows={5}
          defaultValue={defaultValue}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </>
  )
}
