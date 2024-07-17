import { KonvaEventObject } from "konva/lib/Node";
import useDrawStore from "../store/useDrawStore";
import { DrawAction, DrawActionType } from "./DrawAction";

export class DrawLineSegmentAction implements DrawAction {
    private static instance: DrawLineSegmentAction;

    private drawFlag: boolean;

    private constructor() {
        this.drawFlag = false;
    }

    public static getInstance(): DrawLineSegmentAction {
        if (!DrawLineSegmentAction.instance) {
            DrawLineSegmentAction.instance = new DrawLineSegmentAction();
        }
        return DrawLineSegmentAction.instance;
    }

    public actionType(): DrawActionType {
        return DrawActionType.LineSegment;
    }

    public onStart(): void {}

    public onDraw(): void {}

    public onStop(): void {
        this.drawFlag = false;
        useDrawStore().setTempLine(null);
    }

    public onPointerDown(event: KonvaEventObject<MouseEvent>): void {
        if (event.evt.button == 0) {
            const stage = event.target.getStage();
            if (stage) {
                if (this.drawFlag) {
                    const tempLine = useDrawStore().tempLine;
                    if (tempLine) {
                        useDrawStore().addLine(tempLine);
                        useDrawStore().setTempLine(null);
                    }
                    this.drawFlag = false;
                } else {
                    const start = stage.getPointerPosition();
                    const end = stage.getPointerPosition();
                    if (start && end) {
                        useDrawStore().setTempLine([start, end]);
                        this.drawFlag = true;
                    }
                }
            }
        } else if (event.evt.button == 2) {
            this.drawFlag = false;
            useDrawStore().setTempLine(null);
        }
    }

    public onPointerMove(event: KonvaEventObject<MouseEvent>): void {
        if (this.drawFlag) {
            const tempLine = useDrawStore().tempLine;
            if (tempLine) {
                const stage = event.target.getStage();
                if (stage) {
                    const end = stage.getPointerPosition();
                    if (end) {
                        useDrawStore().setTempLine([tempLine[0], end]);
                    }
                }
            }
        }
    }

    public onPointerUp(event: KonvaEventObject<MouseEvent>): void {}
}
