<template>
    <div ref="container">
        <div ref="header" class="wasm-header">
            <a-config-provider :theme="{
                token: {
                    colorPrimary: '#5b5fc7',
                },
            }">
                <a-radio-group v-model:value="drawType" button-style="solid">
                    <a-radio-button value="line" F>Line Segment</a-radio-button>
                    <a-radio-button value="circle">Circle Segment</a-radio-button>
                </a-radio-group>
                <a-button type="primary" @click="handleStop">Stop</a-button>
                <a-button type="primary" @click="handleClear">Clear</a-button>
            </a-config-provider>

        </div>
        <v-stage :config="configKonva" @pointermove="handlePointerMove" @pointerdown="handlePointerDown">
            <v-layer>
                <v-line v-for="line in drawStore.lines" :config="{
                    points: [line[0].x, line[0].y, line[1].x, line[1].y],
                    stroke: '#df4b26',
                    strokeWidth: 3,
                    tension: 0.5,
                    lineCap: 'round',
                    lineJoin: 'round',
                }" />
                <v-circle v-for="circle in drawStore.circles" :config="{
                    x: circle[0].x,
                    y: circle[0].y,
                    radius: circle[1],
                    stroke: '#df4b26',
                    strokeWidth: 3,
                }" />
                <v-circle v-if="drawStore.tempCircle" :config="{
                    x: drawStore.tempCircle[0].x,
                    y: drawStore.tempCircle[0].y,
                    radius: drawStore.tempCircle[1],
                    stroke: '#df4b26',
                    strokeWidth: 3,
                }" />
                <v-line v-if="drawStore.tempLine" :config="{
                    points: [drawStore.tempLine[0].x, drawStore.tempLine[0].y, drawStore.tempLine[1].x, drawStore.tempLine[1].y],
                    stroke: '#df4b26',
                    strokeWidth: 3,
                    tension: 0.5,
                    lineCap: 'round',
                    lineJoin: 'round',
                }" />
            </v-layer>
            <v-layer>
                <v-circle v-for="point in drawStore.points" :config="{
                    x: point[0].x,
                    y: point[0].y,
                    radius: 5,
                    fill: 'black',
                }" />
            </v-layer>
        </v-stage>
    </div>
</template>

<script>

import { DrawActionType } from "../draw/DrawAction";
import { DrawManager } from "../draw/DrawManager";
import useDrawStore from "../store/useDrawStore";

export default {
    name: "WasmExample",
    data() {
        return {
            drawType: null,
            configKonva: {
                width: 200,
                height: 200
            },
            drawManager: DrawManager.getInstance(),
            drawStore: useDrawStore(),
        };
    },

    methods: {
        handleResize() {
            const content = document.getElementById("VPContent");
            const header = document.getElementsByClassName("VPNav")[0];
            this.configKonva.width = content.clientWidth;
            this.configKonva.height = content.clientHeight - header.clientHeight - this.$refs.header.clientHeight;
        },
        handleStop() {
            this.drawType = null;
        },
        handleClear() {
            this.drawStore.clear();
        },
        handlePointerDown(event) {
            this.drawManager.getActiveAction()?.onPointerDown(event);
        },
        handlePointerMove(event) {
            this.drawManager.getActiveAction()?.onPointerMove(event);
        }
    },

    watch: {
        drawType(value) {
            switch (value) {
                case "line":
                    this.drawManager.setActiveAction(DrawActionType.LineSegment);
                    break;
                case "circle":
                    this.drawManager.setActiveAction(DrawActionType.CircleSegment);
                    break;
                case "arc":
                    this.drawManager.setActiveAction(DrawActionType.ArcSegment);
                    break;
                default:
                    this.drawManager.setActiveAction(DrawActionType.None);
                    break;
            }
        },
    },

    async mounted() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    },

    async unmounted() {
        window.removeEventListener("resize", this.handleResize);
    }
};
</script>

<style>
.wasm-header {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>