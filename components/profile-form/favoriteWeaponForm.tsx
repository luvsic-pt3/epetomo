import { useRecoilState } from "recoil"
import { favoriteWeaponAtom } from "./recoilState"
import { MenuItem, Select } from "@material-ui/core"
import ListSubheader from "@material-ui/core/ListSubheader"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import Chip from "@material-ui/core/Chip"
import * as React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

interface Props {
  defaultValue?: string[]
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }),
)

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export function FavoriteWeaponForm({ defaultValue }: Props) {
  const classes = useStyles()

  const [state, setState] = useRecoilState(favoriteWeaponAtom)

  const chipDelete = (name: string) => {
    setState(state.filter((value) => value !== name))
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setState(event.target.value as string[])
  }

  return (
    <div>
      <div className="my-4">
        <label htmlFor="favoriteWeapon">
          <h3 className="font-bold">好きな武器</h3>
        </label>
      </div>
      <FormControl className={classes.formControl}>
        <Select
          id="favoriteWeapon"
          multiple
          value={typeof state == "string" ? state.split(",") : state}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {(selected as string[]).map((value) => (
                <Chip
                  key={value}
                  label={value}
                  className={classes.chip}
                  onDelete={() => {
                    chipDelete(value)
                  }}
                  onMouseDown={(event) => {
                    event.stopPropagation()
                  }}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          <ListSubheader>アサルトライフル</ListSubheader>
          <MenuItem value={"ヘムロックバーストAR"}>
            ヘムロックバーストAR
          </MenuItem>
          <MenuItem value={"VK-47フラットライン"}>VK-47フラットライン</MenuItem>
          <MenuItem value={"ハボックライフル"}>ハボックライフル</MenuItem>
          <MenuItem value={"R-301 カービン"}>R-301 カービン</MenuItem>
          <ListSubheader>サブマシンガン</ListSubheader>
          <MenuItem value={"プラウラーバーストPDW"}>
            プラウラーバーストPDW
          </MenuItem>
          <MenuItem value={"ボルトSMG"}>ボルトSMG</MenuItem>
          <MenuItem value={"R-99 SMG"}>R-99 SMG</MenuItem>
          <MenuItem value={"オルタネーター SMG"}>オルタネーター SMG</MenuItem>
          <MenuItem value={"C.A.R. SMG"}>C.A.R. SMG</MenuItem>
          <ListSubheader>ライトマシンガン</ListSubheader>
          <MenuItem value={"M600スピッドファイア"}>
            M600スピッドファイア
          </MenuItem>
          <MenuItem value={"L-STAR"}>L-STAR</MenuItem>
          <MenuItem value={"ディボーション"}>ディボーション</MenuItem>
          <MenuItem value={"ランページLMG"}>ランページLMG</MenuItem>
          <ListSubheader>スナイパーライフル</ListSubheader>
          <MenuItem value={"クレーバー.50"}>クレーバー.50</MenuItem>
          <MenuItem value={"チャージライフル"}>チャージライフル</MenuItem>
          <MenuItem value={"センチネル"}>センチネル</MenuItem>
          <MenuItem value={"ロングボウDMR"}>ロングボウDMR</MenuItem>
          <ListSubheader>ショットガン</ListSubheader>
          <MenuItem value={"ピースキーパー"}>ピースキーパー</MenuItem>
          <MenuItem value={"モザンビーク"}>モザンビーク</MenuItem>
          <MenuItem value={"マスティフ"}>マスティフ</MenuItem>
          <MenuItem value={"EVA-8オート"}>EVA-8オート</MenuItem>
          <ListSubheader>ピストル</ListSubheader>
          <MenuItem value={"ウイングマン"}>ウイングマン</MenuItem>
          <MenuItem value={"RE-45"}>RE-45</MenuItem>
          <MenuItem value={"P2020"}>P2020</MenuItem>
          <ListSubheader>マークスマン</ListSubheader>
          <MenuItem value={"トリプルテイク"}>トリプルテイク</MenuItem>
          <MenuItem value={"G7スカウト"}>G7スカウト</MenuItem>
          <MenuItem value={"3030リピーター"}>3030リピーター</MenuItem>
          <MenuItem value={"ボセックボウ"}>ボセックボウ</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
