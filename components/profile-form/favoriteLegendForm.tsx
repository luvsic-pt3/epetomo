import { useRecoilState } from "recoil"
import { favoriteLegendAtom } from "./recoilState"
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Chip from "@material-ui/core/Chip"
import * as React from "react"

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

export function FavoriteLegendForm({ defaultValue }: Props) {
  const classes = useStyles()
  const theme = useTheme()

  const [state, setState] = useRecoilState(favoriteLegendAtom)
  const chipDelete = (name: string) => {
    setState(state.filter((value) => value !== name))
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setState(event.target.value as string[])
  }

  console.log(state)
  return (
    <div>
      <div className="my-4">
        <label htmlFor="favoriteLegend">
          <h3 className="font-bold">好きなレジェンド</h3>
        </label>
      </div>
      <FormControl className={classes.formControl}>
        <Select
          id="favoriteLegend"
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
          <MenuItem value={"ブラッドハウンド"}>ブラッドハウンド</MenuItem>
          <MenuItem value={"ジブラルタル"}>ジブラルタル</MenuItem>
          <MenuItem value={"ライフライン"}>ライフライン</MenuItem>
          <MenuItem value={"パスファインダー"}>パスファインダー</MenuItem>
          <MenuItem value={"レイス"}>レイス</MenuItem>
          <MenuItem value={"バンガロール"}>バンガロール</MenuItem>
          <MenuItem value={"ミラージュ"}>ミラージュ</MenuItem>
          <MenuItem value={"コースティック"}>コースティック</MenuItem>
          <MenuItem value={"オクタン"}>オクタン</MenuItem>
          <MenuItem value={"ワットソン"}>ワットソン</MenuItem>
          <MenuItem value={"クリプト"}>クリプト</MenuItem>
          <MenuItem value={"レヴナント"}>レヴナント</MenuItem>
          <MenuItem value={"ローバ"}>ローバ</MenuItem>
          <MenuItem value={"ランパート"}>ランパート</MenuItem>
          <MenuItem value={"ホライゾン"}>ホライゾン</MenuItem>
          <MenuItem value={"ヒューズ"}>ヒューズ</MenuItem>
          <MenuItem value={"ヴァルキリー"}>ヴァルキリー</MenuItem>
          <MenuItem value={"シア"}>シア</MenuItem>
          <MenuItem value={"アッシュ"}>アッシュ</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
