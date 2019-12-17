import {playArea} from "./play_area";
import {buildElement} from "../utils/html";

export function redraw() {
    playArea.forEach(row => {
        row.forEach(item => {
            item.node!.className = item.className
        });
    })
}



