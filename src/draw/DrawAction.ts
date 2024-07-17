import { KonvaEventObject } from "konva/lib/Node";

export enum DrawActionType {
    None,
    LineSegment,
    CircleSegment,
    ArcSegment,
}

export interface DrawAction {
    actionType(): DrawActionType;
    onStart(): void;
    onDraw(): void;
    onStop(): void;
    onPointerDown(_event: KonvaEventObject<MouseEvent>): void;
    onPointerMove(_event: KonvaEventObject<MouseEvent>): void;
    onPointerUp(_event: KonvaEventObject<MouseEvent>): void;
}
