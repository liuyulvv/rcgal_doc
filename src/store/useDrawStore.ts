import { Vector2d } from "konva/lib/types";
import { defineStore } from "pinia";
import { CircleSegment2, LineSegment2, Point2, Segment2, Segment2Type, SweepSegment2Intersection } from "rcgal";

const intersect = (lines: Array<[Vector2d, Vector2d]>, circles: Array<[Vector2d, number]>) => {
    const intersection = new SweepSegment2Intersection();
    lines.forEach((line) => {
        const [start, end] = line;
        intersection.push_segment(
            new Segment2(
                Segment2Type.LineSegment2,
                new LineSegment2(new Point2(start.x, start.y), new Point2(end.x, end.y))
            )
        );
    });
    circles.forEach((circle) => {
        const [center, radius] = circle;
        intersection.push_segment(
            new Segment2(
                Segment2Type.CircleSegment2,
                undefined,
                new CircleSegment2(new Point2(center.x, center.y), radius)
            )
        );
    });
    const start = Date.now();
    const points = intersection.intersection();
    const end = Date.now();
    let result: Array<[Vector2d, number]> = [];
    points.forEach((point) => {
        result.push([{ x: point.x(), y: point.y() }, 5]);
    });
    return { points: result, cost: end - start };
};

const useDrawStore = defineStore({
    id: "drawStore",
    state: () => ({
        cost: null as number | null,
        points: [] as Array<[Vector2d, number]>,
        lines: [] as Array<[Vector2d, Vector2d]>,
        circles: [] as Array<[Vector2d, number]>,
        tempLine: null as [Vector2d, Vector2d] | null,
        tempCircle: null as [Vector2d, number] | null,
    }),
    actions: {
        clear() {
            this.cost = null;
            this.points = [];
            this.lines = [];
            this.circles = [];
            this.tempLine = null;
            this.tempCircle = null;
        },
        addLine(line: [Vector2d, Vector2d]) {
            const updateLines = [...this.lines, line];
            const circles = this.circles;
            const intersection = intersect(updateLines, circles);
            this.lines = updateLines;
            this.points = intersection.points;
            this.cost = intersection.cost;
        },
        addTempLine() {
            if (this.tempLine) {
                const updateLines = [...this.lines, this.tempLine];
                const circles = this.circles;
                const intersection = intersect(updateLines, circles);
                this.lines = updateLines;
                this.tempLine = null;
                this.points = intersection.points;
                this.cost = intersection.cost;
            }
        },
        setTempLine(line: [Vector2d, Vector2d] | null) {
            this.tempLine = line;
        },
        addCircle(circle: [Vector2d, number]) {
            const updateCircles = [...this.circles, circle];
            const lines = this.lines;
            const intersection = intersect(lines, updateCircles);
            this.circles = updateCircles;
            this.points = intersection.points;
            this.cost = intersection.cost;
        },
        addTempCircle() {
            if (this.tempCircle) {
                const updateCircles = [...this.circles, this.tempCircle];
                const lines = this.lines;
                const intersection = intersect(lines, updateCircles);
                this.circles = updateCircles;
                this.tempCircle = null;
                this.points = intersection.points;
                this.cost = intersection.cost;
            }
        },
        setTempCircle(circle: [Vector2d, number] | null) {
            this.tempCircle = circle;
        },
    },
});

export default useDrawStore;
