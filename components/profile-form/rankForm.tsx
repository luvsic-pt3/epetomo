import { useRecoilState } from "recoil"
import { rankAtom } from "./recoilState"
import { MenuItem, Select } from "@material-ui/core"

interface Props {
  defaultValue?: string
}

export function RankForm({ defaultValue }: Props) {
  const [state, setState] = useRecoilState(rankAtom)

  return (
    <>
      <div className="my-4">
        <label htmlFor="rank">
          <h3 className="font-bold">ランク</h3>
        </label>
        <Select
          labelId="rank"
          id="rank"
          defaultValue={defaultValue}
          onChange={(event) => setState(event.target.value)}
        >
          <MenuItem value={"ブロンズ"}>ブロンズ</MenuItem>
          <MenuItem value={"シルバー"}>シルバー</MenuItem>
          <MenuItem value={"ゴールド"}>ゴールド</MenuItem>
          <MenuItem value={"プラチナ"}>プラチナ</MenuItem>
          <MenuItem value={"ダイヤモンド"}>ダイヤモンド</MenuItem>
          <MenuItem value={"マスター"}>マスター</MenuItem>
          <MenuItem value={"プレデター"}>プレデター</MenuItem>
        </Select>
      </div>
    </>
  )
}
